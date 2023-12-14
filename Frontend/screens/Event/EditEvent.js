import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated, ActivityIndicator, TextInput, Modal } from 'react-native'
import { event as EventRepository } from '../../repositories'
import formatDateTime from '../../utils/helpers/formatDate'
import icons from '../../constants/icons'
import colors from '../../constants/colors'
import {startSpinner, spinValue} from '../../utils/helpers/startSpinner'
import { useNavigation } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker'

export default function EditEvent(props) {
    const [event, setEvent] = useState({})
    const [loading, setLoading] = useState(true)

    const [slogan, setSlogan] = useState('')
    const [name, setName]= useState('')
    const [description, setDescription] = useState('')
    const [date_start, setDateStart] = useState('')
    const [date_end, setDateEnd] = useState('')
    const [location, setLocation] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isDateEndPickerVisible, setDateEndPickerVisibility] = useState(false)
    
    const handleDateStartChange = (date) => {
        setDateStart(date)
        setDatePickerVisibility(false)
    }

    const handleDateEndChange = (date) => {
        setDateEnd(date)
        setDateEndPickerVisibility(false)
    }

    const handleDateStartPress = () => {
        setDatePickerVisibility(true)
    }

    const handleDateEndPress = () => {
        setDateEndPickerVisibility(true)
    }

    useEffect(() => {
        startSpinner()
        const eventId = props.route.params.eventId

        EventRepository.getEventDetail(eventId)
            .then((responseEvent) => {
                setEvent(responseEvent.queryResult)
                setSlogan(responseEvent.queryResult.slogan)
                setName(responseEvent.queryResult.name)
                setDescription(responseEvent.queryResult.description)
                setLocation(responseEvent.queryResult.location)
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                setLoading(false)
                Animated.loop(
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    })
                ).stop()
            })
    }, [])
    

    return (
        <View
            style={styles.container}
        >
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                
                    <Image source={{ uri: event.image }} style={styles.image} />
                    <View style={styles.scrollContainer}>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)}/>
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Slogan</Text>
                            <TextInput style={styles.input} value={slogan} onChangeText={(text) => setSlogan(text)}/>
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Location</Text>
                            <TextInput 
                                multiline
                                textAlignVertical="top"
                                style={styles.input} 
                                value={location} 
                                onChangeText={(text) => setLocation(text)}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                multiline
                                textAlignVertical="top"
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Date start</Text>
                            <TouchableOpacity onPress={handleDateStartPress} style={styles.input}>
                                <Text style={{ color: colors.text }}>
                                    {date_start ? formatDateTime(date_start.toString()) : 'Select Date'}
                                </Text>
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
                                            <CalendarPicker onDateChange={handleDateStartChange} selectedDate={date_start} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.formControl}>
                            <Text style={styles.label}>Date end</Text>
                            <TouchableOpacity onPress={handleDateEndPress} style={styles.input}>
                                <Text style={{ color: colors.text }}>
                                    {date_end ? formatDateTime(date_end.toString()) : 'Select Date'}
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                animationType="fade"
                                visible={isDateEndPickerVisible}
                                onRequestClose={() => setDateEndPickerVisibility(false)}
                            >
                                <View style={styles.modalContainer}>
                                    <TouchableOpacity
                                        style={styles.modalBackground}
                                        activeOpacity={1}
                                        onPressOut={() => setDateEndPickerVisibility(false)}
                                    >
                                        <View style={styles.modalContent}>
                                            <CalendarPicker onDateChange={handleDateEndChange} selectedDate={date_end} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>Update</Text>
                    </TouchableOpacity>
                    <View style={{height: 200}}></View>
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 20
    },
    formControl: {
        marginVertical: 10
    },
    label: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.secondary
    },
    input: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 6,
        borderColor: colors.dark_gray,
        borderWidth: 0.6,
        padding: 10,
        borderRadius: 6,
        color: colors.text
    },
    btn: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: colors.white,
        fontSize: 18,
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
        padding: 10,
    },

})