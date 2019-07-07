/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/placeInput/PlaceInput';
import PlaceList from './src/components/placeList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/placedetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {

  placeAddedHandler = placeName => {
    if (placeName.trim() === "") {
      return;
    }
    this.props.onAddPlace(placeName);
  }

  placeDeletedHandler = key => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />

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
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

