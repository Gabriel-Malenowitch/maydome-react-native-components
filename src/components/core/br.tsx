import React, { forwardRef, ReactElement } from "react";
import { Text, TextProps } from 'react-native'
import { Typography } from "./typography";

export const Br = forwardRef<Text, TextProps>(
    (props, ref): ReactElement => 
        <Typography {...props} ref={ref}>{'\n'}</Typography>
)
