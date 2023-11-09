import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable, Image, Alert } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../components/CartCard'
import { decrementCart, incrementCart } from '../reducer/CartReducer'
import { useAuth } from '../context/AuthContext'

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)

    const totalPrice = cart?.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0)

    const handleQuantityDecrement = (item) => {
        dispatch(decrementCart(item))
    }

    const handleQuantityIncrement = (item) => {
        dispatch(incrementCart(item))
    }

    const { user } = useAuth()
    console.log(user)

    const handleCartConfirmation = () => {
        // TODO :- show a Modal and then on close of modal movie to Login Screen
        if (user?.name === '') {
            navigation.navigate('Login')
        }
        else {

            navigation.navigate('Confirmation')
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>Subtotal :  <Text style={{ color: 'black' }}>₹{Math.round(totalPrice)}</Text> </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 600 }}>EMI details avaliable </Text>
                {/* TODO Show message when you proceed without having any item in the cart */}
                <Pressable onPress={handleCartConfirmation} style={{ marginTop: 15, backgroundColor: '#FFC72C', padding: 10, borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 500 }}>Proceed to Buy ({cart.length}) items</Text>
                </Pressable>
            </View>

            <View style={{ height: 1, borderWidth: 1, borderColor: '#D0D0D0', marginTop: 10 }}></View>

            <View>
                {
                    cart?.map((item, index) => {
                        return (
                            <CartCard item={item} key={index} handleQuantityDecrement={() => handleQuantityDecrement(item)} handleQuantityIncrement={() => handleQuantityIncrement(item)} />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})