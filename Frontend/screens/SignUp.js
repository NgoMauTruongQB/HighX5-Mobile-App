import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import UIButton from '../components/Button/UIButton'
import UITextInput from '../components/UITextInput'

export default function SignUp() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.background}>
                    <Image 
                        style={styles.mascos}
                        source={require('../assets/icons/dolphin.png')} 
                    />
                     <View style={styles.brand}>
                        <Text style={styles.name}>HighX5</Text>
                        <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <UITextInput placeholder='Email'/>
                <UITextInput placeholder='Mobile number'/>
                <UITextInput placeholder='Username' />
                <UITextInput placeholder='Password' />
                <TouchableOpacity style={styles.button}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.bottom}>
                Have a account? <Text style={{color: colors.secondary, textDecorationLine: 'underline'}}>Log in</Text> 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    top: {
        flex: 3, 
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        borderBottomEndRadius: 200,
    },
    background: {
        backgroundColor: colors.bule_light,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 400,
        marginLeft: 90,
        flexDirection: 'row',
    },
    mascos: {
        width: 60,
        height: 150,
        left: -40,
        flex: 0.5,
        marginTop: 80,
    },
    brand: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: 70
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
        color: colors.accent
    },
    slogan: {
        color: colors.accent,
        fontSize: 11,
        lineHeight: 28,
    },
    form: {
        flex: 7,
        alignItems: 'center',
        paddingTop: 140,
        width: '100%'
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 13,
        marginVertical: 10,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
    }
    
})