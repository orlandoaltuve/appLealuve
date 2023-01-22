import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const formatDay = (time) => {
  const date = new Date(time)
  return date.toLocaleDateString()
}

const sumTotal = (list) =>
  list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0)


const OrderItem = ({ item }) => {


  return (
    <View style={styles.container}>
      <View style={styles.orden}>
        <Text style={styles.text}> Orden: {item.id} </Text>
        <Text style={styles.text}> Fecha: {formatDay(item.date)} </Text>
        <Text style={styles.text}> Total: {sumTotal(item.items)}</Text>
      </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  orden:{
    margin:10,
  },
  container:{
  },
  text:{
    color:COLORS.secundary
  }
})