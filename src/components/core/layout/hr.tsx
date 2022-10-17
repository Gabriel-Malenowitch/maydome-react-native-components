import React, { forwardRef } from "react";
import { StyleSheet, View, ViewProps } from 'react-native'

export const Hr = forwardRef<View, ViewProps>((props, ref) => {

    return (
        <StyledView {...props} ref={ref} />
    )
})

import styled from "styled-components/native"

export const StyledView = styled.View`
    background-color: ${props => props.theme.inUse.pallet.shadowColor};
    height: ${StyleSheet.hairlineWidth}px;
    width: 100%;
`