import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
import { COLORS } from '../constants/colors'


const ProductDetailsScreen = () => {
  const dispatch = useDispatch()

  const product = useSelector((state) => state.products.selected)

  const handleAddItemCart = () => {
    dispatch(addItem(product))
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{product.name}</Text>
        <Image source={product.img} style={styles.imagen} />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}> Precio: ${product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.text}>AGREGAR AL CARIITO</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"white"
  },
  title: {
    fontSize: 30,
    fontFamily: "PermanentMarker",
    color:COLORS.secundary,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    margin:10,
    fontSize: 20,
    color:COLORS.secundary,
  },
  price: {
    fontSize: 25,
    color:COLORS.secundary,
  },
  button: {
    marginTop: 25,
    backgroundColor:COLORS.three,
    borderRadius: 10,
    padding: 10,
  },
  imagen:{
    width:300,
    height:300,
    margin:20,
    borderRadius:10,
  },
  text: {
    fontSize: 18,
    padding: 8,
    color:COLORS.secundary
  }

})