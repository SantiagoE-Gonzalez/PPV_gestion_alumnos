import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'
import { useGestionDeAlumnosContext } from '../../Context/GestionAlumnosContext'
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import Loading from '../../Componentes/Loading/loading';
const ListadoAlumnos = ({ navigation }) => {
    const { hasRefreshAlumnos, setHasRefreshAlumnos } = useGestionDeAlumnosContext();
    const [alumnosOriginal, setAlumnosOriginal] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputBuscador, onChangeInputBuscador] = React.useState('');

    useEffect(() => {
        refreshAlumnos();
    }, []);

    useEffect(() => {
        refreshAlumnos();
    }, [hasRefreshAlumnos]);

    const refreshAlumnos = () => {
        if (hasRefreshAlumnos) {
            getAlumnos().then(() => {
                setIsLoading(false);
                setHasRefreshAlumnos(false);
            });
        }
    }

    const getAlumnos = async () => {
        const q = query(collection(db, "alumnos"));
        const alumnosFromDB = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let alumno = { id: doc.id }
            alumno = { ...alumno, ...doc.data() }
            alumnosFromDB.push(alumno);
            // doc.data() is never undefined for query doc snapshots
        });
        setAlumnos(alumnosFromDB);
    }

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
        navigation.navigate('agregarAlumno');
    }

    return (
        <View style={isLoading ? styles.container : ''}>
            {isLoading && <Loading />}
            {!isLoading && <View>
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
            </View>}
        </View >
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