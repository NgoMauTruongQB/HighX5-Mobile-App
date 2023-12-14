import { Animated, Easing } from 'react-native'
import React from 'react'

const spinValue = new Animated.Value(0)

const startSpinner = () => {
    console.log('Start call')
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()
}

const stopSpinner = () => {
    console.log('Stop Call')
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
        })
    ).stop()
}

export { spinValue, startSpinner, stopSpinner }
