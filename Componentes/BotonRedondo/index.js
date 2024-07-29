import { View, Text } from 'react-native'
import React from 'react'

const BotonRedondo = (props) => {
    return (
        <View style={{
            backgroundColor: "#D9D9D9", flex: 1, justifyContent: 'center', borderRadius: 100, height: 100, width: 100, alignSelf: 'center', alignContent: 'center', alignItems: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', alignItems: 'center', textAlign: 'center', alignContent: 'center', width: 100, height: 100 }}>
                {props.nombreBoton}</Text>
        </View>
    )
}

export default BotonRedondo