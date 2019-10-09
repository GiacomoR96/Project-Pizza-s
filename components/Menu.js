import React from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Pizza from './Pizza';
import { FlatList } from 'react-native-gesture-handler';

const COLOR = 'rgb(4, 159, 239)';

export default class Menu extends React.Component {
  
  state = {
    pizzaList : []
  };

  renderRow = ({item}) => (
    <Pizza data={item} key={this._keyExtractor}/>
  );

  _keyExtractor = (item,index) => {
    return item.id;
  }

  loadingMenu = () =>{
    return(
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={COLOR} />
      </View>
    )
  }

  async componentWillMount() {
    console.log("CI PROVO");
    await fetch("http://www.dmi.unict.it/~calanducci/LAP2/food.json")
    .then( result => result = result.json())
      .then( ris => {
        this.setState({pizzaList : ris.data || []})
      })
  }

  render() {
    return (
      <View>
        {
          (this.state.pizzaList.length===0) ? 
          this.loadingMenu() :
          <FlatList 
            data={this.state.pizzaList}
            renderItem={this.renderRow}
            keyExtractor={this._keyExtractor}
          />
        }
      </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loading: {
    justifyContent: "center",
    flexDirection:"row"
  }
});