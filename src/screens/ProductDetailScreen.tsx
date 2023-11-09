import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { ShareIcon,HeartIcon,MapPinIcon } from 'react-native-heroicons/outline'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart } from '../reducer/CartReducer'
import { Modal, ModalContent } from 'react-native-modals';

const ProductDetailScreen = ({ route ,navigation }) => {
    const { item } = route.params
    const { width } = Dimensions.get('window')
    const height = (width * 100) / 100
    
    const [like,setLike] = useState()
    const [modalVisible,setModelVisible] = useState(false)
    
    
    const dispatch = useDispatch()
    const handleAddToCart=(item)=>{
        setModelVisible(true)
        dispatch(addToCart(item))
    }

    const cart = useSelector((state)=> state.cart.cart)

    return (
        <>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <Header />

            {/*  Carousel Images */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    item?.carouselImages?.map((image, index) => {
                        return (
                            <ImageBackground style={{ width, height, marginTop: 25 }} source={{ uri: image }} key={index}>

                                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ width: 50, height: 50, backgroundColor: '#C60C30', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>20% Off</Text>
                                    </View>

                                    <View style={{ width: 50, height: 50, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                        <ShareIcon size={24} color={'black'} />
                                    </View>
                                </View>

                                {/* TODO add Product to favourite  */}
                                <Pressable onPress={()=>setLike(true)} style={{ width: 50, height: 50, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderRadius: 25 ,marginTop:'auto',marginBottom:20,marginLeft:10 }}>
                                    <HeartIcon size={24} color={ like ? 'red' :'black'} />
                                </Pressable>

                            </ImageBackground>
                        )
                    })
                }
            </ScrollView>

            <View style={{padding:10}}>
                <Text style={{fontSize:15,fontWeight:500}}>{item?.title}</Text>
                <Text style={{fontSize:18,marginTop:6,fontWeight:600}}>₹{item?.price}</Text>
            </View>

            <View style={{height:1,borderColor:'#D0D0D0',borderWidth:1}}>
            </View>

             <View style={{padding:10}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Color: {item?.color}</Text>
                <Text style={{fontSize:18,fontWeight:'bold',marginTop:10}}>Size: {item?.size}</Text>
             </View>

             <View style={{height:1,borderColor:'#D0D0D0',borderWidth:1}}>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontSize:15,fontWeight:'500',marginVertical:5}}>Total : {item?.price}</Text>
                <Text style={{color:'#00CED1',fontSize:16}}>FREE Delivery Tomorrow by 3 PM.Order within 10hrs</Text>

                <View style={{marginTop:5,flexDirection:'row',alignItems:'center',columnGap:5}}>
                    <MapPinIcon size={24} color={'black'}/>
                    <Text style={{fontSize:16,fontWeight:'500'}}>Deliver to Abhishek - Pune 401109</Text>
                </View>
            </View>

            <Pressable style={{
                backgroundColor:'#FFC72C',
                marginHorizontal:10,
                padding:10,
                marginVertical:10,
                borderRadius:20
            }}
            onPress={()=>handleAddToCart(item)}
            >
                <Text style={{textAlign:'center',fontSize:16,fontWeight:'600'}}>Add to Cart</Text>
            </Pressable>

            <Pressable style={{
                backgroundColor:'#FFAC1C',
                marginHorizontal:10,
                padding:10,
                marginVertical:10,
                borderRadius:20
            }}>
                <Text style={{textAlign:'center',fontSize:16,fontWeight:'600'}}>Buy Now</Text>
            </Pressable>

        </ScrollView>
        
        <Modal visible={modalVisible} onTouchOutside={()=>setModelVisible(!modalVisible)}>
            <ModalContent>
                <View style={{height:100,width:200,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Item added in the Cart </Text>
                    <Text style={{fontSize:16, color:'red',marginTop:5}}>Happy Shopping !</Text>
                </View>
                {/* TODO you can add the button if you want to close modal like that */}
            </ModalContent>
        </Modal>
        
        </>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})