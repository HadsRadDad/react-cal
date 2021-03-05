import React from 'react'
import Card from './Card'

const Cards = ({events, currentWorkingDate}) => {

    const calDate = new Date(currentWorkingDate.currentWDate)
    calDate.setHours(0, 0, 0, 0)
    calDate.setDate(1)

    const dateRenderArray = events.filter((item) => {
        return new Date(item.date).setDate(1) === new Date(calDate).setDate(1)
    })

    const eventsToDisplay = () => {}


    return (
        <div className="card-container">
            {
            dateRenderArray.map((event, i) => (
                <Card key={
                        event.id
                    }
                    event={event}
                    index={i}/>
            ))
        } </div>
    )
}
export default Cards;
