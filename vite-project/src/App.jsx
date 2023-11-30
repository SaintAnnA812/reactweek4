import { useState } from 'react'
import '../src/style/App.scss'
import Card from './Components/Card/Card'

const int = [
  {
    name: "Безлимитный 300",
    price: "руб 300/мес",
    speed: "до 10 Мбит/сек",
    info: "Объём включённого трафика не ограничен",
    color: "auqa"

  },
  {
    name: "Безлимитный 450",
    price: "руб 450/мес",
    speed: "до 50 Мбит/сек",
    info: "Объём включённого трафика не ограничен",
    color: "green"

  },
  {
    name: "Безлимитный 550",
    price: "руб 550/мес",
    speed: "до 100 Мбит/сек",
    info: "Объём включённого трафика не ограничен",
    color: "red"

  },
  {
    name: "Безлимитный 1000",
    price: "руб 1000/мес",
    speed: "до 200 Мбит/сек",
    info: "Объём включённого трафика не ограничен",
    color: "black"

  }
];

function App() {


  return (
    <>
      <div className='container'>
        {int.map((item, index) => (<Card {...item} key={index} />
        ))}


      </div>
    </>
  )
}

export default App



