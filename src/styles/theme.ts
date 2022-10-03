
export interface DefaultConfig {
    margin: number
    padding: number
    borderRadius: number
    borderWidth: number
}

const defaultConfig: DefaultConfig = {
    margin: 0,
    padding: 0,
    borderRadius: 0,
    borderWidth: 0
}

export interface ColorConfig {
    pallet: {
        primary: string
        secondary: string
        default: string
        error: string
        warning: string
        info: string
    }
}

export interface Theme extends DefaultConfig {
    light: ColorConfig
    night: ColorConfig
}

export const theme: Theme = {
    ...defaultConfig,
    light: {
        pallet: {
            primary: '#151023',
            secondary: '#6434cb',
            default: '#9992aa',
            error: '#cb3434',
            warning: '#cba334',
            info: '#347fcb',
        }
    },
    night: {
        pallet: {
            primary: '#151023',
            secondary: '#755ecf',
            default: '#9992aa',
            error: '#cf5e5e',
            warning: '#cfb65e',
            info: '#5eabcf',
        }
    }
}