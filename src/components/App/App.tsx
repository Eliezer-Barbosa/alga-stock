import React, { useState } from 'react';
import Header from '../Header';
import Button from '../../shared/Button'
import './App.css';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import { setSyntheticTrailingComments } from 'typescript';

/**
 * component created to demonstrate
 * how to pass a component as prop
 */
function TestComponent () {
  return <img width='30px' src="https://images.macrumors.com/t/5-2nCNbY-U3lZFgBOFUw0yLFzus=/400x0/filters:quality(90)/article-new/2017/11/crying-tears-of-joy-emoji-250x248.jpg?lossy" alt="emoji"/>
}

function App() {
  const [street, setStreet] = useState('')
  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <Container>
        <Button
          // content="content is ME" 
          onClick={() => window.alert('ola')} // function as prop
          appendIcon={<TestComponent />} // component as prop
        >
          {/* everything inside the component is its children. */}
          <p>CHILDREN</p>
          <p>ALSO CHILDREN</p>
          <TestComponent /> {/* component is children here */}
        </Button>
        <Input 
          label="street"
          placeholder="5th Avenue"
          value={street}
          onChange={e => setStreet(e.target.value) }
        />
      </Container>
      
    </div>
  );
}

export default App;
