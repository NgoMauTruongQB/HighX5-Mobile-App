import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import colors from '../../constants/colors'
import FunctionItem from '../../components/FunctionItem'
import icons from '../../constants/icons'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
    const navigation = useNavigation()

    const handleLogout = () => {
        navigation.navigate('Login')
    }

    const handleChangePassword = () => {
        navigation.navigate('UpdatePassword')
    }

    const handleChangeProfile = () => {
        navigation.navigate('UpdateProfile')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.profile}
                source={require('../../assets/images/bg_haikei.png')}
            >
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginStart: 30
                }}>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/icons/ui-elements/user.png')}
                    />
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.name}>Ngo Mau Truong</Text>
                        <View style={styles.username}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white }}>@03nmt</Text>
                        </View>
                    </View>
                    <View style={{flex: 2}}>
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Image style={styles.nextButton} source={icons.arrowhead}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.functions}>
                <TouchableOpacity style={styles.item} activeOpacity={0.6}>
                    <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                        <Image source={icons.chat} style={styles.icon}/>
                    </View>
                    <Text style={styles.title}>Message</Text>
                    <Image source={icons.next} style={styles.next}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity={0.6} >
                    <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                        <Image source={icons.event} style={styles.icon}/>
                    </View>
                    <Text style={styles.title}>Event history attended</Text>
                    <Image source={icons.next} style={styles.next}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={handleChangeProfile} >
                    <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                        <Image source={icons.updateProfile} style={styles.icon}/>
                    </View>
                    <Text style={styles.title}>Update profile</Text>
                    <Image source={icons.next} style={styles.next}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={handleChangePassword} >
                    <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                        <Image source={icons.changePassword} style={styles.icon}/>
                    </View>
                    <Text style={styles.title}>Change password</Text>
                    <Image source={icons.next} style={styles.next}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={handleLogout} >
                    <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                        <Image source={icons.logout} style={styles.icon}/>
                    </View>
                    <Text style={styles.title}>Log out</Text>
                    <Image source={icons.next} style={styles.next}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    profile: {
        width: '100%',
        backgroundColor: colors.primary,
        flex: 2.6,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: colors.white,
    },
    functions: {
        flex: 7
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
    },
    username: {
        backgroundColor: colors.accent,
        width: '60%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    nextButton: {
        width: 26,
        height: 26,
        tintColor: colors.accent
    },

    item: {
        height: 80,
        flexDirection: 'row',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.gray
    },
    icon: {
        width: 28,
        height: 28,
        tintColor: colors.white
    },
    title: {
        flex: 8,
        paddingHorizontal: 20,
        color: colors.text,
        fontSize: 16,
        fontWeight: '600'
    },
    next: {
        width: 18,
        height: 18,
        tintColor: colors.text
    }
})
