import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Event = () => {
    return (
        <View style={styles.content}>
            <View style={styles.content_img}>
                {img ? (
                    <TouchableOpacity onPress={requesAlbumPermission} style={styles.img}>
                        <Image
                            source={{ uri: img }}
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={requesAlbumPermission}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="images" size={40} color={colors.accent} />
                            <Text style={styles.content_lable}>Image Event</Text>
                        </View>
                    </TouchableOpacity>
                )}
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
                            textColor={colors.accent} // Màu chữ của DatePicker
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
                            textColor={colors.accent} // Màu chữ của DatePicker
                            minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))} // Ngày tối thiểu là 5 năm kể từ ngày hiện tại
                            maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))} // Ngày tối đa là 5 năm kể từ ngày hiện tại
                            // style={{ width: 0, height: 0 }} // Ẩn DateTimePicker
                            // isVisible={showDatePicker}
                        />
                    )}
                </View>
            </View>
            {/* <HorizontalLine /> */}

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
        </View>
    );
};

export default Event;

const styles = StyleSheet.create({
    content_img: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
    },
    img: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    content_lable: {
        fontSize: 20,
        fontWeight: '500',
        // marginLeft: 10,
        color: colors.accent,
    },
    content_Event: {
        marginTop: 20,
    },
    content_Event_Date: {
        marginTop: 10,
    },
    input: {
        marginTop: 5,
        // marginLeft: 10,
        backgroundColor: colors.white,
        // width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '400',
        borderRadius: 5,
        borderWidth: 1, // Sử dụng borderWidth thay vì border
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
        color: colors.accent,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Để canh giữa theo chiều dọc
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        // marginLeft: 10,
        // width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.white,
        color: colors.accent,
    },
    input123: {
        flex: 1,
        fontSize: 16,
        // fontWeight: '600',
        color: colors.accent,
    },
    input_Description: {
        marginTop: 5,
        // marginLeft: 10,
        backgroundColor: colors.white,
        color: colors.accent,
        // width: '90%',
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '400',
        borderRadius: 5,
        borderWidth: 1, // Sử dụng borderWidth thay vì border
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
    },
});
