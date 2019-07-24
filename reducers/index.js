import {combineReducers} from 'redux'
import employeeReducer from './employeesReducer'
import marvelReducer from './marvelReducer'
export default combineReducers({
    employeeReducer,marvelReducer
})