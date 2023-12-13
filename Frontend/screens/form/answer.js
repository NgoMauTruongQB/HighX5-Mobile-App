import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import colors from "../../constants/colors"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default function Answer() {
    const data = {
        id: 1,
        category: 0,
        title: "Tuyển thành viên cho 'K23 - Bén lửa sinh ra'",
        event_id: 1,
        createdAt: "2023-12-13T07:44:08.000Z",
        updatedAt: "2023-12-13T07:44:08.000Z",
        Questions: [
            {
                question: "Bạn đã tham gia câu lạc bộ nào trước đây chưa",
                id: 1,
                Answers: [
                    {
                        user_id: 4,
                        answer: "Chưa tham event nào trước đây",
                        id: 1,
                        User: {
                            name: "Trần Thị Ngọc Quyên",
                            gmail: "quyen123@gmail.com",
                            telephone: "0905116391",
                            address: "Number 1 in your heart",
                            university: "Bách Khoa Đà Nẵng",
                        },
                    },
                ],
            },
            {
                question:
                    "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?",
                id: 2,
                Answers: [
                    {
                        user_id: 4,
                        answer: "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không.",
                        id: 2,
                        User: {
                            name: "Trần Thị Ngọc Quyên",
                            gmail: "quyen123@gmail.com",
                            telephone: "0905116391",
                            address: "Number 1 in your heart",
                            university: "Bách Khoa Đà Nẵng",
                        },
                    },
                ],
            },
            {
                question: "Bạn đã biết về sự kiện này qua phương tiện nào?",
                id: 3,
                Answers: [
                    {
                        user_id: 4,
                        answer: "Tôi biết qua sự giới thiệu của bạn bè",
                        id: 3,
                        User: {
                            name: "Trần Thị Ngọc Quyên",
                            gmail: "quyen123@gmail.com",
                            telephone: "0905116391",
                            address: "Number 1 in your heart",
                            university: "Bách Khoa Đà Nẵng",
                        },
                    },
                ],
            },
            {
                question: "Mục tiêu của bạn khi tham gia là gì?",
                id: 4,
                Answers: [
                    {
                        user_id: 4,
                        answer: "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân",
                        id: 4,
                        User: {
                            name: "Trần Thị Ngọc Quyên",
                            gmail: "quyen123@gmail.com",
                            telephone: "0905116391",
                            address: "Number 1 in your heart",
                            university: "Bách Khoa Đà Nẵng",
                        },
                    },
                ],
            },
            {
                question: "Bạn muốn tham gia phòng ban nào?",
                id: 5,
                Answers: [
                    {
                        user_id: 4,
                        answer: "Ban truyền thông",
                        id: 5,
                        User: {
                            name: "Trần Thị Ngọc Quyên",
                            gmail: "quyen123@gmail.com",
                            telephone: "0905116391",
                            address: "Number 1 in your heart",
                            university: "Bách Khoa Đà Nẵng",
                        },
                    },
                ],
            },
        ],
    }

    const user = data.Questions[0].Answers[0].User

    const question = data.Questions

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.background }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    Đơn ứng tuyển của người dùng {user.name}
                </Text>
                <View style={styles.userContainer}>
                    <Text style={styles.titleUserInfo}>
                        Thông tin thành viên
                    </Text>

                    {/* Name */}
                    <View style={styles.littleInfoContainer}>
                        <Text style={styles.label}>Họ tên: </Text>
                        <Text style={styles.info}>{user.name}</Text>
                    </View>

                    {/* email */}
                    <View style={styles.littleInfoContainer}>
                        <Text style={styles.label}>Email: </Text>
                        <Text style={styles.info}>{user.gmail}</Text>
                    </View>

                    {/* telephone */}
                    <View style={styles.littleInfoContainer}>
                        <Text style={styles.label}>Điện thoại: </Text>
                        <Text style={styles.info}>{user.telephone}</Text>
                    </View>

                    {/* university */}
                    <View style={styles.littleInfoContainer}>
                        <Text style={styles.label}>Đại học: </Text>
                        <Text style={styles.info}>{user.university}</Text>
                    </View>

                    {/* address */}
                    <View style={styles.littleInfoContainer}>
                        <Text style={styles.label}>Địa chỉ: </Text>
                        <Text style={styles.info}>{user.address}</Text>
                    </View>
                </View>

                {/* answer */}
                <View style={styles.questionContainer}>
                    <Text style={styles.titleUserInfo}>
                        Bảng trả lời câu hỏi
                    </Text>
                    {question.map((question, index) => {
                        return (
                            <View
                                key={question.id}
                                style={styles.questionSmallContainer}
                            >
                                <Text style={styles.questionTitle}>
                                    {index + 1}. {question.question}
                                </Text>
                                <Text
                                    style={styles.answerInput}
                                >{question.Answers[0].answer}</Text>
                            </View>
                        )
                    })}
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        paddingHorizontal: 15,
                        flexDirection : "row"
                    }}
                >
                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={styles.buttonText}>Xác nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDelete}>
                        <Text style={styles.buttonText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
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
    userContainer: {
        backgroundColor: colors.light_gray,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 6,
        marginVertical: 5,
    },
    titleUserInfo: {
        color: colors.accent,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
        textAlign : "center"
    },
    littleInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        alignItems: "center",
        marginVertical: 4,
    },
    label: {
        width: "35%",
        overflow: "scroll",
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: colors.secondary,
    },
    info: {
        width: "60%",
        paddingLeft: 10,
        overflow: "scroll",
        fontSize: 15,
        color: colors.text,
    },
    
    questionContainer: {
        width: "95%",
        marginVertical: 5,
        paddingHorizontal: 20,
        backgroundColor : colors.light_gray,
        borderRadius : 6,
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
        color: colors.text,
    },
    questionTitle: {
        fontSize: 15,
        marginBottom: 8,
    },
    buttonSubmit: {
        width: "45%",
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 15,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    buttonDelete: {
        width: "45%",
        backgroundColor: colors.danger,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
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
})
