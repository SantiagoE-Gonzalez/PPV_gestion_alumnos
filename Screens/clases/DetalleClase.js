import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'
import { useGestionDeAlumnosContext } from '../../Context/GestionAlumnosContext'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Titulo from '../../Componentes/Titulo';

const DetalleClase = () => {
    const { claseId } = useGestionDeAlumnosContext();
    const [text, onChangeText] = React.useState('');
    const [clase, setClase] = useState();
    let docSnap;
    useEffect(() => {
        async function getData() {
            const docRef = doc(db, "clases", claseId);
            docSnap = await getDoc(docRef);
        }
        getData().then(() => {
            console.log(docSnap.data());
            setClase(docSnap.data());
        });
    }, [claseId]);

    const generarVistaClase = () => {
        return <View>
            <Text>{claseId}</Text>
            <Titulo>{clase.nombre}</Titulo>
            <Titulo>{clase.descripcion}</Titulo>
            <Text>{clase.dia}</Text>
            <Text>{clase.hora}</Text>
            <Text>{clase.limite}</Text>
        </View>
    }

    return (
        <View style={{ padding: 10 }}>
            {clase && generarVistaClase()}
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
export default DetalleClase