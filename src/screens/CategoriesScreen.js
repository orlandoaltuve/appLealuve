import {  FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { useSelector, useDispatch, connect } from 'react-redux'
import { selectedCategory } from '../store/actions/category.action'

const CategoriesScreen = ({navigation}) => {

  const categories= useSelector((state)=>state.categories.categories)
  const dispatch= useDispatch()

  const handleSelectedCategory = (item) =>{
    dispatch(selectedCategory(item.id))
    navigation.navigate('Product',{
      name: item.title,
    })
  }


const renderGridItem = ({item}) =>(
  <GridItem item={item} onSelected={handleSelectedCategory}/>
)

  return (
    
      <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      />
  )
}

export default connect() (CategoriesScreen)

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    
  }
})