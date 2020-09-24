import React from 'react';
import Header from '../Header';
import Button from '../Button'
import './App.css';

/**
 * component created to demonstrate
 * how to pass a component as prop
 */
function TestComponent () {
  return <img width='30px' src="https://images.macrumors.com/t/5-2nCNbY-U3lZFgBOFUw0yLFzus=/400x0/filters:quality(90)/article-new/2017/11/crying-tears-of-joy-emoji-250x248.jpg?lossy" alt="emoji"/>
}

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <div className="Container">
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
      </div>
    </div>
  );
}

export default App;
