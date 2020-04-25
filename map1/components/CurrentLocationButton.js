import React from 'react';
import {
       StyleSheet,
       Text,
       View,
       Dimensions,
       TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton= function(props){

  const cb = props.cb ? props.cb : () => console.log('Callback fonksiyonu Konumu gösteren butonu geçmedi');
  const bottom = props.bottom ? props.bottom : 65;

  return(
         <View style={[styles.container , {top:HEIGHT-bottom}]}>
               <MaterialIcons
                  name = "my-location"
                  color = "#000000"
                  size = {30}
                  onPress={ () => { cb() }} />
         </View>
  );
}

const styles = StyleSheet.create({
  container:{
     zIndex: 9,
     position: 'absolute',
     width: 45,
     height: 45,
     left: WIDTH-70,
     borderRadius: 50,
     shadowColor: '#000000',
     shadowOpacity: 1.0,
     justifyContent: 'space-around',
     alignItems: 'center',
  }
});
