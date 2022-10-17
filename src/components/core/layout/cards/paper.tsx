import React, { ReactNode } from 'react'
import styled from "styled-components/native";

interface PaperProps {
    children: ReactNode | ReactNode[]
    sx?: {
        width?: number
        height?: number
        elevation?: 1 | 2 | 3 | 4 | 5
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
        borderRadius?: number

        direction?: 'horizontal' | 'vertical'
        justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
        alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    }
}

export const Paper = (props: PaperProps) => <StyledPaper {...props} />

type StyledPaperProps = PaperProps

export const StyledPaper = styled.View<Omit<StyledPaperProps, 'children'>>`
    background-color: ${props => props.theme.inUse.pallet.backgroundColor};

    box-shadow: ${props => props.theme.inUse.pallet.shadowColor} 0 1px 20px;
    elevation: ${props => props.sx?.elevation ?? 1};

    border-radius: ${props => props.sx?.borderRadius ?? props.theme.defaultConfig.borderRadius}px;
    border-top-width: ${props => props.sx?.b ? props.sx?.b * 8 : (props.sx?.bt ?? 0) * 8}px;
    border-left-width: ${props => props.sx?.b ? props.sx?.b * 8 : (props.sx?.bl ?? 0) * 8}px;
    border-right-width: ${props => props.sx?.b ? props.sx?.b * 8 : (props.sx?.br ?? 0) * 8}px;
    border-bottom-width: ${props => props.sx?.m ? props.sx?.m * 8 : (props.sx?.bb ?? 0) * 8}px;
    border-color: ${props => props.theme.inUse.pallet.borderColor};

    
    margin-top: ${props => props.sx?.m ? props.sx?.m * 8 : (props.sx?.mt ?? 0) * 8}px;
    margin-left: ${props => props.sx?.m ? props.sx?.m * 8 : (props.sx?.ml ?? 0) * 8}px;
    margin-right: ${props => props.sx?.m ? props.sx?.m * 8 : (props.sx?.mr ?? 0) * 8}px;
    margin-bottom: ${props => props.sx?.m ? props.sx?.m * 8 : (props.sx?.mb ?? 0) * 8}px;

    padding-top: ${props => props.sx?.p ? props.sx?.p * 8 : (props.sx?.pt ?? 3) * 8}px;
    padding-left: ${props => props.sx?.p ? props.sx?.p * 8 : (props.sx?.pl ?? 3) * 8}px;
    padding-right: ${props => props.sx?.p ? props.sx?.p * 8 : (props.sx?.pr ?? 3) * 8}px;
    padding-bottom: ${props => props.sx?.p ? props.sx?.p * 8 : (props.sx?.pb ?? 3) * 8}px;
`