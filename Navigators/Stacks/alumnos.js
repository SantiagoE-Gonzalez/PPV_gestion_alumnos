import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoAlumnos from '../../Screens/alumnos/ListadoAlumnos';
import AgregarAlumno from '../../Screens/alumnos/AgregarAlumno';
import DetalleAlumno from '../../Screens/alumnos/DetalleAlumno';

const AlumnosStack = () => {
    const Stack = createNativeStackNavigator(); {/**Es la ruta inicial */ }

    return (
        <Stack.Navigator
            initialRouteName="listadoAlumnos"
            screenOptions={{
                headerStyle: { backgroundColor: "#8F0EA4" },
                headerTintColor: "#FFFFFF"
            }}
            options={{ headerShown: false }}
        >
            <Stack.Screen name="listadoAlumnos" component={ListadoAlumnos} options={{ title: "Listado de alumnos", headerShown: true }} />
            <Stack.Screen name="agregarAlumno" component={AgregarAlumno} options={{ title: "Agregar alumno", headerShown: true }}/>
            <Stack.Screen name="detalleAlumno" component={DetalleAlumno} options={{ title: "Detalle de alumno", headerShown: true }}/>
        </Stack.Navigator>
    )
}

export default AlumnosStack