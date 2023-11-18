import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function UITextInput(props) {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: '75%',
        borderColor: colors.dark_gray,
        color: colors.gray,
        marginVertical: 6,
    },
})