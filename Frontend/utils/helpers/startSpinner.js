import { Animated, Easing } from 'react-native'
import React from 'react'

const spinValue = new Animated.Value(0)

const startSpinner = () => {
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()
}

export { spinValue, startSpinner }
