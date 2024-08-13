import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Card from '../../Componentes/Card'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/config';
import Loading from '../../Componentes/Loading/loading';
import Titulo from '../../Componentes/Titulo';
import { useGestionDeAlumnosContext } from '../../Context/GestionAlumnosContext';

const AgregarClase = () => {
    const { setHasRefreshClases } = useGestionDeAlumnosContext();
    const [nombre, setNombre] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [dia, setDia] = React.useState('');
    const [hora, setHora] = React.useState('');
    const [limite, setLimite] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    // Add a new document in collection "cities"


    const onPress = async () => {
        setIsLoading(true);
        addClase().then(() => {
            setIsLoading(false);
            setIsAdded(true)
            setHasRefreshClases(true)
        });
        
    }

    async function addClase() {
        const docRef = await addDoc(collection(db, "clases"), {
            nombre: nombre,
            descripcion: descripcion,
            dia: dia,
            hora: hora,
            limite: limite
        });
        console.log(docRef);
    }

    return (
        <View style={{ padding: 10 }}>
            {!isLoading && isAdded && <Titulo titulo="La clase ha sido agregado de forma exitosa"></Titulo>}
            {isLoading && <Loading />}
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
                        onChangeText={setDescripcion}
                        value={descripcion}
                        placeholder='Descripcion'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setDia}
                        value={dia}
                        placeholder='Día'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setHora}
                        value={hora}
                        placeholder='Hora'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLimite}
                        value={limite}
                        placeholder='Limite de estudiantes'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={{ color: '#ffffff' }}>Agregar clase nueva</Text>
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
export default AgregarClase