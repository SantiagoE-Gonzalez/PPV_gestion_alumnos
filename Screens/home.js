import { View } from 'react-native'
import React from 'react'
import Titulo from '../Componentes/Titulo'

const Home = () => {

    return (
        <View style={{ padding: 10 }}>
            <Titulo titulo="Bienvenido"></Titulo>
            {/*<Titulo titulo="Accesos directos"></Titulo>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <BotonRedondo nombreBoton="Agregar alumno" />
                <BotonRedondo nombreBoton="Listado de alumnos" />
                <BotonRedondo nombreBoton="Listado de clases" />
                <BotonRedondo nombreBoton="Registrar asistencia" />
            </View>*/}
        </View>
    )
}

export default Home