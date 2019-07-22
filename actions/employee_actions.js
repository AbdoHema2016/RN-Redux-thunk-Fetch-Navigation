import {EMPLOYEES} from './types'

export const EmployeeFetch = () => async dispatch => {
    let employees = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    let res = await employees.json()
    //console.log(res)
     dispatch({type:EMPLOYEES,payload:res})
   //goFetch(dispatch)
}
const goFetch = async dispatch =>{

    let employees = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    let res = await employees.json()
   // console.log(employees)
    dispatch({type:EMPLOYEE,payload:responseJson})
}