import { configureStore, createSlice } from '@reduxjs/toolkit'
import basket from './store/basketSlice'

//useState랑 비슷
let user = createSlice({
    name:'user', //이름
    initialState:'kim', //초기값
    reducers:{ //변경함수
        setUser(state){
            return 'join ' + state
        }
    }
})

 //만든 변경함수 export로 내보내기


//useState와 비슷
let stock = createSlice({ 
    name:'stock', //state 이름
    initialState:[10,11,12] //state 초기값
})





export default configureStore({
    //state 등록
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    basket : basket.reducer //바깥에 만들어둠
    
  }
}) 

export let {setUser} = user.actions
export let {increase} = basket.actions