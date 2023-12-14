import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserApplyItem from "../../components/UserApplyItem";
import colors from "../../constants/colors";

const ListUserApply = () => {

    const event_id = 1

    const data = [
        {
            id: 1,
            name: "Admin123",
            gmail: "admin123@gmail.com",
            avatar: "https://res.cloudinary.com/deei5izfg/image/upload/v1702443921/Mobile/fsa4klhp1jup9deqcfld.jpg",
            telephone: "0905116391",
        },
        {
            id: 4,
            name: "Trần Thị Ngọc Quyên",
            gmail: "quyen123@gmail.com",
            avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444048/Mobile/m4liuwr1fudgqqkjyo0p.jpg",
            telephone: "0905116391",
        },
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Danh sách thành viên ứng tuyển</Text>
                {data.length === 0 ?
                <View>
                    <Text style={styles.noApply}>Hiện tại không có thành viên nào ứng tuyển</Text>
                </View>
                :
                <FlatList
                data={data}
                renderItem={({ item }) =>
                    <UserApplyItem
                        data={item} key={item.id}
                        onPress={() => {
                            alert(`You press item's name: ${item.title}`)
                        }}
                    />
                }
                keyExtractor={eachNotification => eachNotification.id}
            />
                }
            </View>
        </ScrollView>
    );
};

export default ListUserApply;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.primary,
        marginBottom: 10,
        marginTop: 20,
    },
    noApply : {
        marginTop : 200,
        fontSize : 15,
        color : colors.dark_gray
    }
});
