import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import UIButton from '../components/Button/UIButton'


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.background}>
                    <Image 
                        style={styles.mascos}
                        source={require('../assets/icons/dolphin-hi.png')} 
                    />
                </View>
            </View>
            <View style={styles.brand}>
                <Text style={styles.name}>HighX5</Text>
                <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Phone number, username, or email'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <TouchableOpacity style={styles.button}>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.bottom}>
                Don't have an account? <Text style={{color: colors.secondary, textDecorationLine: 'underline'}}>Sign up?</Text> 
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
        flex: 6, 
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        borderBottomEndRadius: 200,
    },
    background: {
        backgroundColor: colors.bule_light,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomRightRadius: 800,
    },
    mascos: {
        width: 200,
        height: 200,
    },
    brand: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
        color: colors.accent
    },
    slogan: {
        color: colors.accent,
        fontSize: 14,
        lineHeight: 28,
    },
    form: {
        flex: 6,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: 300,
        borderColor: colors.dark_gray,
        color: colors.gray,
        marginVertical: 6
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 13,
        marginVertical: 6,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
    }
    
})