import React from 'react'
import './ClassComponent.css'

class ClassComponent extends React.Component {
    constructor(props : any) {
        super(props)
        console.log('constructor reached.')
    }
    state = {
        name: 'Mundo'
    }

    componentDidMount() {
        console.log('did mount reached.')
    }

    componentDidUpdate() {
        console.log('did update reached.')
    }

    render() {
        console.log('render reached.')
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