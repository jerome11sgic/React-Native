import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../Listitems/Listitem';



const PlaceList = (props) => {
    const placeOutput = props.places.map((place, i) => (
        <ListItem
            key={i}
            placeName={place}
            onItemPressed={() => alert("Ïtem pressed -ID:" + i)}
        />
    ))
    return (
        < View style={styles.listContainer} >
            {placeOutput}
        </View >
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",

    }
})
export default PlaceList;
