import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import colors from "../../constants/colors";




export default function Answer() {
    const data = [
        {
            id: 1,
            category: 0,
            title: "Tuyển thành viên cho 'K23 - Bén lửa sinh ra'",
            event_id: 1,
            createdAt: "2023-12-13T03:38:27.000Z",
            updatedAt: "2023-12-13T03:38:27.000Z",
            Questions: [
                {
                    question:
                        "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?",
                    id: 2,
                    Answers: [
                        {
                            user_id: 1,
                            answer: "Test answer",
                            User: {
                                id: 1,
                                name: "Admin123",
                                gmail: "admin123@gmail.com",
                                password:
                                    "$2a$10$G.Shs1H1BwWrJf1CIebdKeVBp.cLjpueTM9rmYF.MbEfwNw6kLOpi",
                                telephone: "0905116391",
                                address: "Number 1 in your heart",
                                gender: "Nam",
                                avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                                birthday: "2003-02-17T00:00:00.000Z",
                                faculity_id: 1,
                                university: "Bách Khoa Đà Nẵng",
                                createdAt: "2023-12-13T03:38:25.000Z",
                                updatedAt: "2023-12-13T03:38:25.000Z",
                            },
                        },
                    ],
                },
                {
                    question: "Bạn đã tham gia câu lạc bộ nào trước đây chưa",
                    id: 1,
                    Answers: [
                        {
                            user_id: 1,
                            answer: "Test answer",
                            User: {
                                id: 1,
                                name: "Admin123",
                                gmail: "admin123@gmail.com",
                                password:
                                    "$2a$10$G.Shs1H1BwWrJf1CIebdKeVBp.cLjpueTM9rmYF.MbEfwNw6kLOpi",
                                telephone: "0905116391",
                                address: "Number 1 in your heart",
                                gender: "Nam",
                                avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                                birthday: "2003-02-17T00:00:00.000Z",
                                faculity_id: 1,
                                university: "Bách Khoa Đà Nẵng",
                                createdAt: "2023-12-13T03:38:25.000Z",
                                updatedAt: "2023-12-13T03:38:25.000Z",
                            },
                        },
                    ],
                },
                {
                    question: "Bạn đã biết về sự kiện này qua phương tiện nào?",
                    id: 3,
                    Answers: [
                        {
                            user_id: 1,
                            answer: "Test answer",
                            User: {
                                id: 1,
                                name: "Admin123",
                                gmail: "admin123@gmail.com",
                                password:
                                    "$2a$10$G.Shs1H1BwWrJf1CIebdKeVBp.cLjpueTM9rmYF.MbEfwNw6kLOpi",
                                telephone: "0905116391",
                                address: "Number 1 in your heart",
                                gender: "Nam",
                                avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                                birthday: "2003-02-17T00:00:00.000Z",
                                faculity_id: 1,
                                university: "Bách Khoa Đà Nẵng",
                                createdAt: "2023-12-13T03:38:25.000Z",
                                updatedAt: "2023-12-13T03:38:25.000Z",
                            },
                        },
                    ],
                },
            ],
        },
    ];
    
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.background }}
        >
            {/* <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.slogan}>" {data.Event.slogan} "</Text>
                <View style={styles.questionContainer}>
                    {data.Questions.map((question, index) => (
                        <View
                            key={question.id}
                            style={styles.questionSmallContainer}
                        >
                            <Text style={styles.questionTitle}>
                                {index + 1}. {question.question}
                            </Text>
                            <TextInput
                                multiline
                                textAlignVertical="top"
                                style={styles.answerInput}
                                placeholder="Enter your answer"
                                onChange={(event) => {
                                    setAnswerArray(
                                        answerArray.map((item) => {
                                            if (
                                                item.question_id == question.id
                                            ) {
                                                return {
                                                    question_id:
                                                        item.question_id,
                                                    answer: event.nativeEvent
                                                        .text,
                                                };
                                            } else {
                                                return item;
                                            }
                                        })
                                    );
                                    console.log(answerArray);
                                }}
                            />
                        </View>
                    ))}
                    <View style={styles.questionSmallContainer}>
                        <Text style={styles.questionTitle}>
                            {data.Questions.length + 1}. Bạn muốn vào phòng ban
                            nào ?
                        </Text>
                        <RNPickerSelect
                            onValueChange={(value) => {
                                setDepartmentName(value);
                            }}
                            items={department_name}
                            placeholder={{
                                label: "Select a department",
                                value: null,
                            }}
                            style={styles.selection}
                            value={departmentName}
                        />
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        paddingHorizontal: 15,
                    }}
                >
                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.primary,
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
        overflow: "scroll",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    slogan: {
        fontStyle: "italic",
        color: colors.secondary,
        marginVertical: 5,
    },
    questionContainer: {
        width: "100%",
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    questionSmallContainer: {
        marginVertical: 10,
        color: colors.accent,
    },
    answerInput: {
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.dark_gray,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 60,
        color: colors.text,
    },
    questionTitle: {
        fontSize: 15,
        marginBottom: 8,
    },
    buttonSubmit: {
        width: "100%",
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 200,
        paddingVertical: 15,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 15,
        color: colors.white,
    },
    selection: {
        inputIOS: {
            padding: 12,
            borderWidth: 1,
            borderColor: colors.text,
            borderRadius: 6,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
        inputAndroid: {
            padding: 12,
            borderWidth: 1,
            borderColor: colors.text,
            borderRadius: 6,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
    },
});
