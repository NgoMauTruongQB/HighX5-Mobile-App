import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import colors from '../../constants/colors'
import Information from './Information'
import Department from './Department'
import Question from './Question'

const slides = [
    {
        key: '3',
        component: <Question />,
    },
    {
        key: '1',
        component: <Information />,
    },
    {
        key: '2',
        component: <Department />,
    },
]

export default function NewEvent() {
    const handleDone = () => {
        alert('Submit')
    }

    const renderSlides = ({ item }) => {
        return (
            <View style={styles.slideContainer}>
                {item.component}
            </View>
        )
    }

    return (
        <AppIntroSlider
            style={styles.container}
            data={slides}
            renderItem={renderSlides}
            onDone={handleDone}
            loop={true}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            showNextButton={false}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        height: '100%'
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotStyle: {
        backgroundColor: colors.dark_gray,
        width: 40,
        height: 4,
        bottom: -20
    },
    activeDotStyle: {
        backgroundColor: colors.accent,
        height: 4,
        width: 100,
        borderRadius: 4, 
        bottom: -20
    },
})
