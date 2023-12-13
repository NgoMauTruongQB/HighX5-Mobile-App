import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import TaskDetail from '../../components/TaskDetail';
import colors from '../../constants/colors';
import NotificationItem from '../../components/NotificationItem';
import { notification as NotificationRepository } from '../../repositories';
import { useSafeArea } from '../../utils/helpers/Device';

export default function MyTasks({ navigation }) {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        NotificationRepository.getNotifications()
            .then((responseNotifications) => {
                setNotifications(responseNotifications);
            })
            .catch((error) => {
                throw error;
            });
    }, []);

    const [categories, setCategories] = useState(['All', 'Verified', 'Message', 'Event', 'Deadline']);
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setActiveIndex(index);
                    alert('Filter' + index);
                }}
                style={[styles.categoryItem, index === activeIndex && styles.activeCategoryItem]}
            >
                <Text style={[styles.categoryText, index === activeIndex && styles.activeCategoryText]}>{item}</Text>
            </TouchableOpacity>
        );
    };
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
                <FlatList
                    data={notifications}
                    renderItem={({ item }) => (
                        <NotificationItem
                            notification={item}
                            key={item.id}
                            onPress={() => {
                                alert(`You press item's name: ${item.title}`);
                            }}
                        />
                    )}
                    keyExtractor={(eachNotification) => eachNotification.id}
                />
            </View>
            <TaskDetail />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
    },
    category: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingStart: 10,
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
        borderColor: colors.dark_gray,
    },
    activeCategoryItem: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
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
});
