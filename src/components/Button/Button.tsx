import React from 'react'
import './Button.css'

// PROPS
declare interface ButtonProps {
    content?: string // string type
    onClick?: () => void // function type
    appendIcon?: JSX.Element // component type
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
        className='AppButton'
        onClick={props.onClick}>
        {/* { props.content || 'Nameless button' } */}
        { props.content || props.children }
        { props.appendIcon }
    </button>
}

export default Button