import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'


function App() {


  let [shose,setShose] = useState();


  return (
    <div className="App">
      {data}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes4.jpg"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes7.jpg"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </div>
     




    </div>
  );
}

export default App;
