import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants/colors";


const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: COLORS.secundary,
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color:COLORS.secundary,
    fontSize: 18,
    marginBottom: 6,
    fontFamily: "PermanentMarker",
  },
  address: {
    color:COLORS.secundary,
    fontSize: 16,
  },
});
