import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Foto({ route, navigation }) {
    const { photo } = route.params;
    
    return (
      <View style={stylesFoto.container}>
        <Image style={stylesFoto.imagePreview} source={{ uri: photo }} />
      </View>
    );
  }
  
  const stylesFoto = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagePreview: {
      width: '90%',
      height: '95%',
      borderRadius: 5,
    }
  });
  