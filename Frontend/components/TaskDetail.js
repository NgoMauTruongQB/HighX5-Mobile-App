import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/colors'
import { CheckBox } from '@rneui/themed'

export default function TaskDetail(props) {
    let { onPress } = props

    const [status, setStatus] = useState(false)

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
        >
            <View style={styles.top}>
                <Text style={styles.title}>Kế hoạch cho sự kiện IT Nihongo</Text>
                <CheckBox
                    center
                    checked={status}
                    onPress={() => setStatus(!status)}
                    style={styles.checkBox}
                    checkedColor={colors.primary}
                />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.content}>Điền trước các sheet liên quan chuẩn bị cho sự kiện sắp diễn ra.</Text>
                <Text style={styles.dateTime}>20/11/2023 - 20/12/2023</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.gray,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.text,
    },
    checkBox: {
        color: colors.primary,
    },
    bottom: {

    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        marginVertical: 8,
        color: colors.subText,
    },
    dateTime: {
        color: colors.subText
    },
})
