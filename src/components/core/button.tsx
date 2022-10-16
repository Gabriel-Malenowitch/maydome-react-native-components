import React, { ReactElement, ReactNode, useState } from "react";
import {
    GestureResponderEvent, 
    TouchableNativeFeedbackProps,
} from "react-native";
import { useTheme } from "../../hooks";
import { Loading } from "../animations";
import styled from 'styled-components/native' 
import { ColorTypes } from "../../styles";
import { Typography } from "./typography";

export interface ButtonProps extends Omit<TouchableNativeFeedbackProps, 'disabled'> {
    isLoading?: boolean
    isDisabled?: boolean
    color?: ColorTypes
    title: ReactNode | string
}


interface ButtonContainerProps {
    customTheme: {
        color: ColorTypes
    }
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
    min-height: ${props=>props.theme.defaultProps.button.minHeight}px;
    min-width: ${props=>props.theme.defaultProps.button.minWidth}px;
    
    border-radius: ${props => props.theme.defaultConfig.borderRadius}px;
    background-color: ${props => props.customTheme.color};

    padding: ${props => props.theme.defaultProps.button.padding};
    margin: ${props => props.theme.defaultProps.button.margin};

    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled.TouchableNativeFeedback`
    width: 100%;
    height: 100%;
`


export const Button = (props: ButtonProps): ReactElement => {
    const theme = useTheme()
    const [isCustomLoading, setIsCustomLoading] = useState<boolean>(false)
    const { isLoading = false, color, children, onPress, title, ...rest } = props
    const isDisabled = isLoading || isCustomLoading || rest.isDisabled
    const { inUse: { pallet } } = theme
    const customTheme = {
        color: color ? pallet[color] : pallet.default
    }

    const handlePress = async (event: GestureResponderEvent) => {
        if(onPress){
            setIsCustomLoading(state => !state)
            await onPress(event)
            setIsCustomLoading(state => !state)
        }
    }

    return (
        <StyledButton {...rest} disabled={isDisabled} onPress={handlePress}>
            <ButtonContainer customTheme={customTheme}>
                {isLoading || isCustomLoading ? ( 
                    <Loading />
                ) : (
                    <>{typeof title === 'string' ? <Typography fontWeight="light" >{title}</Typography> : title}</>
                )}
            </ButtonContainer> 
        </StyledButton>
    )
}
