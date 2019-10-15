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
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.title}>
                    <View>
                        <Text style={styles.titleText}>{this.props.data.name}</Text>
                    </View>
                    <View>
                        <Text>Prezzo: {this.props.data.price} €</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>{this.props.data.info}</Text>
                    <Image 
                        source={{uri: this.props.data.image}}
                        style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding: 7,
        margin: 3,
        borderRadius: 25,
        borderColor: "green",
        borderWidth: 2
    },
    title: {
        flexDirection : "row",
        justifyContent : "space-around"
    },
    body: {
        alignItems : "center"  
    },
    text: {
        fontSize: 16
    },
    titleText: {
        fontWeight: 'bold'
    },
    image: {
        width: 450,
        height: 250,
        marginTop: 10
    }
});