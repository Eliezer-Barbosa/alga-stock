import React, { useState } from 'react';
import Header from '../Header';
import Button from '../../shared/Button'
import './App.css';
import Container from '../../shared/Container';
import Input from '../../shared/Input';

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
       <ul>
         {
           ['Daniel', 'William', 'Thiago', 'Daniel'].map((name, index) => {
             return <li key={index}>
               { `${name} ${index}` }
             </li>
           })
         }
       </ul>
      </Container>
      
    </div>
  );
}

export default App;
