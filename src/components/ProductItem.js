import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={()=> onSelected(item)}>
            <View style={styles.productItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    productItem:{
        padding:20,
        margin:10,
        borderRadius:3,
        backgroundColor:COLORS.three
    },
    title:{
        fontSize:20,
        fontFamily:"PermanentMarker",
        color:COLORS.secundary
    },
    details:{
        fontSize:15,
        color:COLORS.secundary
    }
})