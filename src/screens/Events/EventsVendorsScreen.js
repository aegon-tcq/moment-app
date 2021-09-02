import React from 'react';
import {
  View,
 FlatList,
} from 'react-native';
import HeaderWithSearchbar from '../../components/Header/HeaderWithSearchbar';
import VendorCard from '../../components/Cards/VendorCard';

export default EventsVendorsScreen = () => {
  return (
    <View style={{backgroundColor:"#FFF",flex:1}} >
      <HeaderWithSearchbar
        title={'Vendors'}
        searchplaceholder={'Search vendors'}
        showLeftIcon={true}
      />
      <FlatList
        style={{padding:15}}
        contentContainerStyle={{flexGrow: 1}}
        data={[...Array(10).keys()]}
        keyExtractor={item => item}
        renderItem={() => <VendorCard />}
      />
    </View>
  );
};
