import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import FunctionItem from '../../components/FunctionItem'
import icons from '../../constants/icons'

export default function Menu() {
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
                    <View style={{paddingHorizontal: 20}}>
                        <Text style={styles.name}>Ngo Mau Truong</Text>
                        <View style={styles.username}>
                            <Text style={{fontSize: 16, fontWeight: '600', color: colors.white}}>@03nmt</Text>
                        </View>
                    </View>
                    <View style={{flex: 2}}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image style={styles.nextButton} source={icons.arrowhead}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.functions}>
                <FunctionItem icon={icons.chat} title='Message'/>
                <FunctionItem icon={icons.event} title='Event history attended'/>
                <FunctionItem icon={icons.updateProfile} title='Update profile'/>
                <FunctionItem icon={icons.changePassword} title='Change password'/>
                <FunctionItem icon={icons.logout} title='Log out'/>
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
    functions:{
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
    }
})