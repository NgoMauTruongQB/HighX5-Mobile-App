import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

export default function NewEvent() {
    const slides = [
        {
            key: 'slide1',
            title: 'Slide 1',
            text: 'Description for slide 1',
            img: require('../assets/slide/1.png')
        },
        {
            key: 'slide2',
            title: 'Slide 2',
            text: 'Description for slide 2',
            img: require('../assets/slide/2.png')
        },
        {
            key: 'slide3',
            title: 'Slide 3',
            text: 'Description for slide 3',
            img: require('../assets/slide/3.png')
        },
    ]

    const [showRealApp, setShowRealApp] = useState(false)

    const handleDone = () => {
        setShowRealApp(true)
    }

    useEffect(() => {
        if (showRealApp) {
            const timer = setTimeout(() => {
                setShowRealApp(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [showRealApp])

    const renderSlides = ({ item }) => {
        return (
            <View style={styles.slideContainer}>
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideText}>{item.text}</Text>
                <Image source={item.img} />
            </View>
        )
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderSlides}
            onDone={handleDone}
            showNextButton={false}
            showDoneButton={false}
            loop={true}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
        />
    )
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    slideText: {
        fontSize: 18,
        textAlign: 'center',
    },
    dotStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 4,
        height: 4,
        borderRadius: 5,
        marginHorizontal: 8,
    },
    activeDotStyle: {
        backgroundColor: '#000',
        width: 6,
        height: 6,
        borderRadius: 7,
        marginHorizontal: 8,
    },
})
