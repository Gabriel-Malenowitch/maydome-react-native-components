import React, { isValidElement, ReactNode, useRef, useState } from "react"
import { StyleSheet, View } from 'react-native'
import { useTheme } from "../../../hooks"
import { ListContextProvider } from "../../../providers/list-context-provider"
import { RecordContextProvider } from "../../../providers/record-context-provider"
import { Typography } from "../../core/fields/typography"
import { Box, BoxProps } from "../../core/layout/box/box"
import { Paper } from "../../core/layout/cards/paper"

interface DataGridProps<T extends Record<string, any>> extends BoxProps {
    children: ReactNode[]
    recordList: T[]
}

export const DataGrid = <T extends Record<string, any>>({ children, recordList = [], ...rest }: DataGridProps<T>) => {
    const columnRef = useRef<{ width: number}>({ width: 0 })
    console.log(columnRef.current.width)

    return (
        <ListContextProvider<T[]> recordList={recordList}>
            <Box {...rest} sx={{...rest?.sx, direction: 'horizontal', gap: rest?.sx?.gap ?? 2}}>
                {children.map((element, index) => {
                    if (!isValidElement(element)) return <></>
                    const { source } = element.props
                    const cellBorderSize = StyleSheet.hairlineWidth / 8

                    return (
                        <Box key={index} ref={ref => {
                            ref?.measure((_0, _1, width) => {
                                columnRef.current.width = width
                            })
                        }}>
                            <Box sx={{alignItems: 'center', justifyContent: 'center', width: columnRef.current.width }}>
                                <Box sx={{ mb: 1, bb: 1 / 16, p: 1}}>
                                    <Typography fontWeight="bolder">{source}</Typography>
                                </Box>
                            </Box>
                            {recordList.map((record, recordIndex) => (
                                <Paper key={recordIndex} sx={{ 
                                    mb: 0.5, 
                                    mr: 2,
                                    // bl: (index > 0) ? cellBorderSize : 0, 
                                    p: 1, 
                                    borderRadius: 2 
                                }}>
                                    <Box sx={{ width: columnRef.current.width }}>
                                        <RecordContextProvider record={record}>
                                            {element}
                                        </RecordContextProvider>
                                    </Box>
                                </Paper>
                            ))}
                        </Box>
                    )
                })}
            </Box>
        </ListContextProvider>
    )
}