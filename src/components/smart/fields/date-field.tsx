import { get } from "lodash"
import React from "react"
import { useRecordContext } from "../../../providers/record-context-provider"
import { Typography, TypographyProps } from "../../core/fields/typography"

interface DateFieldProps extends TypographyProps {
    source: string
}

export const DateField = ({ source, ...rest }: DateFieldProps) => {
    const record = useRecordContext()
    const value = get(record, source)
    const dateValue = new Date(value)
    const parsedValue = `${dateValue.getDate()}`
  
    return <Typography {...rest}>{parsedValue}</Typography>
  }
  