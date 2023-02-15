import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Cart = (props) => {

    // 사용자가 입력한 url 파라미터를 가져와줌
    let {usernum} = useParams(); 

    //usernum과 같은 id를 가진 상품을 출력해야됨
    let 상품 = props.shoes.find(num => num.id==usernum) 


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
        if( isNaN(userInput)==true){
            console.log('숫자만 입력하셈')
        }
    }, [userInput])

    //탭변경
    let[tab,setTab] = useState(0);

    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>
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

    useEffect(()=>{
        setFade('end')
        return()=>{
            setFade('')
        }
    },[tab]) //tab state가 변경될때마다 실행

    if(tab==0){
        return <div className={'start '+ fade}>내용0</div> //문자 중간에 변수 넣는법 중괄호 안의 문자열에 +, 띄어쓰기 유의
    }else if(tab==1){
        return <div>내용1</div>
    }else if(tab==2){
        return <div>내용2</div>
    }
}

export default Cart