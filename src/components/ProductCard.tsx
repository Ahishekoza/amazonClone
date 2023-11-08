import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../reducer/CartReducer'


const ProductCard = ({ item }) => {
    const dispatch =  useDispatch()
    const handleProductDetail=(item) => {
        dispatch(addToCart(item))
    }

    const cart = useSelector((state)=> state.cart.cart)

    return (
        <Pressable style={{marginHorizontal:20,marginVertical:25}}>
            <Image style={{width:150,height:150}} source={{uri:item.image}} />
            <Text numberOfLines={1} style={{width:150,marginTop:10,fontSize:16,color:'black'}}>{item?.title}</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:16,color:'black'}}>₹{item?.price}</Text>
                <Text style={{fontSize:16,color:'#FFC72C',fontWeight:'bold'}}>{item?.rating?.rate} ratings</Text>
            </View>

            <Pressable style={{marginTop:10,backgroundColor:'#FFC72C',padding:5,borderRadius:10}} onPress={()=>handleProductDetail(item)} >
                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold'}}>Add to Cart</Text>
            </Pressable>

        </Pressable>
    )
}

export default ProductCard

const styles = StyleSheet.create({})