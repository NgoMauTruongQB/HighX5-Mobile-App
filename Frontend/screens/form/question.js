import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import colors from "../../constants/colors";
import RNPickerSelect from "react-native-picker-select";

export default function Question() {
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
    };

    const QuestionFilter = data.Questions.filter((item)=>{
        return (item.question !== "Bạn muốn vào phòng ban nào ?")
    })

    const departments = [
        {
            name: "Ban truyền thông",
            description:
                "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
            event_id: 9,
            id: 25,
            Candidates: [
                {
                    user_id: 1,
                    department_id: 25,
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
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
                {
                    user_id: 5,
                    department_id: 25,
                    User: {
                        id: 5,
                        name: "Trần Kim Hiếu",
                        gmail: "hieu123@gmail.com",
                        password:
                            "$2a$10$Nq04Gv32TLXCB6gp8dF2teRFYBgItK/OWlRdWirqzxuIRaHKrCiFS",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-01-29T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
            ],
        },
        {
            name: "Ban nội dung",
            description:
                "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
            event_id: 9,
            id: 26,
            Candidates: [
                {
                    user_id: 3,
                    department_id: 26,
                    User: {
                        id: 3,
                        name: "Ngô Mậu Trường",
                        gmail: "truong123@gmail.com",
                        password:
                            "$2a$10$OTeT7Hg4WHUwclvs/qmVb.J5VAkGphkZUfQvTyflFN.kp6uQtWKEW",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-05-24T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
                {
                    user_id: 4,
                    department_id: 26,
                    User: {
                        id: 4,
                        name: "Trần Thị Ngọc Quyên",
                        gmail: "quyen123@gmail.com",
                        password:
                            "$2a$10$8kLNWnnfTdglYDc/s.2LfeX8dQKUZaxFYm86TGejd264K/s8FnY9u",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nữ",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-01-10T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
                {
                    user_id: 8,
                    department_id: 26,
                    User: {
                        id: 8,
                        name: "Trần Tấn Thành",
                        gmail: "thanh123@gmail.com",
                        password:
                            "$2a$10$s3iNHw6XxCmrrVuSxSsnRukkZFdXvy3udq2HdVN.wdk6CdVQMtAxq",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-11-22T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
            ],
        },
        {
            name: "Ban kĩ thuật",
            description:
                "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
            event_id: 9,
            id: 27,
            Candidates: [
                {
                    user_id: 2,
                    department_id: 27,
                    User: {
                        id: 2,
                        name: "Nguyễn Văn Dũng",
                        gmail: "dung1702@gmail.com",
                        password:
                            "$2a$10$v35HwpYUiC8kroE8ROjgiu/wc2h1Jc2IuDeNK1Grm/Kgur321BrwC",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-02-17T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
                {
                    user_id: 6,
                    department_id: 27,
                    User: {
                        id: 6,
                        name: "Phạm Bình Minh",
                        gmail: "minh123@gmail.com",
                        password:
                            "$2a$10$1ep32hwRv/795XuSUdvVCOXmvcQYYa5U./bf6WSdUPhtc7kcpit4u",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-10-25T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
                {
                    user_id: 7,
                    department_id: 27,
                    User: {
                        id: 7,
                        name: "Ngô Tuấn Kiệt",
                        gmail: "kiet123@gmail.com",
                        password:
                            "$2a$10$GYfurKzIzzrgijpSb4iInuApGx9WbY1W8zJ6eHozS.fSqy2DqvFli",
                        telephone: "0905116391",
                        address: "Number 1 in your heart",
                        gender: "Nam",
                        avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                        birthday: "2003-03-17T00:00:00.000Z",
                        faculity_id: 1,
                        university: "Bách Khoa Đà Nẵng",
                        createdAt: "2023-12-13T03:38:25.000Z",
                        updatedAt: "2023-12-13T03:38:25.000Z",
                        Faculity: {
                            id: 1,
                            name: "Công nghệ thông tin",
                            createdAt: "2023-12-13T03:38:25.000Z",
                            updatedAt: "2023-12-13T03:38:25.000Z",
                        },
                    },
                },
            ],
        },
    ];

    const department_name = departments.map((item) => {
        return {
            label: item.name,
            value: item.name,
        };
    });

    const [departmentName, setDepartmentName] = useState(
        department_name[0].value
    );

    const [answerArray, setAnswerArray] = useState([]);

    useEffect(() => {
        const newAnswerArray = data.Questions.map((question, index) => {
            if(question.question === "Bạn muốn vào phòng ban nào ?")
            {
                return {
                    question_id: question.id,
                    answer: "department",
                };
            }
            else
            {
                return {
                    question_id: question.id,
                    answer: null,
                };
            }
        });
        setAnswerArray(newAnswerArray);
        console.log(newAnswerArray);
    }, []);

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
                        if(question.question === "Bạn muốn vào phòng ban nào ?") return;
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
                        )
                    })}
                    <View style={styles.questionSmallContainer}>
                        <Text style={styles.questionTitle}>
                            {data.Questions.length}. Bạn muốn vào phòng ban
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
            </View>
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
