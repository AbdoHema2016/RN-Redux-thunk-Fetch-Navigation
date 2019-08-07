# RN-Redux-thunk-Fetch-Navigation
Step 1. yarn add react-redux redux redux-thunk
Step 2. create store,reducers,actions folders
Step 3. create index file for each
Step 4. create store and import reducers
              import {createStore,compose,applyMiddleware} from 'redux'
              import thunk from 'redux-thunk'
              import reducers from '../reducers'
              const store =  createStore(
                  reducers,
                  {},
                  compose(
                      applyMiddleware(thunk)
                  )
              )
              export default store;
Step 5.  create reducers and import reducer files
                import {combineReducers} from 'redux'
                import employeeReducer from './employeeReducer'
                export default combineReducers({
                    employeeReducer
                })
                
Step 6. create reducer and import action types
               import {EMPLOYEES} from  '../actions/types'
                export default function(state={},action){
                    switch(action.type){
                        case EMPLOYEES:
                            return {...state,fetchedEmployees:action.payload}
                            default:
                                return state
                    }
                }
Step 7. create actions for each reducer
                import {EMPLOYEES} from './types'

                export const EmployeeFetch = () => async dispatch => {
                    let employees = await fetch("http://dummy.restapiexample.com/api/v1/employees")
                    let res = await employees.json()
                    //console.log(res)
                     dispatch({type:EMPLOYEES,payload:res})
                   //goFetch(dispatch)
                }
               
Step 8. create types file 
                export const   EMPLOYEES = 'employees'
                
Step 9. imports for app.js and adding provider
                import {Provider} from 'react-redux'
                import store from './store'
                
                return (
                  <Provider store={store}>
                    <View>
                      
                    </View>
                  </Provider>
                );
Step 10. Restart the packager         
