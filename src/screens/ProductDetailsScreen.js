import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'



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
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.button}>
          <Button title='Agregar al carrito' onPress={handleAddItemCart} />
        </View>
      </View>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "PermanentMarker"
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 20
  },
  price: {
    fontSize: 40,
    fontFamily: "PermanentMarker"
  },
  button: {
    marginTop: 15
  }

})