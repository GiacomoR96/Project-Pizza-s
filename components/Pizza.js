import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Pizza extends Component {
    /*
    state = {
        name : "",
        category : "",
        ingredients : [],
        image : "",
        price : "",
        description : "",
        isLoading : false
    };
    */

    render() {
        //console.log("QUELLO CHE RICEVO: ",this.props.data);
        return(
            <TouchableOpacity>
                <View style={styles.title}>
                    <View>
                        <Text>{this.props.data.name}</Text>
                    </View>
                    <View>
                        <Text>{this.props.data.price}</Text>
                    </View>
                </View>
                <View>
                    <Text>{this.props.data.info}</Text>
                    <Image 
                        source={{uri: this.props.data.image}}
                        style={{width: 50, height: 50}}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    title: {
        flex : 1
    }
})