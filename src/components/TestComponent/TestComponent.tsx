import React, { useState } from 'react'
import './TestComponent.css'

function TestComponent (props: { name: string }) {
    const [age, setAge] = useState(33)
    const [year, setYear] = useState(2020-age)
    return <div className="TestComponent">
        Test Component Works { props.name }! <br />
        <button onClick={() => {
            setAge(age - 1)
            setYear(year + 1)
        }}>-</button>
        AGE: { age }
        <button onClick={() => {
            setAge(age + 1)
            setYear(year - 1)
        }}>+</button>
        <br /> YEAR: { year }
    </div>
}

export default TestComponent