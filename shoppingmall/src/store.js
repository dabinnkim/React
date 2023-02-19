import { configureStore, createSlice } from '@reduxjs/toolkit'

//useState랑 비슷
let user = createSlice({
    name:'user', //이름
    initialState:'kim', //초기값
    reducers:{
        setUser(state){
            return 'join ' + state
        }
    }
})

export let {setUser} = user.actions //state 변경함수들 남음


//useState와 비슷
let stock = createSlice({ 
    name:'stock', //state 이름
    initialState:[10,11,12] //state 초기값
})

let basket = createSlice({
    name:'basket',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})

export default configureStore({
    //state 등록
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    basket : basket.reducer
    
  }
}) 