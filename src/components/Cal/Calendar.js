import React, {useState} from "react";
import Month from "./Month";
import Days from "./Days";

const Calendar = ({setUserInfo, userInfo, currentWorkingDate, setCurrentWorkingDate}) => {
    const cWorkingMonth = currentWorkingDate.currentWDate.getMonth();
    const cWorkingYear = currentWorkingDate.currentWDate.getFullYear();
    const daysInCMonth = currentWorkingDate.daysInCurrentWorkingMonth

    // use current working month and current working year in state to return number of days in that working month
    const findDaysInNewMonth = (d) => {
        let i = 1;
        let lastDay;
        lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        let daysInMonth = [];
        while (i <= lastDay) {
            let dt = new Date();
            dt.setMonth(cWorkingMonth);
            dt.setFullYear(cWorkingYear);
            daysInMonth.push({id: dt.setDate(i), day: i});
            i++;
        }
        return daysInMonth;
    };


    // onclick handlers to progress current working calendar
    const handlePrevClick = () => {
        const prevDate = new Date(currentWorkingDate.currentWDate.setMonth(cWorkingMonth - 1))
        setCurrentWorkingDate({
            ...currentWorkingDate,
            currentWDate: prevDate,
            daysInCurrentWMonth: findDaysInNewMonth(prevDate)
        });
    };

    const handleNextClick = () => {
        const nextDate = new Date(currentWorkingDate.currentWDate.setMonth(cWorkingMonth + 1))
        setCurrentWorkingDate({
            ...currentWorkingDate,
            currentWDate: nextDate,
            daysInCurrentWMonth: findDaysInNewMonth(nextDate)
        });
    };

    const handleDateClick = () => {
        setUserInfo({
            ...userInfo,
            requesteddates: [...currentWorkingDate.daysInCurrentWMonth]
        });
        console.log(userInfo);
    };

    return (
        <div className='calendar'>
            <div className='month'>
                <p style={
                    {
                        width: "100%",
                        marginTop: "1.5%"
                    }
                }>
                    {
                    new Date().toDateString()
                } </p>
                <i className='fas fa-angle-left prev'
                    onClick={handlePrevClick}></i>
                <Month month={cWorkingMonth}
                    year={cWorkingYear}/>
                <i className='fas fa-angle-right next'
                    onClick={handleNextClick}></i>
            </div>
            <div className='days-of-week'>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <Days dates={currentWorkingDate}
                userInfo={userInfo}
                setUserInfo={setUserInfo}/> {/* passes total days in working month to the Days component */}
            {" "} </div>
    );
};

export default Calendar;
