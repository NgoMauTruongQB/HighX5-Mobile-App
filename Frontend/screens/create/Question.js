import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';
import { useSafeArea } from '../../utils/helpers/Device';
import FormQuestion from './FormQuestion';
import QuestionItem from '../../components/QuestionItem';

export default function Question() {
    const [questionList, setQuestionList] = useState([{ name: 'Ngo Mau Truong ?' }]);

    const handleAddQuestion = (newQuestion) => {
        if (newQuestion) {
            setQuestionList([...questionList, newQuestion]);
        }
    };

    const handleDeleteQuestion = (index) => {
        Alert.alert('Notification', 'Do you want to delete?', [
            {
                text: 'OK',
                onPress: () => {
                    let questionListTmp = [...questionList];
                    questionListTmp.splice(index, 1);
                    setQuestionList(questionListTmp);
                },
            },
            {
                text: 'Cancel',
                onPress: () => {},
            },
        ]);
    };

    return (
        <View style={[styles.container, { paddingTop: useSafeArea() }]}>
            <View style={styles.header}>
                <Text style={styles.title}>Question</Text>
                <Text style={styles.subText}>Add questions to use when surveying members</Text>
            </View>
            <ScrollView style={styles.list}>
                {questionList.map((item, index) => (
                    <QuestionItem
                        key={index}
                        name={item.name}
                        number={index + 1}
                        onDeleteQuestion={() => handleDeleteQuestion(index)}
                    />
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <FormQuestion onAddQuestion={handleAddQuestion} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    title: {
        fontSize: 28,
        color: colors.accent,
        fontWeight: '600',
    },
    subText: {
        marginVertical: 4,
        color: colors.text,
        width: '80%',
        fontSize: 14,
        textAlign: 'center',
    },
    list: {
        margin: 6,
    },
    footer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        marginBottom: 90,
    },
});
