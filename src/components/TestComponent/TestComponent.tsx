import React, { useState } from 'react'
import './TestComponent.css'

function TestComponent (props: { name: string }) {
    const [age, setAge] = useState(33)
    return <div className="TestComponent">
        Test Component Works { props.name }! <br />
        <button onClick={() => {
            setAge(age - 1)
        }}>-</button>
        AGE: { age }
        <button onClick={() => {
            setAge(age + 1)
        }}>+</button>
    </div>
}

export default TestComponent