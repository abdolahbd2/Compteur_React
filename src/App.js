import {Container, Button, Input, Col,Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import './App.css';


function handlw(eevent){
  console.log(eevent)

}

function App() {

const [count,setCount]=useState(0);

  useEffect(() => {
    if (count<0) {
      setCount(0)
    }
  },[count]
  
  );



  return (
    <Container className='container'>
  <Row>   
  <Col xs='2' xl='1' className='text-center'>
    <Button color='primary' onClick={()=>setCount(count+1)}>Plus</Button>
  </Col> 
  
  <Col xs='2' xl='1' className='text-center'>
    <Button color='secondary' onClick={()=>handlw(5)}>Plus</Button>
  </Col> 
  

  <Col xs='4'  >
  <Row>
    <Input className='text-center' value={count} onChange={()=>{}}></Input>
  </Row>
  <Row >
    <Col  className='text-center m-3'>
    <Button  color='success' onClick={()=>setCount(0)}>Reset</Button>
  </Col>
  </Row>
  </Col> 
  
  <Col xs='2' xl='1' className='text-center'>
    <Button  color='danger' onClick={()=>setCount(count-1)}>Moins</Button>
  </Col> 
  
  </Row>
         
    </Container>
   
  );
}



export default App;
