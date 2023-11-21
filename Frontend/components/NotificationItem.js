import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export default function NotificationItem(props) {
    let {notification, onPress} = props
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.6}
        >
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.content}>{notification.content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
        borderWidth: 0.2,
        borderColor: colors.gray,
        marginHorizontal: 10
    }
})