import React from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, Button, TextInput } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Pizza from './Pizza';

const COLOR = 'rgb(4, 159, 239)';

export default class Menu extends React.Component {
  
  state = {
    pizzaList : [],
    search: ''
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

  updateSearch = ( search ) => {
    this.setState({search: search});
  }

  filterCategoryList = () => {
    this.inizializeList().then( () =>{
      if(this.state.search !== '') {
        const newList = this.state.pizzaList.filter( element => {
          if(element.category === this.state.search){
            return element.category;
          }
          else if(element.name === this.state.search){
            return element.name;
          }
        });
        this.setState({pizzaList: newList});
      }
    });
  }

  async inizializeList() {
    await fetch("http://www.dmi.unict.it/~calanducci/LAP2/food.json")
    .then( result => result = result.json())
      .then( ris => {
        this.setState({pizzaList : ris.data || []})
      });
  }

  async componentWillMount() {
    this.inizializeList();
  }

  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Project Pizza's</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cerca qui..."
            onChangeText={(text) => this.updateSearch(text)}
          />
          <Button title="Cerca"  style={styles.searchButton} onPress={this.filterCategoryList}/>
        </View>
        {
          (this.state.pizzaList.length===0) ? 
          this.loadingMenu() :
          <ScrollView>
            <FlatList 
              data={this.state.pizzaList}
              renderItem={this.renderRow}
              keyExtractor={this._keyExtractor}
            />
          </ScrollView>
        }
      </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    height: "5%",
    backgroundColor: "#007FFF",
    alignItems: "center"
    //justifyContent: 'center'
  },
  titleText: {
    color: "white",
    fontSize: 32,
    //justifyContent: "center"
    //font
  },
  loading: {
    justifyContent: "center",
    flexDirection:"row"
  },
  search: {
    flexDirection:"row",
    padding: 10,
    borderBottomWidth: 3,
    //borderTopWidth: 3,
    borderColor: "green"
    //borderRadius: 25
  },
  searchInput: {
    height: 40,
    flex: 2
  },
  searchButton: {
    flex: 1
  }
});