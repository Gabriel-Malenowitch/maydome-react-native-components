import React, { ReactNode } from "react"
import { StyledView } from "./styled-view"

interface ViewWithGapProps {
    direction: 'horizontal' | 'vertical'
    gap: number
    children: Array<ReactNode>
    sx?: {
        [key: string]: any
    }
}

export const ViewWithGap = ({direction, gap, children, sx = {}}: ViewWithGapProps) => {
    const marginDirection = direction === 'horizontal' ? 'mr' : 'mb'
    return (
        <StyledView customTheme={{ direction, ...sx }}>
            {children.map((component, index)=>(
                <StyledView key={index} customTheme={{ [marginDirection] : (index < children.length -1) ? gap : 0, ...sx }}>
                    {component}
                </StyledView>
            ))}
        </StyledView>
    )
}
