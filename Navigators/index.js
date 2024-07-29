import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Stacks/home';
import ClasesStack from './Stacks/clases';
import AlumnosStack from './Stacks/alumnos';

const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name="Clases" component={ClasesStack} options={{ headerShown: false }} />
                <Tab.Screen name="Alumnos" component={AlumnosStack} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator