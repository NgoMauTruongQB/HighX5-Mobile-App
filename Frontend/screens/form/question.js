import { useNavigation } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import colors from "../../constants/colors"
import RNPickerSelect from "react-native-picker-select"
import { event as EventRepository } from "../../repositories"

export default function Question({route}) {
    const [loading, setLoading] = useState(false)
    const id = route.params.eventId
    const [question, setQuestion] = useState({})

    const data = {
        id: 26,
        category: 0,
        title: "Tuyển thành viên cho sự kiện 'New Event'",
        event_id: 26,
        createdAt: "2023-12-13T06:55:35.000Z",
        updatedAt: "2023-12-13T06:55:35.000Z",
        Questions: [
            {
                question: "Tại sao bạn lại muốn tham gia câu lạc bộ",
                id: 117,
            },
            {
                question: "Bạn muốn vào phòng ban nào ?",
                id: 116,
            },
            {
                question: "Bạn đã tham gia câu lạc bộ nào?",
                id: 115,
            },
        ],
        Event: {
            id: 26,
            name: "New Event",
            description: "test EVENT",
            slogan: "test Event",
            date_start: "2023-12-12T00:00:00.000Z",
            date_end: "2024-12-12T00:00:00.000Z",
            location: '"Back Khoa"',
            image: "http://res.cloudinary.com/deei5izfg/image/upload/v1702004634/Mobile/gcbrzefat1xjps9qmexs.png",
            status: 1,
            createdBy: 1,
            type_id: 1,
            createdAt: "2023-12-13T06:55:34.000Z",
            updatedAt: "2023-12-13T06:55:34.000Z",
        },
    }

    useEffect(async () => {
        try {
            const response = await EventRepository.getQuestionEvent(id)
            setQuestion(response.rows[0])
        } catch (error) {
            console.log(error)
        }
    }, [])

    const QuestionFilter = data.Questions.filter((item)=>{
        return (item.question !== "Bạn muốn vào phòng ban nào ?")
    })

    const departments = route.params.departments

    const department_name = departments.map((item) => {
        return {
            label: item.name,
            value: item.name,
        }
    })

    const [departmentName, setDepartmentName] = useState(
        department_name[0].value
    )

    const [answerArray, setAnswerArray] = useState([])

    useEffect(() => {
        const newAnswerArray = data.Questions.map((question, index) => {
            if(question.question === "Bạn muốn vào phòng ban nào ?")
            {
                return {
                    question_id: question.id,
                    answer: "department",
                }
            }
            else
            {
                return {
                    question_id: question.id,
                    answer: null,
                }
            }
        })
        setAnswerArray(newAnswerArray)
        console.log(newAnswerArray)
    }, [])


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.background }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.slogan}>" {data.Event.slogan} "</Text>
                <View style={styles.questionContainer}>
                    {QuestionFilter.map((question,index) => {
                        if(question.question === "Bạn muốn vào phòng ban nào ?") return
                        // setCount(count + 1)
                        return (
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
                                                    }
                                                } else {
                                                    return item
                                                }
                                            })
                                        )
                                        console.log(answerArray)
                                    }}
                                />
                            </View>
                        )
                    })}
                    <View style={styles.questionSmallContainer}>
                        <Text style={styles.questionTitle}>
                            {data.Questions.length}. Bạn muốn vào phòng ban
                            nào ?
                        </Text>
                        <RNPickerSelect
                            onValueChange={(value) => {
                                setDepartmentName(value)
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
})
