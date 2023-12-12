import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { color } from '@rneui/themed/dist/config';
import colors from '../../constants/colors';

const ShowTaskDetail = () => {
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        setStartDate(moment('20/11/2023', 'DD/MM/YYYY').format('DD/MM/YYYY'));
        setEndDate(moment('11/12/2023', 'DD/MM/YYYY').format('DD/MM/YYYY'));
        setImg(
            'https://scontent.fdad7-2.fna.fbcdn.net/v/t39.30808-6/409583153_698174189085978_1783923346839407800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Dr5BvERtDOYAX8Ico4Z&_nc_ht=scontent.fdad7-2.fna&oh=00_AfB1tCssamTUADtBWWTz4KqiZZzH4gQuWV_ADEtFERo9bw&oe=657D2D53'
        );
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.khungImage}>
                    <Image source={{ uri: img }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.title}>Ke hoach cho su kien</Text>
                </View>
                <View>
                    <Text style={styles.dateTime}>
                        {startDate} - {endDate}
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.body_lable}>Task to do</Text>
                <View style={styles.body_content}>
                    <Text style={styles.content_detail}>
                        Điền trước các sheet liên quan chuẩn bị cho sự kiện sắp diễn ra.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ShowTaskDetail;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'column',
        paddingHorizontal: 30,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 200,
    },
    khungImage: {
        width: 150,
        height: 150,
        marginRight: 10,
        marginBottom: 10,
        // flex: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 5,
    },
    dateTime: {
        fontWeight: '500',
        fontSize: 16,
    },
    body: {
        marginTop: 30,
    },
    body_lable: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 20,
        color: colors.border,
    },
    body_content: {
        marginTop: 10,
        width: '100%',
        height: '70%',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    content_detail: {
        fontSize: 16,
        fontWeight: '500',
    },
});
