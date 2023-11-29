import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EventList, NotificationList, Menu, NewEvent, Home, Profile } from '../screens'
import colors from '../constants/colors'
import icons from '../constants/icons'

const Tab = createBottomTabNavigator()

const getTabBarIcon = (route, focused, color, size) => {
    let iconName

    if (route.name === 'Home') {
        iconName = focused ? icons.homeTab : icons.homeTab2
    } else if (route.name === 'EventList') {
        iconName = icons.searchTab
    } else if (route.name === 'NotificationList') {
        iconName = focused ? icons.notificationTab : icons.notificationTab2
    } else if (route.name === 'NewEvent') {
        iconName = icons.createTab
    } else if (route.name === 'Menu') {
        iconName = focused ? icons.menuTab : icons.menuTab2
    }
    return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />
}

const UITab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route, focused, color, size),
                tabBarLabel: '',
                tabBarStyle: {
                    paddingTop: 20
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="EventList" component={EventList} />
            <Tab.Screen name="NewEvent" component={NewEvent} />
            <Tab.Screen name="NotificationList" component={NotificationList} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

export default UITab