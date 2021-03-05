import React from 'react'

const Card = ({event, index}) => {


    // const handleClass = (event) => {
    //     if (event.eventTitle === 'Airport') {
    //         console(event.eventTitle === 'Airport')
    //         return 'blue-glow blue-bg'
    //     } else {
    //         return 'yellow-glow yellow-bg'
    //     }
    // }
    return (
        <div style={
                index === 0 ? {
                    marginTop: 0
                } : {}
            }
            className={
                event.eventTitle === 'Airport' ? "blue-glow blue-bg card" : event.eventTitle === 'Keyroom' ? "yellow-glow yellow-bg card " : event.eventTitle === 'Depart' ? 'pink-glow pink-bg card ' : "card"
        }>
            {}
            <h3>{
                event.eventTitle
            }</h3>
            <span className="card-date">
                {
                event.date
            }</span>
            <p>{
                event.info
            }</p>
        </div>
    )
}

export default Card;
