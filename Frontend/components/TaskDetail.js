import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../constants/colors';
import { CheckBox } from '@rneui/themed';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
export default function TaskDetail(props) {
    let { onPress } = props;
    const naigation = useNavigation();
    const [status, setStatus] = useState(false);
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [dateNow, setDateNow] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    useEffect(() => {
        setStartDate(moment('20/11/2023', 'DD/MM/YYYY').format('DD/MM/YYYY'));
        setEndDate(moment('11/12/2023', 'DD/MM/YYYY').format('DD/MM/YYYY'));
        setDateNow(moment(new Date()).format('DD/MM/YYYY'));
        setTitle('Kế hoạch cho sự kiện IT Nihongo');
        setContent('Điền trước các sheet liên quan chuẩn bị cho sự kiện sắp diễn ra.');
        setImg(
            'https://scontent.fdad7-2.fna.fbcdn.net/v/t39.30808-6/409583153_698174189085978_1783923346839407800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Dr5BvERtDOYAX8Ico4Z&_nc_ht=scontent.fdad7-2.fna&oh=00_AfB1tCssamTUADtBWWTz4KqiZZzH4gQuWV_ADEtFERo9bw&oe=657D2D53'
        );
    }, []);
    const isEventOver = endDate < dateNow;
    const handShow = () => {
        naigation.navigate('ShowTaskDetail');
    };
    return (
        <TouchableOpacity style={[styles.container]} activeOpacity={0.6} onPress={handShow}>
            <View style={styles.khungImage}>
                <Image source={{ uri: img }} style={styles.image} />
            </View>
            <View style={styles.rightContent}>
                <View style={styles.top}>
                    <Text style={[styles.title, , isEventOver && styles.eventOverBackground]} numberOfLines={1}>
                        {title}
                    </Text>
                    <CheckBox
                        center
                        checked={status}
                        style={styles.checkBox}
                        onPress={() => setStatus(!status)}
                        checkedColor={colors.primary}
                    />
                </View>
                <View style={[styles.bottom]}>
                    <Text style={styles.content} numberOfLines={2}>
                        {content}
                    </Text>
                    <Text style={styles.dateTime}>
                        {startDate} - {endDate}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        overflow: 'hidden', // Áp dụng thuộc tính overflow vào container
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -10,
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        color: colors.text,
        flex: 7,
    },
    checkBox: {
        color: colors.primary,
        padding: 0, // Bỏ padding
        margin: 0, // Bỏ margin
    },
    bottom: {
        // backgroundColor: colors.primary,
    },
    eventOverBackground: {
        color: 'red',
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 5,
        color: colors.subText,
        marginTop: -10,
    },
    dateTime: {
        color: colors.subText,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    khungImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
        // flex: 3,
    },
    rightContent: {
        flex: 7,
    },
});
