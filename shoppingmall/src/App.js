import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import data from './data';
import Main from './compo/Main';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Cart from './compo/Cart';
import About from './compo/About';
import Event from './compo/Event';
import Basket from './compo/Basket';
import axios from 'axios'
import {useQuery} from 'react-query'


function App() {
  
  let [shoes,setShoes] = useState(data);

  let navigate = useNavigate(); //페이지 이동

  useEffect(()=>{
    localStorage.setItem('watch',JSON.stringify([]))
},[])





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
          <Nav className="ms-auto">반가워요 kim</Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes}/>}/>
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




      
     




    </div>
  );
}

export default App;
