import { createSlice } from '@reduxjs/toolkit'

let basket = createSlice({
    name:'basket',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
        increase(state,action){
            //id가 payload와 같은 요소 찾기
            let 번호 = state.findIndex((e)=>e.id === action.payload) //findIndex의 파라미터는 state의 요소 하나하나
            state[번호].count++
        }
    }
})

export let {increase} = basket.actions //변경함수 
export default basket//slice 전체