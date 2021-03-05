import React from 'react'

const Days = ({dates, userInfo, setUserInfo, currentWorkingDate}) => {
    const cWorkingMonth = dates.currentWDate.getMonth();
    const cWorkingYear = dates.currentWDate.getFullYear();
    const daysInCMonth = dates.daysInCurrentWorkingMonth


    const date = new Date();

    const currentDay = date.toDateString()

    const dayArray = dates.daysInCurrentWMonth

    // returns date string using a day permeter and the current working month and year from state
    const getDayValue = (d) => {
        let dayValue = new Date()
        dayValue.setMonth(cWorkingMonth)
        dayValue.setFullYear(cWorkingYear)
        dayValue.setDate(d)
        return dayValue.toDateString()
    }

    const eventCheck = (d) => {
        const checkDate = getDayValue(d)
        return userInfo.eventdates.some(item => checkDate === new Date(item.date).toDateString())
    }

    let eventCheck2 = (d) => {
        const checkDate = getDayValue(d)
        const checked = userInfo.eventdates.some(item => checkDate === new Date(item.date).toDateString())
        if (checked) {
            return userInfo.eventdates.filter((item) => {
                return new Date(item.date).toDateString() === checkDate
            })[0].eventTitle
        }
    }

    return (
        <div className="days">
            {
            dayArray.map((day) => {
                if (getDayValue(day.day) === currentDay) {
                    return <div className="today"
                        key={
                            day.id
                    }><input type="hidden"
                            value={
                                getDayValue(day.day)
                            }/>{
                        day.day
                    }</div>
            }
            return <div className={
                    `day ${
                        eventCheck2(day.day) === 'Airport' ? 'blue-bg' : eventCheck2(day.day) === 'Keyroom' ? 'yellow-bg' : eventCheck2(day.day) === "Depart" ? 'pink-bg' : ''
                    }`
                }
                key={
                    day.id
            }><input type="hidden"
                    value={
                        day.id
                    }/>{
                day.day
            }</div>

    })
        } </div>
    )
}

export default Days;
