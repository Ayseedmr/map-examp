//dosya içine aktarma işlemindeki javascipt uzantısı

import React from 'react';
import {
       StyleSheet,
       Text,
       View,
       Dimensions,
       TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const DestinationButton = function(props){

    return(
           <TouchableOpacity onPress={ () => {} } style={styles.container}>
              <View style={styles.leftCol}>
                    <Text style={{fontSize: 8}}>{'\u25A0'}</Text>
              </View>

              <View style={styles.centerCol}>
                   <Text style={{fontFamily: 'sans-serif-thin', fontSize: 21, color:'#ff0000'}}>
                     Hedef konum ?
                   </Text>
              </View>

              <View style={styles.rightCol}>
                   <Ionicons name="md-car" color="#000000" size={25} style={{alignSelf: 'center'}} />
              </View>
           </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position : 'absolute',
    flexDirection : 'row',
    width: (WIDTH-40),
    height: 50,
    top:100,
    left:20,
    borderRadius: 3,
    alignItems: 'center',
    shadowColor: '#3cb371',
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  leftCol:{
    flex: 1,
    alignItems: 'center',
  },
  centerCol:{
    flex:4,
  },
  rightCol:{
    flex:1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
  }
});
