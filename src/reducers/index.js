import loggedReducer from '../reducers/isLogged'
import currentWorkingDate from '../reducers/calendar'
import {combineReducers} from 'redux'

const allReducers = combineReducers({myState: loggedReducer, calState: currentWorkingDate});

export default allReducers;
