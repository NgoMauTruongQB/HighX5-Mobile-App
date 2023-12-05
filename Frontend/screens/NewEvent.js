import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';

export default function NewEvent() {
    const [isFocused, setIsFocused] = useState(false);
    const slides = [
        {
            key: 'slide1',
            title: 'Slide 1',
            text: 'Description for slide 1',
            img: require('../assets/slide/1.png'),
        },
        {
            key: 'slide2',
            title: 'Slide 2',
            text: 'Description for slide 2',
            img: require('../assets/slide/2.png'),
        },
        {
            key: 'slide3',
            title: 'Slide 3',
            text: 'Description for slide 3',
            img: require('../assets/slide/3.png'),
        },
    ];

    const [showRealApp, setShowRealApp] = useState(false);

    const handleDone = () => {
        setShowRealApp(true);
    };

    useEffect(() => {
        if (showRealApp) {
            const timer = setTimeout(() => {
                setShowRealApp(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showRealApp]);

    const HorizontalLine = () => {
        return <View style={styles.horizontalLine} />;
    };
    const renderSlides = ({ item }) => {
        // return (
        //     // <View style={styles.slideContainer}>
        //     //     <Text style={styles.slideTitle}>{item.title}</Text>
        //     //     <Text style={styles.slideText}>{item.text}</Text>
        //     //     <Image source={item.img} />
        //     // </View>
        // );
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (inputValue === '') {
            setIsFocused(false);
        }
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [startDateSeclect, setStartDateSeclect] = useState(startDate.toLocaleDateString());
    const [endDateSeclect, setEndDateSeclect] = useState(endDate.toLocaleDateString());

    const handleStartDateChange = (event, selectedDate) => {
        setShowStartDatePicker(false);
        if (selectedDate !== undefined) {
            setStartDate(selectedDate);
            setStartDateSeclect(moment(selectedDate).format('DD/MM/YYYY'));
        }
    };

    const handleEndDateChange = (event, selectedDate) => {
        setShowEndDatePicker(false);
        if (selectedDate !== undefined) {
            setEndDate(selectedDate);
            setEndDateSeclect(moment(selectedDate).format('DD/MM/YYYY'));
        }
    };

    const showStartDatePickerModal = () => {
        setShowStartDatePicker(true);
    };

    const showEndDatePickerModal = () => {
        setShowEndDatePicker(true);
    };

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.header_txt}>Create Event</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.content_img}>
                    <Icon name="images" size={40} onPress={() => alert('Mo album')}></Icon>
                    <Text style={styles.content_lable}>Image Event</Text>
                </View>
                <HorizontalLine />
                <View style={styles.content_Event}>
                    <Text style={styles.content_lable}>Name Event</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ben Lua Sinh Ra"
                        // onChangeText={(text) => {
                        //     setSearchText(text);
                        // }}
                    />
                </View>
                {/* <HorizontalLine /> */}

                <View style={styles.content_Event}>
                    <Text style={styles.content_lable}>Slogan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhen nhóm - Bùng cháy - Lan tỏa"
                        // onChangeText={(text) => {
                        //     setSearchText(text);
                        // }}
                    />
                </View>
                {/* <HorizontalLine /> */}

                <View style={styles.content_Event}>
                    <Text style={styles.content_lable}>Description</Text>
                    <TextInput
                        style={styles.input_Description}
                        placeholder="Mô tả sự kiện"
                        multiline
                        textAlignVertical="top" // Bắt đầu từ phía trên xuống
                        onChangeText={(text) => {
                            value = { text };
                        }}
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                    />
                </View>
                {/* <HorizontalLine /> */}

                <View style={styles.content_Event}>
                    <Text style={styles.content_lable}>Location</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sân khu F - ĐH BKĐN"
                        // onChangeText={(text) => {
                        //     setSearchText(text);
                        // }}
                    />
                </View>
                {/* <HorizontalLine /> */}

                <View style={styles.content_Event}>
                    <Text style={styles.content_lable}>Start Date</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.input123} onPress={showStartDatePickerModal}>
                            {startDateSeclect}
                        </Text>
                        <Icon onPress={showStartDatePickerModal} name="calendar" size={20} color={'#969292'}></Icon>
                        {showStartDatePicker && (
                            <DateTimePicker
                                value={startDate}
                                mode="date"
                                display="default"
                                onChange={handleStartDateChange}
                                is24Hour={true}
                                textColor="#000" // Màu chữ của DatePicker
                                minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))} // Ngày tối thiểu là 5 năm kể từ ngày hiện tại
                                maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))} // Ngày tối đa là 5 năm kể từ ngày hiện tại
                                // style={{ width: 0, height: 0 }} // Ẩn DateTimePicker
                                // isVisible={showDatePicker}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.content_Event_Date}>
                    <Text style={styles.content_lable}>End Date</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.input123} onPress={showEndDatePickerModal}>
                            {endDateSeclect}
                        </Text>
                        <Icon onPress={showEndDatePickerModal} name="calendar" size={20} color={'#969292'}></Icon>

                        {showEndDatePicker && (
                            <DateTimePicker
                                value={endDate}
                                mode="date"
                                display="default"
                                onChange={handleEndDateChange}
                                is24Hour={true}
                                textColor="#000" // Màu chữ của DatePicker
                                minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))} // Ngày tối thiểu là 5 năm kể từ ngày hiện tại
                                maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))} // Ngày tối đa là 5 năm kể từ ngày hiện tại
                                // style={{ width: 0, height: 0 }} // Ẩn DateTimePicker
                                // isVisible={showDatePicker}
                            />
                        )}
                    </View>
                </View>
                {/* <HorizontalLine /> */}
            </View>

            <View style={styles.content_buttom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttom_lable}>Create</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // slideContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // slideTitle: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginBottom: 16,
    // },
    // slideText: {
    //     fontSize: 18,
    //     textAlign: 'center',
    // },
    // dotStyle: {
    //     backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //     width: 4,
    //     height: 4,
    //     borderRadius: 5,
    //     marginHorizontal: 8,
    // },
    // activeDotStyle: {
    //     backgroundColor: '#000',
    //     width: 6,
    //     height: 6,
    //     borderRadius: 7,
    //     marginHorizontal: 8,
    // },
    body: {
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.background,
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: colors.black,
        width: '95%', // Chiều rộng có thể điều chỉnh tùy ý
        marginTop: 10, // Khoảng cách giữa đường và nội dung xung quanh
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    header_txt: {
        fontSize: 30,
        fontWeight: '600',
    },
    content_buttom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', // Để canh giữa theo chiều dọc
        justifyContent: 'center',
        marginVertical: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center', // Để canh giữa theo chiều dọc
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        width: 150,
        backgroundColor: colors.button,
        paddingVertical: 10,
    },
    buttom_lable: {
        fontSize: 25,
        fontWeight: '500',
    },
    content_img: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
    },
    content_lable: {
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 10,
    },
    content_Event: {
        marginTop: 20,
    },
    content_Event_Date: {
        marginTop: 10,
    },
    input: {
        marginTop: 5,
        marginLeft: 10,
        backgroundColor: colors.white,
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: '400',
        borderRadius: 10,
        borderWidth: 1, // Sử dụng borderWidth thay vì border
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Để canh giữa theo chiều dọc
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 10,
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.white,
    },
    input123: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
    },
    input_Description: {
        marginTop: 5,
        marginLeft: 10,
        backgroundColor: colors.white,
        width: '90%',
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: '400',
        borderRadius: 10,
        borderWidth: 1, // Sử dụng borderWidth thay vì border
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
    },
});
