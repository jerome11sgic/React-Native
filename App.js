/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/placeInput/PlaceInput';
import PlaceList from './src/components/placeList/PlaceList';





export default class App extends Component {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      };
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput placeName={this.state.placeName} placeNameChangedHandler={this.placeNameChangedHandler} placeSubmitHandler={this.placeSubmitHandler} />
        <PlaceList places={this.state.places} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

