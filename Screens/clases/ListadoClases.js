import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ListadoClases = ({ navigation }) => {
    const [clases, setClases] = useState([]);


    useEffect(() => {
        getClases();
    }, []);


    const getClases = async () => {
        const q = query(collection(db, "clases"));
        const clasesFromBD = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            clasesFromBD.push(doc.data());
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        setClases(clasesFromBD);
    }

    const generarListadoClases = () => {
        let cards = [];
        clases.forEach(element => {
            console.log(element);
            cards.push(<Card key={element.nombre} titulo={element.nombre} subtitulo={element.hora} onPress={() => goToDetalleClase(1)} />)
        })
        return <View>
            {cards}
        </View>
    }
    const goToDetalleClase = (id) => {
        navigation.navigate('detalleClase');
    }

    const onPress = () => {
        navigation.navigate('agregarClase');
    }

    return (
        <View style={{ padding: 10 }}>
            <View>
                {clases.length > 0 && generarListadoClases()}
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ color: '#ffffff' }}>Agregar clase nueva</Text>
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
    },
});


export default ListadoClases