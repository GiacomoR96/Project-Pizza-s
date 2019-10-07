import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Carrello extends React.Component{

  static navigationOptions = ({navigation}) => {
    return {
      title: "Carrello",
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
      <View>
        <Text style={styles.text}> Sono Carrello </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
  }
})