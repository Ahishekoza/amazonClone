import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './src/reducer/CartReducer'

export default configureStore({
    reducer:{
        cart:CartReducer
    }
})