import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import TextHeader from '../components/Header/TextHeader';
import EeventExploreCard from '../components/Cards/EeventExploreCard';

export default ExploreCategoryScreen = () => {
  return (
    <View style={styles.container}>
      <TextHeader headerText={'Shows'} />
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
