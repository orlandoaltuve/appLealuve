import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'


import { useSelector,useDispatch, connect } from 'react-redux'
import { filteredProduct, selectProduct } from '../store/actions/product.action'


const CategoryProductScreen = ({navigation, route}) => {
  const dispatch= useDispatch()
  const categoryProducts=useSelector((state)=>state.products.filteredProduct)
  const category= useSelector((state)=>state.categories.selected)


   useEffect(() => {
    dispatch(filteredProduct(category.id));
  }, []);
  

  const handleSelectedCategory = (item) =>{
    dispatch(selectProduct(item.id))
    navigation.navigate('Details',{
      name: item.name,
    })
  }
  
  const renderProductItem = ({item}) =>(
    <ProductItem item={item} onSelected={handleSelectedCategory}/>
    )
    
  return (
    <FlatList
    style={styles.container}
    data={categoryProducts}
    keyExtractor={(item) => item.id}
    renderItem={renderProductItem}
    />
  )
}

export default connect() (CategoryProductScreen)

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    
  }
})