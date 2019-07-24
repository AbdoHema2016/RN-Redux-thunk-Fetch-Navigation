import {HEROES} from './types'

export const HeroesFetch = () => async dispatch => {
    let result = await fetch("http://importmarvel.com/api/characters?name=wolverine")
    let responseJson = await result.json()
   
  
    let results = responseJson.data.results
    results.map(({comics})=>{
      let items = comics.items
      items.map((name)=>{
        let names =  name.name
       
           dispatch({type:HEROES,payload:names})
      })
    })
    
   //goFetch(dispatch)
}

