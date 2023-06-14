import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, lazy, Suspense } from 'react';
import data from './data';
import Main from './compo/Main';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
// import Cart from './compo/Cart';
import About from './compo/About';
import Event from './compo/Event';
import Basket from './compo/Basket';
import axios from 'axios'
import {useQuery} from 'react-query'

//lazy함수로 import
const Cart = lazy(()=>import('./compo/Cart.js'));

function App() {
  
  let [shoes,setShoes] = useState(data); //state에 담을 데이터 너무 커서 파일 따로 만들음
  let navigate = useNavigate(); //페이지 이동

  useEffect(()=>{
    localStorage.setItem('watch',JSON.stringify([]))
},[])


//react-query로 실시간 데이터 요청
let result = useQuery('작명',()=>{
  return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>a.data)
})

// console.log(result.data) //ajax 요청이 성공했을때 가져오는 데이터 들어있음
// console.log(result.isLoading) //ajax요청이 로딩중일때 true, 로딩중 아닐때 false
// console.log(result.error) // ajax 요청이 실패했을때


  return (
    <div className="App">    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>       
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>   
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>   
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>   
            <Nav.Link onClick={()=>{navigate('/basket')}}>장바구니</Nav.Link> 
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중입니다.</div>}>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes}/>}/> {/* 각컴포넌트에서 받아야할 shoes state props로 보냄 */}
        <Route path="/cart/:usernum" element={<Cart shoes={shoes} setShoes={setShoes} />}></Route>
        <Route path="/basket" element={<Basket/>}></Route>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>} /> {/* memeber == /about/member */}
          <Route path="location" element={<dib>위치정보임</dib>} />
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>       
      </Routes>
      </Suspense>




      
     




    </div>
  );
}

export default App;
