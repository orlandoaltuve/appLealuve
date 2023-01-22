import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { addPlace } from "../store/actions/places.actions";
import { useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import { COLORS } from "../constants/colors";

const NewPlaceScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(route, "Nueva Direccion");
  }, [route]);

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title, image, location));
    navigation.navigate("Direcciones");
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
        <LocationSelector
          onLocation={setLocation}
          mapLocation={route?.params?.mapLocation}
        />

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.text}>Grabar direccion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll:{
    backgroundColor:"white"
  },
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: "PermanentMarker",
    color:COLORS.secundary,

  },
  input: {
    borderBottomColor: COLORS.secundary,
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  button:{
    marginTop:15,
    width:"100%",
    backgroundColor:COLORS.three,
    borderRadius: 10,
    padding: 10,
  },
  text:{
    textAlign: "center",
    fontSize: 18,
   
    color: COLORS.secundary
  }
});

export default NewPlaceScreen;
