import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LottieView from 'lottie-react-native'
import UIButton from '../components/Button/UIButton'
import colors from '../constants/colors'
import icons from '../constants/icons'
import { isIOS } from '../utils/helpers/Device'

export default function Welcome() {
    return (
        <View style={styles.container}>
            { isIOS() ? 
                <LottieView
                    style={styles.animation}
                    source={require('../assets/lottie/Welcome.json')}
                    autoPlay
                    loop
                    enableMergePathsAndroidForKitKatAndAbove={true}
                />
                : <View style={{
                    flex: 12,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Image
                        style={{
                            height: 200,
                            width: 300
                        }}
                        source={icons.welcome}
                    />
                </View>
            }
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
