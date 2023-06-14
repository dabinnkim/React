import {React, useState, memo} from 'react'
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increase } from '../store/basketSlice';
//store에서 state 변경함수 가져옴


//memo함수로 필요할때만 자식컴포 재렌더링
let Child = memo(function(){
    console.log('재렌더링됨')
    return <div>자식임</div>
})



const Basket = () => {


    //useSelector : store에 있는 state 전체 가져오기 
    let state = useSelector((state)=>state) //원하는 state만 가져올수도 있음
    console.log(state.basket)
    //useDispatch : store에 있는 state변경함수 가져오기
    let dispatch = useDispatch()

    let [count,setCount] = useState(0)

    const onClick =()=>{
        return setCount(count+1)
    }

    return (
        <>
        <div><Child count={count}></Child></div>
        <h6>{state.user}의 장바구니</h6>
        <button onClick={onClick}>증가버튼</button>
        <div>{count}</div>
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
                                        dispatch(increase(state.basket[i].id))
                                    }}>+</button>
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(removeItem(state.basket[i].id))
                                    }}>삭제</button>
                                </td>
                            </tr>
                        </tbody>               
               )
               
            }
        </Table>
        </>
    )
}

export default Basket
