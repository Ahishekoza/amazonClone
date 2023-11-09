import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[],
        deliveryAddress:null,
        orderedFood:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            //  action.payload have the value of item added to the cart  state is the state we initalized above 
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
        },
        clearCart:(state, action)=>{
            state.cart=[]
        },
        addressforDelivery :(state,action)=>{
            state.deliveryAddress = action.payload
        },
        foodOrdered:(state,action)=>{
            console.log(state.orderedFood)
            state.orderedFood = action.payload
        }
        
    }
})


export const {addToCart,removeFromCart,incrementCart,decrementCart,addressforDelivery,foodOrdered,clearCart} = cartSlice.actions

export default cartSlice.reducer