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


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {
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
        component={HomeScreen}
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
        component={HomeScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: { color: '#008597' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ShoppingCartIcon size={24} color="#008E97" />
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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Main' component={BottomTabs} />
          <Stack.Screen name='ProductDetails' component={ProductDetailScreen} />
          <Stack.Screen name='AddAddress' component={AddAddressScreen}/>
          <Stack.Screen name='Address' component={AddressScreen} />
        </Stack.Navigator>
        <ModalPortal />
      </NavigationContainer>
    </Provider>
  );
}



export default App;
