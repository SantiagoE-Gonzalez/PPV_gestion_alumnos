import { View, Text } from 'react-native'
import React from 'react'

const Titulo = (props) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>{props.titulo}</Text>
    </View>
  )
}

export default Titulo