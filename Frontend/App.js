import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Welcome, Login, SignUp, EventList } from './screens'
import useLoadedFonts from './utils/helpers/useLoadedFonts'
import colors from './constants/colors'

export default function App() {
    const dataLoaded = useLoadedFonts()
    if (!dataLoaded) {
        return null
    }

    return (
        <View style={styles.app}>
            <EventList />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: colors.white,
        flex: 1,
    }
})