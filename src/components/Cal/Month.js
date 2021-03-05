import React from 'react'

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

const Month = ({month, year})=>{
    return (
        <div className="date">
            <h1>{months[month]}</h1>
            <h3>{year}</h3>
        </div>
    )
}

export default Month
