import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class Menu extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: "Menu",
      headerStyle: {
        backgroundColor: "blue", 
      },
      headerTintColor: "white",
      headerTitleStyle: {  
        fontWeight: "bold",
        fontSize: 60 
      }, 
    }
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text> Sono Menu </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})