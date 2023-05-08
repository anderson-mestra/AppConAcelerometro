import React, { useState, useEffect } from 'react';
import { Text,View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Acelerometro({ navigation }) {
  const [{x,y,z}, Datos]=useState({x:0,y:0,z:0});
  const [posicion, setPosicion] = useState({x: 150, y: 100}); 
  
  const start =()=>{
    Accelerometer.setUpdateInterval(100);
    Accelerometer.addListener(Datos);
  };

  useEffect(() => {
    setPosicion({x: 0 - x * 120, y: 100 + y * 120});
  }, [x, y]);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>ACELEROMETRO</Text>
      <Image style={styles.image} source={require('../images/acelerometro.png')}></Image>
      <TouchableOpacity style={styles.activeButton} onPress={start}>
        <Text style={styles.activeButtonText}>Activar acelerometro</Text>
      </TouchableOpacity>
        <View style={styles.xyz}>
            <Text style={styles.position}>X:{x.toFixed(3)}</Text>
            <Text style={styles.position}>Y:{y.toFixed(3)}</Text>
            <Text style={styles.position}>Z:{z.toFixed(3)}</Text>
        </View>
        <TouchableOpacity style={[styles.photoButton, {left: posicion.x, top: posicion.y}]} onPress={() => navigation.navigate('Galeria')}>
            <Text style={styles.text}>
                Ver foto
            </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 250, 
    height: 250,
    marginBottom: 40
    },
  activeButton:{
    backgroundColor: '#0b090a',
    height: 50,
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xyz: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  position:{
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  activeButtonText:{
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  photoButton: {
    backgroundColor: '#0b090a',
    height: 50,
    width: 50,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});