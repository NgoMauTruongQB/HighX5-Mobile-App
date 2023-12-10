import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import { isValidLength, isValidPhoneNumber, isValidSelect, isValisName } from '../../utils/validations/validations'
import RNPickerSelect from 'react-native-picker-select'
import CalendarPicker from 'react-native-calendar-picker'
import formatDateTime from '../../utils/helpers/formatDate'

export default function UpdateProfile() {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [birthday, setBirthday] = useState(null)
    const [faculity_name, setFaculityName] = useState('')
    const [gender, setGender] = useState(null)

    const [errName, setErrName] = useState('')
    const [errPhone, setErrPhone] = useState('')
    const [errAddress, setErrAddress] = useState('')
    const [errGender, setErrGender] = useState('')
    const [errBirthday, setErrBirthday] = useState('')
    const [errFaculityName, setErrFaculityName] = useState('')


    const genderOption = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const handleDatePress = () => {
        setDatePickerVisibility(true)
    }

    const handleDateChange = (date) => {
        setDatePickerVisibility(false)
        setBirthday(date)
    }

    const handleSave = () => {
        alert(formatDateTime(birthday.toString()))
    }

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.form}>
                <View style={styles.header}>
                    <Text style={styles.title}>Edit profile</Text>
                    <Text style={styles.subText}>People will get to know you with in info below</Text>
                </View>
                <View style={styles.avatar}>
                    <Image source={require('../../assets/icons/ui-elements/user.png')} style={styles.image}/>
                    <View style={styles.editAvatar}>
                        <Image source={icons.editAvatar} style={styles.editAvatarImg}/>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Name
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter your name' 
                            onChangeText={(text) => {
                                setErrName(isValidLength(text, 1) == true ? '' : 'Name cannot be left blank')
                                setName(text)
                            }}
                        />
                        {errName !== '' && <Text style={styles.error}>{errName}</Text>}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Phone number
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter your phone number' 
                            onChangeText={(text) => {
                                setErrPhone(isValidPhoneNumber(text) == true ? '' : 'Phone number not in correct format')
                                setTelephone(text)
                            }}
                        />
                        {errPhone !== '' && <Text style={styles.error}>{errPhone}</Text>}
                    </View>
                    <View style={styles.col2}>
                        <View style={styles.formControl2}>
                            <Text style={styles.label}>
                                Gender
                            </Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setErrGender(isValidSelect(value) ? '' : 'This field must be selected')
                                    setGender(value)
                                }}                            
                                items={genderOption}
                                placeholder={{ label: 'Select an option', value: null }}
                                style={styles.selection}
                                value={gender} 
                            />
                            {errGender !== '' && <Text style={styles.error}>{errGender}</Text>}
                        </View>
                        <View style={styles.formControl2}>
                            <Text style={styles.label}>Birthday</Text>

                            <TouchableOpacity onPress={handleDatePress} style={styles.dateInput}>
                                <Text style={{color: colors.text}}>{birthday ? formatDateTime(birthday.toString()) : 'Select Date'}</Text>
                            </TouchableOpacity>

                            <Modal
                                transparent={true}
                                animationType="fade"
                                visible={isDatePickerVisible}
                                onRequestClose={() => setDatePickerVisibility(false)}
                            >
                                <View style={styles.modalContainer}>
                                    <TouchableOpacity
                                        style={styles.modalBackground}
                                        activeOpacity={1}
                                        onPressOut={() => setDatePickerVisibility(false)}
                                    >
                                    <View style={styles.modalContent}>
                                        <CalendarPicker onDateChange={handleDateChange} selectedDate={birthday} />
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Address
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter your address' 
                            onChangeText={(text) => {
                                setErrAddress(isValidLength(text, 6) == true ? '' : 'Address not in correct format')
                                setAddress(text)
                            }}
                        />
                        {errAddress !== '' && <Text style={styles.error}>{errAddress}</Text>}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Faculity
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter faculity name' 
                            onChangeText={(text) => {
                                setErrFaculityName(isValidLength(text, 4) == true ? '' : 'Faculity not in correct format')
                                setFaculityName(text)
                            }}
                        />
                        {errFaculityName !== '' && <Text style={styles.error}>{errFaculityName}</Text>}
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btn}
                        onPress={() => handleSave()}
                    >
                        <Text style={styles.textBtn}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 16
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%'
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.accent
    },
    subText: {
        fontSize: 14,
        color: colors.text,
        width: '80%',
        textAlign: 'center',
        marginTop: 4
    },
    avatar: {
        width: 120,
        height: 120,
        position: 'relative',
    },
    image: {
        width: 120,
        height: 120,
    },
    editAvatar: {
        width: 36,
        height: 36,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: colors.white,
    },
    editAvatarImg: {
        width: 16,
        height: 16,
        tintColor: colors.white
    },
    body: {
        paddingTop: 30,
        width: '100%'
    }, 
    formControl: {
        width: '100%',
        marginBottom: 12
    },
    col2: {
        width: '100%',
        marginBottom: 12,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formControl2: {
        width: '48%'
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.accent
    },
    input: {
        padding: 12,
        borderWidth: 0.4,
        borderColor: colors.text,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 6,
        color: colors.text,
    },
    error: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: colors.danger
    },
    selection: {
        inputIOS: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.text,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 6,
        },
        inputAndroid: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.text,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 6,
        },
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 100
    },
    btn: {
        padding: 14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: colors.primary
    },
    textBtn: {
        color: colors.accent,
        fontWeight: '600',
        fontSize: 16,
    },
    dateInput: {
        padding: 12,
        borderWidth: 0.4,
        borderColor: colors.text,
        borderRadius: 8,
        color: colors.text,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 6,
    },
    modalContainer: {
        flex: 1,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        marginHorizontal: 6,
        borderRadius: 10,
        marginTop: 200,
        padding: 10
    },
})