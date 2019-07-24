import {HEROES} from  '../actions/types'
const IntialState = {
    results:[],
    employeed:[]
}
export default function(state={},action){
    switch(action.type){
        case HEROES:
            return {...state,fetchedHeroes:action.payload}
            default:
                return state
    }
}