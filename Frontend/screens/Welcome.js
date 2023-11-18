import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LottieView from 'lottie-react-native'
import UIButton from '../components/Button/UIButton'
import colors from '../constants/colors'

export default function Welcome() {
    return (
        <View style={styles.container}>
            <LottieView
                style={styles.animation}
                source={require('../assets/lottie/Welcome.json')}
                autoPlay
                loop
            />
            <View style={styles.footer}>
                <UIButton 
                    onPress={() => {
                        alert('Haha')
                    }}
                    title='Start'
                    bgColor={colors.white}
                    txtColor={colors.accent}
                    txtWeight='800'
                ></UIButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingTop: 40,
        flexDirection: 'column',
    },
    animation: {
        flex: 12,
        height: 500,
    },
    footer: {
        flex: 2,
    }
})
