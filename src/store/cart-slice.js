import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{ cartItems : [],totalQuantity:0},
    reducers:{
        addItems(state,action){
            const newItem =action.payload ;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if(!existingItem)
            {
                state.cartItems.push({id : newItem.id, price: newItem.price,quantity:1, totalPrice:newItem.price,name: newItem.title });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            
        },
        removeItems(state,action){

        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;