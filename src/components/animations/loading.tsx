import * as React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import Svg, { Path, SvgProps } from "react-native-svg"
import { useTheme } from '../../hooks'
import { ColorTypes } from '../../styles'

interface LoadingProps extends Omit<ActivityIndicatorProps, 'color'> {
	color?: ColorTypes
}

export const Loading = ({color, ...rest}: LoadingProps) => {
	const { inUse: { pallet } } = useTheme()

	return <ActivityIndicator {...rest} color={color ? pallet[color] : pallet.textColor} />
}