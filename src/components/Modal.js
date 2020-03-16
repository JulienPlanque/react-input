import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <div className='Modal'
            style={{
                transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0'
            }}>
            <button onClick={props.cache}>X</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident, blanditiis quasi vel labore culpa numquam sapiente magnam laboriosam modi earum eveniet ipsam.
            Ullam quidem quia accusantium necessitatibus voluptatum, corrupti blanditiis?</p>
        </div>
    )
}
