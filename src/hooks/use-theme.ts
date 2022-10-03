import { useContext } from "react"
import { ThemeContext, Theme } from 'styled-components'

export const useTheme = (): Theme => {
    const theme = useContext(ThemeContext)
    return theme
}