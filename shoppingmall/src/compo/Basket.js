import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {setUser} from './../store'; //store에서 state 변경함수 가져옴
const Basket = () => {

    //useSelector : store에 있는 state 전체 가져오기 
    let state = useSelector((state)=>state) //원하는 state만 가져올수도 있음
    console.log(state.user)


   //store.js에 state변경함수 요청
   let dispatch = useDispatch()

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            {/* state에 저장된 갯수 만큼 코드 반복생성해주는 map 함수 */}
            {
                state.basket.map((a, i) =>              
                        <tbody>
                            <tr key={i}/* 반복문 쓸때 key 속성 추가하는게 좋음 */> {/* 행 */}
                                <td>#</td> {/* 열 */}
                                <td>{state.basket[i].name}</td>
                                <td>{state.basket[i].count}</td>
                                <td>{state.user}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(setUser())
                                    }}>+</button>
                                </td>
                            </tr>
                        </tbody>               
               )
               
            }
            
        </Table>
    )
}

export default Basket
