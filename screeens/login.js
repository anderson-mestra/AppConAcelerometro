import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../firebaseConfig'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
      if (username.trim() === '' || password.trim() === ''){
        alert('Hay campos vacios');
      }
      else {
        createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          alert('Registrado exitosamente')
          const user = userCredential.user;
          console.log(user);
        })
        .catch(error => alert(error.message))
      }
    }

    const handleSignIn = () => {
      if (username.trim() === '' || password.trim() === ''){
        alert('Hay campos vacios');
      }
      else {
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {

          console.log('Acceso exitoso');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('Acelerometro');
          setUsername('');
          setPassword('');
        })
        .catch(error => alert(error.message))
      }

    }

    return (
      <View style={styleLogin.container}>
        <Image
          source={require('../images/login.png')}
          style={styleLogin.image}></Image>
        <TextInput
          style={styleLogin.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styleLogin.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styleLogin.button}
          title="Iniciar sesión"
          onPress={handleSignIn}>
          <Text style={styleLogin.textButton}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleLogin.button}
          title="Registrarse"
          onPress={handleCreateAccount}>
          <Text style={styleLogin.textButton}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
  
  const styleLogin = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: { width: 250, height: 250, marginBottom: 40 },
    input: {
      height: 50,
      width: 300,
      borderBottomWidth: 1,
      borderBottomColor: '#0b090a',
      fontSize: 18,
      marginVertical: 5,
    },
    button: {
      marginTop: 40,
      backgroundColor: '#0b090a',
      height: 50,
      width: 300,
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