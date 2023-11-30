import '../../style/Card.scss'
import { useState } from 'react';



export default function Card(props) {
    const [selected, setSelected] = useState(false);

    function onSelect() {
        setSelected(!selected)
    }


    return (
        <div onClick={onSelect} className='card__container' id={selected ? 'cool' : null} >
            <div className={props.color} >
                <h1>{props.name}</h1>
                <h2>{props.price}</h2></div>
            <p className='card__speed'>{props.speed}</p>
            <p className='card__info'>{props.info}</p>




        </div >
    )
}

