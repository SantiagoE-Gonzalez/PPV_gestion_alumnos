import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ backgroundColor: '#8F0EA4', borderRadius: 10, padding: 10, margin: 5 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{props.titulo}</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '500' }}>{props.subtitulo}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default Card