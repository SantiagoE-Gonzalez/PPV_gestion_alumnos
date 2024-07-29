import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Card from '../../Componentes/Card'

const DetalleClase = () => {
    const [text, onChangeText] = React.useState('');

    const onPress = () => {
        alert("hola");
    }

    return (
        <View style={{ padding: 10 }}>
            <View>
                <Text>Danza Infantil</Text>
                <Text>18:00</Text>
                <Text>Lunes</Text>

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
export default DetalleClase