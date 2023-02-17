import { configureStore, createSlice } from '@reduxjs/toolkit'

//useState랑 비슷
let user = createSlice({
    name:'user',
    initialState:'kim'
})

let stock = createSlice({
    name:'stock',
    initialState:[10,11,12]
})

export default configureStore({
    //state 등록
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
    
  }
}) 