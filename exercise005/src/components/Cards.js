import React, { useState } from 'react'
import "./Cards.css"
import Buttons from "./Buttons"

const Cards = (prob) => {

    let [cnt, setcnt] = useState(0)
    let [text, settext] = useState("MIN")

    let voteHandler = () => {
        if (cnt + 1 > 10) {
            alert('Cannot Vote more')
        }
        else {
            setcnt(cnt += 1)
            settext(cnt.toString())
            if (cnt === 10) {
                settext("MAX")
            }
        }
    }

    let unvoteHandler = () => {
        if (cnt - 1 < 0) {
            alert('Cannot Unvote')
        }
        else {
            setcnt(cnt -= 1)
            settext(cnt.toString())
            if (cnt === 0) {
                settext("MIN")
            }
        }

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
                <Buttons text="Click to Vote" callback={voteHandler} />
                <div> {text}</div>
                <Buttons text="Click to Unvote" callback={unvoteHandler} />
            </div>
        </div>
    )
}

export default Cards