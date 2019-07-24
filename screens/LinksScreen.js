import React,{Component} from 'react';
import { ScrollView, StyleSheet,FlatList,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
//import { FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import * as actions from '../actions'

class LinksScreen extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      item:this.props.navigation.state.params,
      dataSource:null
    }
  }
  //const {params} = this.props.navigation.state
  componentWillReceiveProps(){
    console.log(this.props.anyHero)
    this.setState({dataSource:this.props.anyHero})
  }
   componentDidMount(){
    this.props.HeroesFetch()
    
    //console.log(this.props.)
    //console.log("PROPS" + this.props.navigation.state);
    
    /*

    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(
      res => res.json()
    ).then(
      res=>{
        console.log("got it")
      }
    ).catch(error=>{
      console.log(error)
    })
    */

    //fetching using asyncwait
    

    /*
   try{
   let result = await fetch("http://importmarvel.com/api/characters?name=wolverine")
   let responseJson = await result.json()
   
  // let root = new JSONObject(responseJson.data)
   //let JSONArray = responseJson.data.getJSONArray("results")
   //let responseObject =  responseJson.data.results.getJSONObject(0)
   let results = responseJson.data.results
   results.map(({comics})=>{
     let items = comics.items
     items.map((name)=>{
       let names =  name.name
       this.setState({dataSource : names})
       //console.log(this.state.dataSource)
     })
   })
   /*
   for(const {items} in results){
     console.log(items)
   }
   */
   //console.log(results)
   //console.log("here"+responseObject)
   //}catch{
     //console.error(error)
   //} 

   //*/
 


  }

  
  render(){
    const {navigation}  = this.props
    const itemId = navigation.getParam('itemId');
    return (
      
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        
        <FlatList 
          style= {{flex:1}}
          data = {this.state.dataSource}
          renderItem = {({item})=><Text>{item}</Text>}
          keyExtractor={(item, index) => 'key'+index}
        />
        
        
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
function mapStateToProps({marvelReducer}){
  return {anyHero:marvelReducer.fetchedHeroes}
}
export default connect(mapStateToProps,actions)(LinksScreen)