import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import HeaderWithSearchbar from '../components/Header/HeaderWithSearchbar';
import EeventExploreCard from '../components/Cards/EeventExploreCard';
import LinearGradient from 'react-native-linear-gradient';

export default ExploreEventSearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#2A7E8D', '#140C56']}
        style={styles.gradientView}>
        <HeaderWithSearchbar
          title="Find Your Next Event"
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}
          headerStyle={{position: 'absolute', top: 0, width: '100%'}}
        />
      </LinearGradient>
      <View style={styles.eventContainer}>
        <FlatList
          // style={{top:210}}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={item => item}
          renderItem={() => <EeventExploreCard
          onPress={()=>navigation.navigate("EventPermaLinkScreen")}
           />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientView: {
    height: 300,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  eventContainer: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    top: 210,
  },
});
