import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import * as Sharing from 'expo-sharing';

export default function Galeria() {
  const [imseleccionada, setImagen] = useState(null);

  let abrirgaleria = async () => {
    let permisoResultado =
      await ImagePicker.requestMediaLibraryPermissionsAsync;
    if (permisoResultado.granted == false) {
      alert("Se necesitan permisos");
      return;
    }

    const imagen = await ImagePicker.launchImageLibraryAsync();
    if (imagen.cancelled == true) {
      return;
    }
    setImagen({ localUri: imagen.uri });
  };

  let compartirImagen = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `The image share is available for sharing at: ${imseleccionada.remoteUri}`
      );
      return;
    }

    await Sharing.shareAsync(imseleccionada.localUri);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GALERIA</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            imseleccionada !== null
              ? imseleccionada.localUri
              : "https://cdn-icons-png.flaticon.com/512/3342/3342176.png",
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={abrirgaleria}>
          <Text style={styles.textButton}>Galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={compartirImagen}>
            <Text style={styles.textButton}>Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 300, 
    height: 300,
    marginBottom: 40
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0b090a',
    height: 50,
    width: 150,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});