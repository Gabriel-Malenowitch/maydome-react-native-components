import { useContext } from "react"
import { ThemeContext, DefaultTheme } from 'styled-components'

export const useTheme = (): DefaultTheme => {
    const theme = useContext(ThemeContext)
    return theme
}