import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import EeventExploreCard from './../../components/Cards/EeventExploreCard';
import IconButton from './../../components/buttons/IconButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';

const NearbySection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: Colors.violetShade,
            marginBottom: 5,
          }}>
          Nearby{' '}
          <Text
            style={{
              marginLeft: 10,
              fontSize: 13,
              color: '#9c60ff',
            }}>
            (~5km)
          </Text>
        </Text>
        <IconButton
          icon={
            <EntypoIcon
              name="chevron-right"
              style={{
                fontSize: 16,
                color: '#fff',
              }}
            />
          }
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          // style={{top:210}}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          data={[1, 2, 3]}
          keyExtractor={item => item}
          renderItem={() => <EeventExploreCard />}
        />
      </View>
    </View>
  );
};

export default NearbySection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  listView: {},
});
