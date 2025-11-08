import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            const removeItemIndex=state.items.findIndex((item)=>
                item.id===action.payload.id
            )
            if(removeItemIndex!==-1){
            state.items.splice(removeItemIndex,1)
            }
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer