import React,{Component} from 'react';
import { ScrollView, StyleSheet,FlatList,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
//import { FlatList } from 'react-native-gesture-handler';

export default class LinksScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource:null
    }
  }
  async componentDidMount(){
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
   try{
   let result = await fetch("http://dummy.restapiexample.com/api/v1/employees")
   let responseJson = await result.json()
   this.setState({
     dataSource:responseJson
   })
   console.log(responseJson)
   }catch{
     //console.error(error)
   }

  }
  render(){
    
    return (
      
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        <FlatList 
          data = {this.state.dataSource}
          renderItem = {({item})=><Text>{item.employee_age}</Text>}
          keyExtractor = {(item)=>item.id}
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
