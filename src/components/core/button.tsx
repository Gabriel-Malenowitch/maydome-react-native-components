import { ReactElement } from "react";
import { Button, ButtonProps, View } from "react-native";
import { useTheme } from "../../hooks";
import { Loading } from "../animations";

export interface NoStyledButtonProps extends ButtonProps{
    isLoading?: boolean
}

export const NoStyledButton = (props: NoStyledButtonProps): ReactElement => {
    const { minHeight } = useTheme()
    const { isLoading = false, ...rest } = props

    return isLoading ? ( 
        <Loading />
    ) : (
        <Button {...rest}/>
    )
}