import '../../style/Card.scss'
import { useState } from 'react';



export default function Card(props) {

    return (
        <div className='card__container' id={props.selected === true ? 'cool' : null} >
            <div className={props.color} >
                <h1>{props.name}</h1>
                <h2>{props.price}</h2></div>
            <p className='card__speed'>{props.speed}</p>
            <p className='card__info'>{props.info}</p>




        </div >
    )
}

