import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import icons from '../constants/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome, Login, SignUp, Profile, EventDetail, UpdatePassword, UpdateProfile} from '../screens'
import UITab from './UITab'

const Stack = createNativeStackNavigator()

export default function NavigationApp(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' 
                screenOptions={{
                    headerTintColor: colors.accent
                }}
            >
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name='UITab' component={UITab} options={{ headerShown: false }}/>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen 
                    name='EventDetail' 
                    component={EventDetail}
                    options={({ route }) => ({ title: route.params?.eventName || 'Event Detail' })}
                />
                <Stack.Screen name='UpdatePassword' component={UpdatePassword} options={{ title: 'Password' }} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfile} options={{ title: 'Profile' }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

