import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSafeArea } from '../utils/helpers/Device'
import colors from '../constants/colors'
// import AppIntroSlider from 'react-native-app-intro-slider'

export default function Home() {
    return (
        <View style={[styles.container, {paddingTop: useSafeArea()}]}>
            <View style={styles.header}>
                <View style={styles.welcome}>
                    <Text style={styles.user}>Hello @03nmt</Text>
                    <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
                </View>
                <Image source={require('../assets/icons/ui-elements/user.png')} style={styles.avatar}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        width: '100%',
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        marginEnd: 20
    },
    user: {
        color: colors.accent,
        fontWeight: '700',
        fontSize: 20
    },
    slogan: {
        color: colors.accent,
        marginTop: 2
    },
    avatar: {
        width: 58,
        height: 58,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: colors.bule_light,
        objectFit: 'cover'
    },
})