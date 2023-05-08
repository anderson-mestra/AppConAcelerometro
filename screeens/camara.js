import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Camera } from 'expo-camera';

export default function Camara({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
  
      resetCamera();
    }, []);
  
    const resetCamera = () => {
      setPhoto(null);
      setCameraType(Camera.Constants.Type.back);
    };
  
    const tomarFoto = async () => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const photoData = await cameraRef.current.takePictureAsync(options);
        setPhoto(photoData.uri);
      }
    };
  
    const [isTorchOn, setIsTorchOn] = useState(false);
  
    // const linterna = () => {
    //     Torch.switchState(!isTorchOn);
    //     setIsTorchOn(!isTorchOn);
    // };
  
    return (
      <View style={styles.container}>
        {hasPermission ? (
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.cameraPreview}
              type={cameraType}
              ref={cameraRef}
            />
          </View>
        ) : null}
        <View style={styles.buttonContainer}>
  
          {/* //Boton tomar foto */}
          <TouchableOpacity style={styles.tomarFoto} onPress={tomarFoto}>
            <Image
              source={require('../images/diafragma.png')}
              style={styles.image}
            />
          </TouchableOpacity>
  
          {/* Boton linterna */}
          {/* <TouchableOpacity style={styles.tomarFoto} onPress={linterna}>
            <Image
              source={require('../images/linterna.png')}
              style={styles.image}
            />
          </TouchableOpacity> */}
  
          {/* Boton mostrar foto */}
          {photo ? (
            <TouchableOpacity
              style={styles.mostrarFoto}
              onPress={() => navigation.navigate('Foto', { photo })}>
              <Text style={styles.buttonText}>Ver foto</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    cameraContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cameraPreview: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 10,
    },
    tomarFoto: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b090a',
      borderRadius: 20,
    },
    image: {
      width: 35,
      height: 35
    },
    mostrarFoto: {
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b090a',
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
    },
  });
  