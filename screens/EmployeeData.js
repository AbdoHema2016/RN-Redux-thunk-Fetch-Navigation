import React,{Component} from 'react';
import { ScrollView, StyleSheet,FlatList,Text,View } from 'react-native';
import { renderComponent } from 'recompose';


export default class EmployeeData extends Component{

    constructor(props){
        super(props)
        this.state= {
            Item:this.props.navigation.state.params.item
        }
      }

      render(){
          return(
              <View>
                  <Text>
                    {this.state.Item.id}
                  </Text>
              </View>
          )
      }
}