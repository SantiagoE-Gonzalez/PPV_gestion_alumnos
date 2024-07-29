import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Card from '../../Componentes/Card'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const AgregarClase = () => {
    const [nombre, setNombre] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [dia, setDia] = React.useState('');
    const [hora, setHora] = React.useState('');
    const [limite, setLimite] = React.useState('');

    // Add a new document in collection "cities"


    const onPress = async () => {
        await setDoc(doc(db, "clases", nombre+"_"+dia+"_"+hora), {
            nombre: nombre,
            descripcion: descripcion,
            dia: dia,
            hora: hora,
            limite: limite
        })
        console.log(response);
    }

    return (
        <View style={{ padding: 10 }}>
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