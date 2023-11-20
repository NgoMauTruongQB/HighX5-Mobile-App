import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/colors'
import { isValidEmail, isValidPassword, isValidPhoneNumber, isValidUsername, isValidRePassword } from '../utils/validations/validations'

export default function SignUp() {

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('')
    const [errorUsername, setErrorUsername] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const isValidation = () => email.length > 0 && password.length > 0 && phoneNumber.length > 0 && username.length > 0 && rePassword.length > 0
        && isValidEmail(email) && isValidPassword(password) && isValidPhoneNumber(phoneNumber) && isValidUsername(username) && isValidRePassword(rePassword, password)

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.background}>
                    <Image 
                        style={styles.mascos}
                        source={require('../assets/icons/dolphin/dolphin-laptop.png')} 
                    />
                     <View style={styles.brand}>
                        <Text style={styles.name}>HighX5</Text>
                        <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                        setEmail(text)
                    }}
                    style={styles.input}
                    placeholder='Email'
                />
                {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}
                <TextInput
                    onChangeText={(text) => {
                        setErrorPhoneNumber(isValidPhoneNumber(text) == true ? '' : 'Phone number not in correct format')
                        setPhoneNumber(text)
                    }}
                    style={styles.input}
                    placeholder='Mobile number'
                />
                {errorPhoneNumber !== '' && <Text style={styles.error}>{errorPhoneNumber}</Text>}
                <TextInput
                    onChangeText={(text) => {
                        setErrorUsername(isValidUsername(text) == true ? '' : 'Username not in correct format')
                        setUsername(text)
                    }}
                    style={styles.input}
                    placeholder='Username'
                />
                {errorUsername !== '' && <Text style={styles.error}>{errorUsername}</Text>}
                <View style={styles.password}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => {
                            setErrorPassword(isValidPassword(text) == true ? '' : 'Password needs 1 lowercase, 1 uppercase, 1 digit, and minimum 8 characters')
                            setPassword(text)
                        }}
                        placeholder="Password"
                        style={styles.passwordInput}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordButton}>
                        <Image 
                            style={styles.iconPassword} 
                            source={showPassword ? require('../assets/icons/ui-elements/hide.png') : require('../assets/icons/ui-elements/seen.png')} 
                        />
                    </TouchableOpacity>
                </View>
                {errorPassword !== '' && <Text style={styles.error}>{errorPassword}</Text>}
                <View style={styles.password}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => {
                            setErrorRePassword(isValidRePassword(text, password) == true ? '' : 'Passwords do not match')
                            setRePassword(text)
                        }}
                        placeholder="Re-Password"
                        style={styles.passwordInput}
                    />
                </View>
                {errorRePassword !== '' && <Text style={styles.error}>{errorRePassword}</Text>}
                <TouchableOpacity 
                    disabled={isValidation() == false}
                    onPress={() => {
                        alert(`Email: ${email}, Password: ${password}, Phone number: ${phoneNumber}, Username: ${username}`)
                    }}
                    style={styles.button}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.bottom}>
                Have a account? 
                <Text 
                    onPress={() => {
                        alert('Sign up')
                    }}
                    style={{color: colors.secondary, textDecorationLine: 'underline'}}>
                    Log in
                </Text> 
            </Text>
        </KeyboardAvoidingView>
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
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: '75%',
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14
    },
    password: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: '75%',
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    passwordInput: {
        flex: 9
    },
    passwordButton: {
        width: 20,
        height: 20
    },
    iconPassword: {
        width: 20,
        height: 20,
        tintColor: colors.accent
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
    },
    error: {
        color: colors.danger,
        width: '75%',
        fontSize: 12,
    }
    
})