import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Card from '../../Componentes/Card'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/config';
import Loading from '../../Componentes/Loading/loading';
import Titulo from '../../Componentes/Titulo';
import { useGestionDeAlumnosContext } from '../../Context/GestionAlumnosContext';

const AgregarAlumno = () => {
    const { setHasRefreshAlumnos } = useGestionDeAlumnosContext();
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [nroTelefono, setNroTelefono] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [claseElegida, setClaseElegida] = React.useState('');
    const [clasesDisponibles, setClasesDisponibles] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const onPress = () => {
        setIsLoading(true);
        addAlumno().then(() => {
            setIsLoading(false);
            setIsAdded(true)
            setHasRefreshAlumnos(true);
        });
    }


    async function addAlumno() {
        const docRef = await addDoc(collection(db, "alumnos"), {
            nombre: nombre,
            apellido: apellido,
            telefono: nroTelefono,
            email: email,
            claseElegida: claseElegida,
            clasesDisponibles: clasesDisponibles
        });
        console.log(docRef);
    }

    return (
        <View>
            {!isLoading && isAdded && <Titulo titulo="El alumno ha sido agregado de forma exitosa"></Titulo>}
            {isLoading && <Loading/>}
            {!isLoading && !isAdded && <View style={{ padding: 10 }}>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNombre}
                        value={nombre}
                        placeholder='Nombre'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setApellido}
                        value={apellido}
                        placeholder='Apellido'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setNroTelefono}
                        value={nroTelefono}
                        placeholder='Nro de telefono'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Correo electronico'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setClaseElegida}
                        value={claseElegida}
                        placeholder='Clase elegida'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setClasesDisponibles}
                        value={clasesDisponibles}
                        placeholder='Cantidad de clases disponibles'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={{ color: '#ffffff' }}>Agregar alumno nueva</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAlert} onPress={onPress}>
                        <Text style={{ color: '#ffffff' }}>Limpiar campos</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#8F0EA4',
        padding: 10,
    }, buttonAlert: {
        alignItems: 'center',
        backgroundColor: '#F40E45',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    }, input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});
export default AgregarAlumno