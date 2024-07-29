import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/home';

const HomeStack = () => {
    const Stack = createNativeStackNavigator(); {/**Es la ruta inicial */ }

    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerStyle: { backgroundColor: "#8F0EA4" },
                headerTintColor: "#FFFFFF"
            }}
            options={{ headerShown: false }}
        >
            <Stack.Screen name="home" component={Home} options={{ title: "Gestión de alumnos", headerShown: true }} />{/** aunque se llame component, lo ubicamos en la carpeta de Screen. */}
            
        </Stack.Navigator>
    )
}

export default HomeStack