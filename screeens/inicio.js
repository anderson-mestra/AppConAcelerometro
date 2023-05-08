import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Inicio({ navigation }) {
    return (
      <View style={StyleInicio.container}>
        <Text style={StyleInicio.text}>BIENVENIDO</Text>
        <Image
          style={StyleInicio.image}
          source={require('../images/camara.png')}></Image>
        <TouchableOpacity
          style={StyleInicio.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={StyleInicio.textButton}>Empezar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const StyleInicio = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    image: {
      height: 200,
      width: 250,
    },
  
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#0b090a',
      paddingLeft: 'auto',
    },
  
    button: {
      backgroundColor: '#0b090a',
      height: 50,
      width: 200,
      paddingVertical: 10,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      color: 'white',
      fontSize: 18,
    },
  });