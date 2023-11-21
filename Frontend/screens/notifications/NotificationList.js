import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'

export default function NotificationList() {
    const [categories, setCategories] = useState([
        'All', 'Verified', 'Message', 'Event', 'Deadline'
    ])
    const [activeIndex, setActiveIndex] = useState(0)

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => setActiveIndex(index)}
                style={[
                    styles.categoryItem,
                    index === activeIndex && styles.activeCategoryItem
                ]}
            >
                <Text style={[styles.categoryText, index === activeIndex && styles.activeCategoryText]}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                style={styles.category}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
            <View style={styles.list}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.light_gray,
        paddingTop: 50,
        flexDirection: 'column',
    },
    category: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingStart: 10
    },
    categoryItem: {
        backgroundColor: colors.white,
        marginHorizontal: 4,
        height: 36,
        minWidth: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: colors.dark_gray
    },
    activeCategoryItem: {
        backgroundColor: colors.primary,
        borderColor: colors.primary
    },
    categoryText: {
        color: colors.text,
        fontWeight: '600',
        fontSize: 16,
    },
    activeCategoryText: {
        color: colors.white,
    },
    list: {
        flex: 15,
    },
})
