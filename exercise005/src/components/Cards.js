import React from 'react'
import "./Cards.css"

const Cards = (prob) => {

    let onclick = () => {
        prob.callback()
    }


    return (
        <div className="card">
            <div className="container">
                <div className="food-info">
                    <div className="type">{prob.food.title}</div>
                    <div className="name">{prob.food.name}</div>
                    <div className="info">{prob.food.info}</div>
                </div>

                <div className="image-container">
                    <img src={prob.food.img} alt=""></img>
                </div>
            </div>

            <div className='vote-container'>
                <button onClick={onclick}>Click to Vote</button>
                <div> MIN</div>
                <button>Click to Unvote</button>
            </div>
        </div>
    )
}

export default Cards