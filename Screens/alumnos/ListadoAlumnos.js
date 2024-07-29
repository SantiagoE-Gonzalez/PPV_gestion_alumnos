import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'

const ListadoAlumnos = ({ navigation }) => {
    const [alumnosOriginal, setAlumnosOriginal] = useState([]);
    const [alumnos, setAlumnos] = useState([]);

    const [inputBuscador, onChangeInputBuscador] = React.useState('');

    useEffect(() => {
        if (alumnos.length == 0 && alumnosOriginal.length == 0) {
            fetch("data/alumnos.json")
                .then(response => response.json())
                .then(data => {setAlumnos(data), setAlumnosOriginal(data)});
        }
    }, []);

    useEffect(() => {
        if (alumnosOriginal.length === 0) {
            setAlumnosOriginal(alumnos);
        }
        setAlumnos(alumnosOriginal);
        if (inputBuscador !== '') {
            let alumnosNuevo = [];
            alumnosOriginal.forEach(alumno => {
                const nombreApellido = (alumno.nombre + " " + alumno.apellido).toUpperCase();

                if (nombreApellido.includes(inputBuscador.toUpperCase())) {
                    console.log(alumno.nombre);
                    alumnosNuevo.push(alumno);
                }
            });
            setAlumnos(alumnosNuevo);
        }
    }, [inputBuscador]);

    const generarListadoAlumnos = () => {
        let cards = [];
        alumnos.forEach(element => {
            cards.push(<Card key={element.nombre} titulo={element.nombre + " " + element.apellido} onPress={() => goToDetalleClase(element)} />)
        })
        return <View>
            {cards}
        </View>
    }

    const goToDetalleClase = (alumno) => {
        navigation.navigate('detalleAlumno', {
            alumno: alumno
        });
    }

    const onPress = () => {
        navigation.navigate('agregarClase');
    }

    return (
        <View style={{ padding: 10 }}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInputBuscador}
                    value={inputBuscador}
                    placeholder='Buscar por nombre o apellido'
                />

            </View>
            {alumnos?.length > 0 && generarListadoAlumnos()}
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ color: '#ffffff' }}>Agregar alumno</Text>
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
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    }, input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }, button: {
        alignItems: 'center',
        backgroundColor: '#8F0EA4',
        padding: 10,
    },
});


export default ListadoAlumnos