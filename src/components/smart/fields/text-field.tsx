import { get } from "lodash"
import React from "react"
import { useRecordContext } from "../../../providers/record-context-provider"
import { Typography, TypographyProps } from "../../core/fields/typography"

interface TextFieldProps extends TypographyProps {
    source: string
}

export const TextField = ({ source, ...rest }: TextFieldProps) => {
    const record = useRecordContext()
    const value = get(record, source)
  
    return <Typography {...rest}>{value}</Typography>
  }
