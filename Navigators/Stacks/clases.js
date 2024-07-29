import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoClases from '../../Screens/clases/ListadoClases';
import AgregarClase from '../../Screens/clases/AgregarClase';
import DetalleClase from '../../Screens/clases/DetalleClase';

const ClasesStack = () => {
    const Stack = createNativeStackNavigator(); {/**Es la ruta inicial */ }

    return (
        <Stack.Navigator
            initialRouteName="listadoClases"
            screenOptions={{
                headerStyle: { backgroundColor: "#8F0EA4" },
                headerTintColor: "#FFFFFF"
            }}
            options={{ headerShown: false }}
        >
            <Stack.Screen name="listadoClases" component={ListadoClases} options={{ title: "Listado de clases", headerShown: true }} />
            <Stack.Screen name="agregarClase" component={AgregarClase} options={{ title: "Agregar clase", headerShown: true }}/>
            <Stack.Screen name="detalleClase" component={DetalleClase} options={{ title: "Detalle de clase", headerShown: true }}/>
        </Stack.Navigator>
    )
}

export default ClasesStack