import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TaskDetail from '../../components/TaskDetail';
import colors from '../../constants/colors';

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
