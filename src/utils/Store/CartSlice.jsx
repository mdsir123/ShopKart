import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      let data = action.payload;
      let objId = data.id;
      let obj = state.items.find((cartObj) => cartObj.objData.id === objId);
      if (!obj) {
        let cartObj = { objData: data, quantity: 1 };
        state.items.push(cartObj);
      } else {
        obj.quantity = obj.quantity + 1;
      }

      //   let cartObj = { objData: data, quantity: 1 };
      //   state.items.push(cartObj);
    },

    removeCart: (state, action) => {
      let id = action.payload;
      let objId = state.items.findIndex((cartObj) => cartObj.objData.id === id);
      if (objId !== -1) {
        state.items.splice(objId, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },

    incItem: (state, action) =>{
      let id = action.payload;
      let objId = state.items.findIndex((cartObj) => cartObj.objData.id === id)
      state.items[objId].quantity += 1
    },

    decItem: (state, action) =>{
      let id = action.payload;
      let objId = state.items.findIndex((cartObj) => cartObj.objData.id === id)
      if(state.items[objId].quantity > 1){
        state.items[objId].quantity -= 1
      }else{
        state.items.splice(objId, 1);
      }
    },

    priceAsc: (state, action) => {
      state.items.sort((a,b)=> a.objData.price - b.objData.price) 
    },

    priceDesc: (state, action) => {
      state.items.sort((a,b)=> b.objData.price - a.objData.price) 
    },
  },
});

export let { addCart, removeCart, clearCart, incItem, decItem, priceAsc, priceDesc } = cartSlice.actions;

export default cartSlice.reducer;
