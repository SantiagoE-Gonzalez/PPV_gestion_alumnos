import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useGestionDeAlumnosContext } from '../../Context/GestionAlumnosContext';
import Loading from '../../Componentes/Loading/loading';

const ListadoClases = ({ navigation }) => {
    const { setClaseId, hasRefreshClases, setHasRefreshClases } = useGestionDeAlumnosContext();
    const [isLoading, setIsLoading] = useState(true);
    const [clases, setClases] = useState([]);


    useEffect(() => {
        refreshClases();
    }, [hasRefreshClases]);

    
    useEffect(() => {
        refreshClases();
    }, []);

    const refreshClases = () => {
        if (hasRefreshClases) {
            getClases().then(() => {
                setIsLoading(false);
                setHasRefreshClases(false);
            });
        }
    }


    const getClases = async () => {
        const q = query(collection(db, "clases"));
        const clasesFromBD = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let clase = { id: doc.id }
            clase = { ...clase, ...doc.data() }
            clasesFromBD.push(clase);
            // doc.data() is never undefined for query doc snapshots
        });
        setClases(clasesFromBD);
    }

    const generarListadoClases = () => {
        let cards = [];
        clases.forEach(element => {
            cards.push(<Card key={element.id} titulo={element.nombre} subtitulo={element.hora} onPress={() => goToDetalleClase(element.id)} />)
        })
        return <View>
            {cards}
        </View>
    }
    const goToDetalleClase = (id) => {
        console.log(id);
        setClaseId(id);
        navigation.navigate('detalleClase');
    }

    const onPress = () => {
        navigation.navigate('agregarClase');
    }

    return (
        <View style={isLoading ? styles.container : ''}>
            {isLoading && <Loading />}
            {!isLoading && <View>
                <View>
                    {clases.length > 0 && generarListadoClases()}
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={{ color: '#ffffff' }}>Agregar clase nueva</Text>
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
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
});


export default ListadoClases