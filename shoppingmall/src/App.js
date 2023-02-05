import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Shoes from './compo/Shoes';



function App() {

  let [shoes] = useState(data);



  return (
    <div className="App">
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
      <Row>
        <Shoes shoes={shoes}/> {/* props로 state 자식컴포에 보내기 */}
      </Row>
      
     




    </div>
  );
}

export default App;
