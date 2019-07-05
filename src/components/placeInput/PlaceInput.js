import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const PlaceInput = (props) => (

    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            placeholder='An awsome place'
            value={props.placeName}
            onChangeText={props.placeNameChangedHandler}

        />

        <Button
            style={styles.placeButton}
            title="Add"
            onPress={props.placeSubmitHandler}
        />
    </View>

)

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;

