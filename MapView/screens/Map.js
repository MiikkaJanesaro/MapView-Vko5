import React,{useEffect, useState} from 'react';
import { StyleSheet, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';



export default function Map(props) {
    const [marker, setMarker] = useState(null)
    
    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
    }

    
    useEffect(()=> {
        (async() => {
            getUserPosition()
        })()
    }, [])
    

  return (
    <>
    <MapView
        style={styles.map}
        region={props.location}
        mapType='satellite'
        onLongPress={showMarker}
    >
        {marker &&
        <Marker
            title= "My marker"
            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
        />
    }
    </MapView>
    </>
  )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})
