import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../constants/colors";

import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";


const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => {
  return (
    
      <PlaceStack.Navigator
        initialRouteName="Direcciones"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.primary : "",
          },
          headerTintColor:
            Platform.OS === "android" ? COLORS.secundary : "",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <PlaceStack.Screen
          name="Direcciones"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Mis direcciones de entrega",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="md-add"
                  color={
                    Platform.OS === "android" ? COLORS.secundary : ""
                  }
                  size={23}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <PlaceStack.Screen
          name="Detalle"
          component={PlaceDetailScreen}
          options={{ title: "Detalle direccion" }}
        />
        <PlaceStack.Screen
          name="Nuevo"
          component={NewPlaceScreen}
          options={{ title: "Nueva direccion" }}
        />
        <PlaceStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Mapa" }}
        />
      </PlaceStack.Navigator>
  );
};

export default PlaceNavigator;
