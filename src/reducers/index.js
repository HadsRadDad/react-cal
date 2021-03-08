import loggedReducer from '../reducers/isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({myState: loggedReducer});

export default allReducers;
