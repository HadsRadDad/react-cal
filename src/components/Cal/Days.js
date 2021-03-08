import React, {useEffect, useState} from 'react'

const Days = ({dates, userInfo, setUserInfo, currentWorkingDate}) => {
    const cWorkingMonth = dates.currentWDate.getMonth();
    const cWorkingYear = dates.currentWDate.getFullYear();
    const daysInCMonth = dates.daysInCurrentWorkingMonth


    const date = new Date();

    const currentDay = date.toDateString()

    const dayArray = dates.daysInCurrentWMonth

    const [isPortrait, setisPortrait] = useState('')

    const buildCalendar = () => {
        let cal = document.querySelector('.calendar').clientWidth
        let w = document.querySelector('.days').clientWidth

        if (isPortrait) {
            document.querySelector('.days').style.gridAutoRows = `${w}px`
        } else {
            document.querySelector('.days').style.gridAutoRows = `${
                w / 8
            }px`
            document.querySelector('.days').style.gridTemplateColumns = `repeat(7,${
                cal / 8
            }px`

            document.querySelector('.days-of-week').style.gridTemplateColumns = `repeat(7,${
                cal / 8
            }px`
        }
    };


    useEffect(() => {
        setisPortrait(window.innerWidth < window.innerHeight)
        buildCalendar()

    }, [])

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
            window.addEventListener('orientationchange', () => {
                window.location.reload()
            })
        }
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
