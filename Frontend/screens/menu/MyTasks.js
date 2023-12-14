import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import TaskDetail from '../../components/TaskDetail';
import colors from '../../constants/colors';
import NotificationItem from '../../components/NotificationItem';
import { notification as NotificationRepository } from '../../repositories';
import { useSafeArea } from '../../utils/helpers/Device';

export default function MyTasks({ navigation }) {
    return (
        <View style={styles.container}>
            <TaskDetail />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
    },
});
