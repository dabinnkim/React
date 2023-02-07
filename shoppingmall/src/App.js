import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './compo/Card';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Cart from './compo/Cart';
import About from './compo/About';
import Event from './compo/Event';



function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate(); //페이지 이동

  return (
    <div className="App">

    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/event')}}>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>       
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>   
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={<Card shoes={shoes}/>}/>
        <Route path="/cart/:id" element={<Cart shoes={shoes} setShoes={setShoes}/>}></Route>
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
