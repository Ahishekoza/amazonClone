import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemPresent = state.cart.find(item=> item.id === action.payload.id)
            if(itemPresent){
                itemPresent.quantity++
            }
            else{
                state.cart.push({...action.payload, quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            const itemPresent = state.cart.filter(item=> item.id !== action.payload.id)
            state.cart = itemPresent
        },
        incrementCart:(state,action)=>{
            const itemPresent = state.cart.find(item=> item.id === action.payload.id)
            itemPresent.quantity++
        },
        decrementCart:(state,action)=>{ 
            const itemPresent = state.cart.find(item=> item.id === action.payload.id)
            if(itemPresent.quantity ===1){
                itemPresent.quantity = 0 
                const removeItem = state.cart.filter(item=> item.id !== action.payload.id)
                state.cart = removeItem
            }
            else{
                itemPresent.quantity -- 
            }
        }
    }
})


export const {addToCart,removeFromCart,incrementCart,decrementCart} = cartSlice.actions

export default cartSlice.reducer