import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './Navigators';
import { MiProveedor } from './Context/GestionAlumnosContext';

export default function App() {
  return (
    <MiProveedor>
      <TabNavigator></TabNavigator>
    </MiProveedor>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
