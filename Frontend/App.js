import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Welcome, Login, SignUp } from './screens'
import useLoadedFonts from './utils/helpers/useLoadedFonts'
import colors from './constants/colors'

export default function App() {
    const dataLoaded = useLoadedFonts()
    if (!dataLoaded) {
        return null
    }

    return (
        <View style={styles.app}>
            <Login />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: colors.white,
        flex: 1,
    }
})