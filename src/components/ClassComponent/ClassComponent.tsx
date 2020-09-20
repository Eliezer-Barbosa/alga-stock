import React from 'react'
import './ClassComponent.css'

class ClassComponent extends React.Component {
    state = {
        name: 'Mundo'
    }

    render() {
        return <div className='ClassComponent'>
            <h5>I am a class based component!</h5>
            <p>name: { this.state.name }</p>
            <button onClick={() => {
                this.setState({ name: 'Barbosa'})
            }}>Click me!</button>
        </div>
    }
}

export default ClassComponent