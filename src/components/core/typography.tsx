import { forwardRef, ReactElement } from "react";
import { StyleSheet, TextProps, Text } from 'react-native'
import styled from "styled-components/native";
import { useTheme } from "../../hooks";
import { Theme } from "../../styles";



interface StyledTextProps {
    customTheme: {
        [Key in keyof Theme['defaultProps']['typography']]?: keyof Omit<Theme['defaultProps']['typography'][Key], 'inUse'>
    }
}

type TypographyProps = TextProps & StyledTextProps['customTheme']

const StyledText = styled.Text<StyledTextProps>`
    font-weight: ${props => props.customTheme.fontWeight ? props.theme.defaultProps.typography.fontWeight[props.customTheme.fontWeight] : props.theme.defaultProps.typography.fontWeight.inUse};
    font-size: ${props => props.customTheme.fontSize ? props.theme.defaultProps.typography.fontSize[props.customTheme.fontSize] : props.theme.defaultProps.typography.fontSize.inUse}px;
    color: ${props => props.theme.inUse.pallet.textColor};
`

export const Typography = forwardRef<Text, TypographyProps>(
    (props, ref): ReactElement => {
        const { fontWeight, fontSize, children } = props
        const customTheme = { fontWeight, fontSize }

        return <StyledText {...props} customTheme={customTheme} ref={ref}>{children}</StyledText>
    }
)
