import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'

const LoadingJson = require('../../assets/effects-icons/loading')

export const Loading = () => <AnimatedLottieView source={LoadingJson} autoPlay loop/>