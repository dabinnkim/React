import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {addItem} from '../store'

const Cart = ({shoes}) => {

    let state = useSelector((state)=>state) //store의 state 가져와서 쓰겠다
    console.log(state)

    let dispatch = useDispatch()

    // 사용자가 입력한 url 파라미터를 가져와줌
    let {usernum} = useParams(); 

    //usernum과 같은 id를 가진 상품을 출력해야됨
    let 상품 = shoes.find(num => num.id==usernum) 


    let[count,setCount] = useState(0)

    let [alert,setAlert] = useState(true)

    useEffect(()=>{
        let timer = setTimeout(()=>{setAlert(false)},2000) //2초 후에 setAlert(false) 실행
        return()=>{
            clearTimeout(timer); //2초에 한번씩 setAlert(false) 코드 실행되므로 삭제해줘야함
        }
    },[])

    //사용자 input 값
    let [userInput,setUserInput] = useState("")

    //마운트 + [useInput] 변경될때만 실행 
    useEffect(()=>{
        if( isNaN(userInput)===true){
            console.log('숫자만 입력하셈')
        }
    }, [userInput])

    //탭변경
    let[tab,setTab] = useState(0);

    //cart 컴포넌트가 첫실행될때 애니메이션 효과
    let [cart,setCart] = useState('')

    useEffect(()=>{
        setTimeout(()=>{
            setCart('end')
        },100)
        return(
            setCart('')
        )
    },[])



    useEffect(()=>{
        let 꺼내기 = localStorage.getItem('watch')
        꺼내기 = JSON.parse(꺼내기)
        꺼내기.push(상품.id)
        꺼내기 = new Set(꺼내기)
        꺼내기 = Array.from(꺼내기)
        localStorage.setItem('watch',JSON.stringify(꺼내기))
    },[])

    return (
        <div className={`container start ${cart} `}>
            {
                alert && <div className='alert alert-warning'>2초 후에 사라지는 창</div>
            }
            
            {count}
            <button className="btn btn-danger" onClick={()=>{setCount(count+1)}}>좋아요</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(Number(usernum)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    {/* {
                        isNaN(userInput)==true? <div className="alert" style={{backgroundColor:"red"}}>경고창 숫자만 쓰시오</div> : null
                    } */}
                    {/* 숫자말고 다른거 입력하면 경고창*/}

                    <input type='text' onChange={(e)=>{setUserInput(e.target.value)}}></input>
                    <span>사용자가 인풋한 값:{userInput}</span>
                    <h4 className="pt-5">{상품.title}</h4>
                    <p>{상품.content}</p>
                    <p>{상품.price}</p>
                    {/* 주문하기 누르면 장바구니에 항목 추가시키기 */}
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem({id : Number(`${상품.id}`), name : `${상품.title}`, count : 1}))
                        console.log(state)
                    }}>주문하기</button>
                </div>
            </div>
            
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
                <TabContent tab={tab}/>
        </div>
    )
}

function TabContent({tab}){


    let [fade,setFade] = useState('')

    //tab state가 변경될때마다 실행
    useEffect(()=>{
        setTimeout(()=>{
            setFade('end')
        },300)
        return(
            setFade('')
        )
    },[tab])
    


    return (
        <div className={`start ${fade}`}> {/*className에 end가 붙으면 transition 적용*/}
            {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]} {/* [tab]으로 원하는 요소 인덱싱 */}
        </div>
    )
        
    
}

export default Cart