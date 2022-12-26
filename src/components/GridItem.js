import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const GridItem = ({item, onSelected}) => {
  return (
    <View style={styles.gridIdtem}>
      <TouchableOpacity style={{...styles.container}}
      onPress={() => onSelected(item)}
      >
        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridIdtem:{
        flex:1,
        borderRadius:6,
        margin:15,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:6,
        backgroundColor:COLORS.three,
        elevation:3,
        justifyContent:"center",
        alignItems:"center",
        padding: 8,
    },
    title:{
      fontFamily:"PermanentMarker",
      fontSize:20,
      color:COLORS.secundary  
    }
})