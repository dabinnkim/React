import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './compo/Card';
import {Routes, Route, Link} from 'react-router-dom'
import Cart from './compo/Cart';



function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Cart</Link>           
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={<Card shoes={shoes}/>}/> {/* props로 state 자식컴포에 보내기 */}
        <Route path="/detail" element={<Cart/>} />
      </Routes>




      
     




    </div>
  );
}

export default App;
