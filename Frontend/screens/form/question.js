import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Question() {
    const data = {
        id: 1,
        category: 0,
        title: "Tuyển thành viên cho'K23 - Bén lửa sinh ra'",
        event_id: 1,
        createdAt: "2023-12-12T07:32:44.000Z",
        updatedAt: "2023-12-12T07:32:44.000Z",
        Questions: [
            {
                question: "Bạn đã tham gia câu lạc bộ nào trước đây chưa",
                id: 1,
            },
            {
                question:
                    "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?",
                id: 2,
            },
            {
                question: "Bạn đã biết về sự kiện này qua phương tiện nào?",
                id: 3,
            },
            {
                question: "Mục tiêu của bạn khi tham gia là gì?",
                id: 4,
            },
            {
                question: "Bạn muốn tham gia phòng ban nào?",
                id: 5,
            },
        ],
    };

    const navigate = useNavigation();

    useLayoutEffect(()=>{
        navigate.setOptions({
            title: data.title,
        });
    },[navigate, data])

    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});
