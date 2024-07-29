import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Card from '../../Componentes/Card'

const AgregarAlumno = () => {
    const [text, onChangeText] = React.useState('');

    const onPress = () => {
        alert("hola");
    }

    return (
        <View style={{ padding: 10 }}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Nombre'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Apellido'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Nro de telefono'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Correo electronico'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Clase elegida'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
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