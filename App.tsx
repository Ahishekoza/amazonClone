/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import { HomeIcon, UserIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { Provider } from 'react-redux';
import { ModalPortal } from 'react-native-modals';
import store from './store';
import AddressScreen from './src/screens/AddressScreen';
import AddAddressScreen from './src/screens/AddAddressScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { View } from 'react-native';
import { Text } from 'react-native-svg';
import {useSelector} from 'react-redux'
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import OrderScreen from './src/screens/OrderScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {

  const cart = useSelector((state)=> state.cart.cart)
  // console.log(cart.length)
  

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#008597' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIcon size={24} color="#008E97" />
            ) : (
              <HomeIcon size={24} color="black" />
            ),

        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { color: '#008597' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <UserIcon size={24} color="#008E97" />
            ) : (
              <UserIcon size={24} color="black" />
            ),

        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: { color: '#008597' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
             <View style={{position:'relative'}}>
              {/* <View style={{position:'absolute',width:10,height:10,borderRadius:5,backgroundColor:'red',right:0,top:-2}}>
                <Text >{cart.length}</Text>
              </View> */}
               <ShoppingCartIcon size={24} color="#008E97" />
             </View>
            ) : (
              <ShoppingCartIcon size={24} color="black" />
            ),

        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    // store here is the the store we created which have the value of cartReducer as cart  so we will use use
    // useSelector  to fetch the value of state and useDispatch to make any changes in the state
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Main' component={BottomTabs} />
          <Stack.Screen name='ProductDetails' component={ProductDetailScreen} />
          <Stack.Screen name='AddAddress' component={AddAddressScreen}/>
          <Stack.Screen name='Address' component={AddressScreen} />
          <Stack.Screen name='Confirmation' component={ConfirmationScreen}/>
          <Stack.Screen name='Order' component={OrderScreen}/>
        </Stack.Navigator>
        <ModalPortal />
      </NavigationContainer>
    </Provider>
  );
}



export default App;
