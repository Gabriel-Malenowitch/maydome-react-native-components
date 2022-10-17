import styled from "styled-components/native"

interface StyledViewProps {
    customTheme: {
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

        direction?: 'horizontal' | 'vertical'
        justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
        alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
        width?: number
        height?: number
    }
}

export const StyledView = styled.View<StyledViewProps>`
    width: ${props => props.customTheme.width ? `${props.customTheme.width}px` : 'auto'};
    height: ${props => props.customTheme.height ? `${props.customTheme.height}px` : 'auto'};

    border-top-width: ${props => props.customTheme.b ? props.customTheme.b * 8 : (props.customTheme.bt ?? 0) * 8}px;
    border-left-width: ${props => props.customTheme.b ? props.customTheme.b * 8 : (props.customTheme.bl ?? 0) * 8}px;
    border-right-width: ${props => props.customTheme.b ? props.customTheme.b * 8 : (props.customTheme.br ?? 0) * 8}px;
    border-bottom-width: ${props => props.customTheme.m ? props.customTheme.m * 8 : (props.customTheme.bb ?? 0) * 8}px;
    border-color: ${props => props.theme.inUse.pallet.borderColor};

    margin-top: ${props => props.customTheme.m ? props.customTheme.m * 8 : (props.customTheme.mt ?? 0) * 8}px;
    margin-left: ${props => props.customTheme.m ? props.customTheme.m * 8 : (props.customTheme.ml ?? 0) * 8}px;
    margin-right: ${props => props.customTheme.m ? props.customTheme.m * 8 : (props.customTheme.mr ?? 0) * 8}px;
    margin-bottom: ${props => props.customTheme.m ? props.customTheme.m * 8 : (props.customTheme.mb ?? 0) * 8}px;

    padding-top: ${props => props.customTheme.p ? props.customTheme.p * 8 : (props.customTheme.pt ?? 0) * 8}px;
    padding-left: ${props => props.customTheme.p ? props.customTheme.p * 8 : (props.customTheme.pl ?? 0) * 8}px;
    padding-right: ${props => props.customTheme.p ? props.customTheme.p * 8 : (props.customTheme.pr ?? 0) * 8}px;
    padding-bottom: ${props => props.customTheme.p ? props.customTheme.p * 8 : (props.customTheme.pb ?? 0) * 8}px;

    flex-direction: ${props => props.customTheme?.direction === "horizontal" ? 'row' : 'column'};
    align-items: ${props => props.customTheme.alignItems ?? 'flex-start'};
    justify-content: ${props => props.customTheme.justifyContent ?? 'flex-start'};
`