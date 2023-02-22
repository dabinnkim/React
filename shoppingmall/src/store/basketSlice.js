import { createSlice } from '@reduxjs/toolkit'

let basket = createSlice({
    name:'basket',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
        increase(state){
            state[0].count += 1           
        }
    }
})

export let {increase} = basket.actions
export default basket