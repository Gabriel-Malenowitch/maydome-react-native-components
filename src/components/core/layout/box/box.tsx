import React, { ReactNode, forwardRef } from "react"
import { StyleSheet, View, ViewProps } from "react-native"
import { StyledView } from "./styled-view"
import { ViewWithGap } from "./view-with-gap"
import { chunk } from 'lodash'

export interface BoxProps extends ViewProps {
    children?: ReactNode | ReactNode[]
    sx?: {
        gap?: number
        columns?: number
        direction?: 'horizontal' | 'vertical'
        justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
        alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

        m?: number
        mt?: number
        ml?: number
        mr?: number
        mb?: number

        p?: number
        pt?: number
        pl?: number
        pr?: number
        pb?: number

        b?: number
        bt?: number
        bl?: number
        br?: number
        bb?: number

        width?: number
        height?: number
    }
}

const defaultSx: BoxProps['sx'] = {
    gap: 0,
    columns: 0,
    direction: 'vertical',
}

export const Box = forwardRef<View, BoxProps>((props: BoxProps, ref) => {
    const { children } = props
    const { gap = 0, columns = 0, direction = 'vertical', ...rest } = props.sx ?? defaultSx

    if(!children) return null

    if(!Array.isArray(children)) {
        return (
            <StyledView customTheme={rest} ref={ref}>
                {children}
            </StyledView>
        )
    }

    // Return grid if it is a grid
    if(columns){
        const childrenMatrix = chunk(children, columns)
        return (
            <StyledView customTheme={rest} ref={ref}>
                <ViewWithGap direction='vertical' gap={gap} sx={rest}>
                    {childrenMatrix.map((childrenList, index) => (
                        <ViewWithGap direction='horizontal' gap={gap} key={index} sx={rest}>
                            {childrenList}
                        </ViewWithGap>
                    ))}
                </ViewWithGap>
            </StyledView>
        )
    }

    

    // Return simples array children with custom gap
    return (
        <StyledView customTheme={rest} ref={ref}>
            <ViewWithGap direction={direction} gap={gap} sx={rest}>{children}</ViewWithGap>
        </StyledView>
    )
})
