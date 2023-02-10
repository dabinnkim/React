import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import '../App.css';

const Cart = (props) => {

    // 사용자가 입력한 url 파라미터를 가져와줌
    let {usernum} = useParams(); 

    //usernum과 같은 id를 가진 상품을 출력해야됨
    let 상품 = props.shoes.find(num => num.id==usernum) 


    let[count,setCount] = useState(0)

    let [alert,setAlert] = useState(true)

    useEffect(()=>{
        let a = setTimeout(()=>{setAlert(false)},2000) //2초 후에 코드 실행
        console.log(2)
        return()=>{
            console.log(1)
            clearTimeout(a)
        }
    })
    
    
    let [userInput,setUserInput] = useState("") //사용자 인풋값

    return (
        <div className="container">
            {
                alert==true? <div className='alert alert-warning'>2초 후에 사라지는 창</div> : null
            }
            
            {count}
            <button className="btn btn-danger" onClick={()=>{setCount(count+1)}}>좋아요</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(Number(usernum)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    {
                        isNaN(userInput)==true? <div className="alert" style={{backgroundColor:"red"}}>경고창 숫자만 쓰시오</div> : null
                    }
                    {/* 숫자말고 다른거 입력하면 경고창*/}

                    <input type='text' onChange={(e)=>{setUserInput(e.target.value)}}></input>
                    <h4 className="pt-5">{상품.title}</h4>
                    <p>{상품.content}</p>
                    <p>{상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Cart