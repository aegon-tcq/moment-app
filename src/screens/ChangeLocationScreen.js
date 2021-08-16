import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import GradientButton from '../components/buttons/GradientButton';
import MapView from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from '../constants/Colors.js';
import HeaderWithSearchbar from '../components/Header/HeaderWithSearchbar';

export default ChangeLocationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1,zIndex:-1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <HeaderWithSearchbar
        headerStyle={styles.headerStyle}
        showtagline
        title={'Where are you partying?'}
        tagLine={
          'You can change locations to find or plan parties in other states'
        }
        searchplaceholder={"Search locations"}
      />

      <View style={styles.btnContainer}>
        <GradientButton
          btnStyles={{
            width: '80%',
          }}
          onPress={() => navigation.navigate('EventDashboard')}
          // onPress={() => navigation.navigate('CreateTicketsScreen')}

          btnText={'Set Location'}
        />
        <TouchableOpacity
        onPress={()=>console.log("pressed")}
         style={styles.locationBtn}>
          <MaterialIcons name={'my-location'} size={40} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal:20,
    bottom: 0,
  },
  locationBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.violetDark
  
  },
  headerStyle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'flex-end',
    zIndex:1
  },
});
