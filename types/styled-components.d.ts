import 'styled-components'

import { Theme as CustomTheme } from '../src/styles/index'

declare module 'styled-components' {
    type Theme = CustomTheme
}