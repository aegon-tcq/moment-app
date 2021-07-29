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


export default ExploreEventSearchScreen = () => {
  return (
    <View style={styles.container}>
    <HeaderWithSearchbar />
      <FlatList
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={item => item}
        renderItem={() => <EeventExploreCard />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
