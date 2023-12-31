import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
        name : "Carts",
        initialState : {
            value : []
        },
        reducers : {
            AddItem : (state,action)=>
            {
                var ob = action.payload;
                ob.qty = 1;
                state.value = [...state.value,ob]
              },
            RemoveItem : (state,action)=>
            {
               var ob = action.payload;
               state.value = state.value.filter(ct=>ct.id!==ob.id);
             },
            IncrementQty : (state,action)=>{
                var pid = action.payload;
                state.value = state.value.map(ob=>ob.id==pid ? {...ob,qty:ob.qty+1} : ob)
            },
            DecerementQty : (state,action)=>{
                var pid = action.payload;
                state.value = state.value.map(ob=>ob.id==pid && ob.qty>1 ?{...ob,qty: ob.qty-1} : ob)
            },
            EmptyCard : (state,action)=>{
                state.value = [];
            }
        }
});
export const {AddItem,RemoveItem,IncrementQty,DecerementQty,EmptyCard} = slice.actions;
export default slice.reducer;