import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";


import MapPreview from "./MapPreview.js";
import { COLORS } from "../constants/colors.js";

const LocationSelector = ({ onLocation, mapLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    } 
  }, [mapLocation]);

  const verifyPermissons = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la localizacion para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissons();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handlePickOnMap = async () => {
    const isLocationOk = await verifyPermissons();
    if (!isLocationOk) return;

    navigation.navigate("Map");
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}> Ubicación en proceso...</Text>
      </MapPreview>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleGetLocation} style={styles.button}>
        <Text style={styles.text}> Obtener Ubicación</Text>
        </TouchableOpacity>
        {/* <Button
          title="Elegir del Mapa"
          color={COLORS.three}
          onPress={handlePickOnMap}
        /> */}
      </View>
    </View>
  );
};

export default LocationSelector;

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
  actions: {
    flexDirection: "row",
    justifyContent: "center"
  },
  text:{
    textAlign:"center",
    fontSize:18,
    color:COLORS.secundary,
  },
  button:{
    width:"70%",
    backgroundColor:COLORS.three,
    borderRadius: 10,
    padding: 10,
  }
});
