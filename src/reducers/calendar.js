const date = new Date()

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

const currentWorkingDate = (state = {
    todaysDate: date,
    currentWDate: date,
    daysInCurrentWMonth: findDaysInMonth(date)
}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return state
        default:
            return state;
    }
}

export default currentWorkingDate
