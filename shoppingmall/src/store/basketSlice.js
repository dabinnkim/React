import { createSlice } from '@reduxjs/toolkit'

let basket = createSlice({
    name:'basket',
    initialState:[
        {
        id : 0,
        name : 'White and Black',
        count : 2
        },

        {
        id : 1,
        name : 'Grey Yordan',
        count : 1
        }
      ],
    //변경함수
    reducers : {
        increase(state,action){
            //id가 payload와 같은 요소 찾기
            let num = state.findIndex((e)=>e.id === action.payload) //findIndex의 파라미터e는 state의 요소 하나하나
            state[num].count++
        },

        addItem(state,action){
            state.push(action.payload)
        },

        removeItem(state,action){
            let num = state.findIndex((e)=>e.id === action.payload)
            alert(action.payload)
            state.splice(num,1)
        }
    }
})

export let {increase, addItem, removeItem} = basket.actions //변경함수 
export default basket//slice 전체