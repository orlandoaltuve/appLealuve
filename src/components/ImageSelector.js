import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, Button, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../constants/colors";



const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text style={styles.text}>No hay imagen seleccionada...</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handlerTakeImage} style={styles.button}>
        <Text style={styles.text}> Tomar Foto</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.secundary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    padding: 8,
    color: COLORS.secundary
  },
  button: {
    alignItems: "center",
    width:"70%",
    backgroundColor: COLORS.three,
    borderRadius: 10,
  },
  buttonContainer:{
    alignItems:"center"
  }
});
