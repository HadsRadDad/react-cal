import React, {useState, useEffect} from 'react'
import Calendar from './components/Cal/Calendar'
import Cards from './components/Cards/Cards'
import axios from 'axios'
import './styles/app.scss'


function App() {

    const recJSON = JSON.stringify({
        "_id": {
            "$oid": "603dbfefe08d204850dace9c"
        },
        "requesteddates": [],
        "eventdates": [
            {
                id: 54654,
                date: "March 17, 2021",
                eventTitle: "Airport",
                info: "this is the information about the event"
            },
            {
                id: 54652,
                date: "March 19, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            },
            {
                id: 54653,
                date: "March 21, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            },
            {
                id: 54655,
                date: "March 23, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            }, {
                id: 54656,
                date: "March 24, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            }, {
                id: 54657,
                date: "March 28, 2021",
                eventTitle: "Airport",
                info: "this is the information about the event"
            }, {
                id: 54658,
                date: "March 30, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            }, {
                id: 54659,
                date: "April 1, 2021",
                eventTitle: "Airport",
                info: "this is the information about the event"
            }, {
                id: 54660,
                date: "April 7, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            }, {
                id: 54661,
                date: "April 11, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            }, {
                id: 54662,
                date: "April 21, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            }, {
                id: 54663,
                date: "May 2, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            }, {
                id: 54664,
                date: "May 12, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            }, {
                id: 54665,
                date: "May 18, 2021",
                eventTitle: "Airport",
                info: "this is the information about the event"
            }, {
                id: 54666,
                date: "May 30, 2021",
                eventTitle: "Depart",
                info: "this is the information about the event"
            }, {
                id: 54667,
                date: "June 1, 2021",
                eventTitle: "Airport",
                info: "this is the information about the event"
            }, {
                id: 54668,
                date: "June 7, 2021",
                eventTitle: "Keyroom",
                info: "this is the information about the event"
            }
        ],
        "email": "EIATH@AJOIFJ.COM",
        "firstname": "Rick",
        "lastname": "Pickle",
        "admin": true,
        "createdAt": {
            "$date": {
                "$numberLong": "1614659567468"
            }
        },
        "updatedAt": {
            "$date": {
                "$numberLong": "1614659567468"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    })

    // put it here!

    const userObj = JSON.parse(recJSON)
    const [userInfo, setUserInfo] = useState(userObj)

    // moved next 3 const from cal component
    const date = new Date()
    // cal number of days in initial month
    const findDaysInMonth = (d) => {
        let i = 1;
        let lastDay;
        lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        let daysInMonth = [];
        while (i <= lastDay) {
            daysInMonth.push({id: new Date().setDate(i), day: i});
            i++;
        }
        return daysInMonth;
    };

    // initalize state using initial date data and set as current working data
    const [currentWorkingDate, setCurrentWorkingDate] = useState({todaysDate: date, currentWDate: date, daysInCurrentWMonth: findDaysInMonth(date)});


    return (
        <div className="App">
            {/* <div className="modal"></div> */}
            <Calendar setUserInfo={setUserInfo}
                userInfo={userInfo}
                currentWorkingDate={currentWorkingDate}
                setCurrentWorkingDate={setCurrentWorkingDate}/>
            <div className="button-container">
                <button className="request" id="request">Request Selected Days</button>
            </div>
            <Cards events={
                    userInfo.eventdates
                }
                currentWorkingDate={currentWorkingDate}/>
        </div>
    );
}

export default App;
