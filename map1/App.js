import React from 'react';
import { StyleSheet, Text, View ,Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { DestinationButton } from  './components/DestinationButton';
import { CurrentLocationButton } from  './components/CurrentLocationButton';

export default class App extends React.Component {

 constructor(props){
   super(props);
   this.state={
     region: null,
     }
     this._getLocationAsync();
  }
 _getLocationAsync = async() => {
     let { status } = await Permissions.askAsync(Permissions.LOCATION);
     if( status !== 'granted')
       console.log(' Konum erişim izni reddedildi ! ');

    let location = await Location.getCurrentPositionAsync({enabledHighAccurancy:true});
    let region = {
                  latitude : location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta : 0.0922,
                  longitudeDelta : 0.0421,
    }
    this.setState({ region : region })
 }

 centerMap(){
            const {
                 latitude,
                 longitude,
                 latitudeDelta,
                 longitudeDelta} = this.state.region;

            this.map.animateToRegion({
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta
            })
 }

  render() {
    return (
      <View style={styles.container}>
        <DestinationButton />
        <CurrentLocationButton cb={() => {this.centerMap() }} />
        <MapView
          //provider={PROVIDER_GOOGLE}
          region={this.state.region}
          showUserLocation={true}
          showCompass={true}
          ref={(map) => {this.map = map}}
          rotateEnabled={false}
          style={styles.mapStyle}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
