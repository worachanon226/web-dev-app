import React from 'react'
import "./Buttons.css"

const Cards = (prob) => {

    let trigger = () => {
        prob.callback()
    }


    return (
        <button onClick={trigger}>{prob.text}</button>
    )
}

export default Cards