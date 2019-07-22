/*import {combineReducers} from 'redux'
const Initial_State = {
    current : "dasda",
    possible:[
        'abdo',
        'ali'
    ]
}

const employeeReducer = (state = Initial_State,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    employees:employeeReducer
})
*/
import {EMPLOYEES} from  '../actions/types'
const IntialState = {
    results:[],
    employeed:[]
}
export default function(state={},action){
    switch(action.type){
        case EMPLOYEES:
            return {...state,fetchedEmployees:action.payload}
            default:
                return state
    }
}