import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
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
                <Image source={item.img} style={styles.imagen} />
            </View>

        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:"white",
        
    },
    productItem:{
        alignItems:'center',
        padding:20,
        margin:10,
        borderRadius:10,
        backgroundColor:COLORS.three,
        width:300,
        
        
    },
    title:{
        fontSize:20,
        fontFamily:"PermanentMarker",
        color:COLORS.secundary,
        textAlign:'center'
    },
    imagen:{
        width:220,
        height:220,
        margin:10,
        borderRadius:10,
    }
})