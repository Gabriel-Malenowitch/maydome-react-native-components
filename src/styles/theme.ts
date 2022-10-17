export interface ColorConfig {
    pallet: {
        primary: string
        secondary: string
        default: string
        error: string
        warning: string
        info: string
        opacity: number
        textColor: string
    }
}

export interface DefaultConfig {
    margin: number
    padding: number
    borderRadius: number
    borderWidth: number
}

const defaultConfig = {
    margin: 0,
    padding: 0,
    borderRadius: 12,
    borderWidth: 0,
}

const defaultProps = {
    button: {
        minHeight: 40,
        minWidth: 200,
        padding: '12px 8px 12px 8px',
        margin: '0px'
    },
    typography: {
        fontWeight: {
            superLight: '100',
            light: '300',
            regular: '400',
            bold: '600',
            bolder: 'bold',
            inUse: '400'
        },
        fontSize: {
            h1: 72,
            h2: 60,
            h3: 48,
            h4: 36,
            h5: 24,
            h6: 12,
            span: 14,
            inUse: 14
        },
    }
}

const light = {
    pallet: {
        primary: '#82A7A7',
        secondary: '#8CA782',
        default: '#9D9D9D',
        error: '#C77878',
        warning: '#C7BF78',
        info: '#78ABC7',
        opacity: 0.5,
        textColor: '#2C272B'
    }
}

const night = {
    pallet: {
        primary: '#576F6F',
        secondary: '#55664F',
        default: '#626262',
        error: '#9D6161',
        warning: '#AEA86B',
        info: '#6A92A9',
        opacity: 0.5,
        textColor: '#EEEEEE'
    }
}

export interface Theme {
    defaultConfig: DefaultConfig
    light: ColorConfig
    night: ColorConfig
    inUse: ColorConfig
    defaultProps: typeof defaultProps
}

export const theme: Theme = {
    defaultConfig,
    light,
    night,
    inUse: light,
    defaultProps
}