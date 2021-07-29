import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import MicIcon from '../../assets/icons/Mic.svg';
import CelebrationIcon from '../../assets/icons/Hat.svg';
import ExhibitionIcon from '../../assets/icons/Pencil.svg';
import PartyIcon from '../../assets/icons/Glass.svg';
import NetworkingIcon from '../../assets/icons/Handshake.svg';
import WorkshopIcon from '../../assets/icons/Workshop.svg';
import CategoryButton from './CategoryButton';

const Categories = () => {
  const categorys = [
    {
      key: 0,
      label: 'Shows',
      route: 'Shows',
      icon: <MicIcon />,
    },
    {
      key: 1,
      label: 'Celebrations',
      route: 'Celebrations',
      icon: <CelebrationIcon />,
    },
    {
      key: 2,
      label: 'Exhibitions',
      route: 'Exhibitions',
      icon: <ExhibitionIcon />,
    },
    {
      key: 3,
      label: 'Parties',
      route: 'Parties',
      icon: <PartyIcon />,
    },
    {
      key: 4,
      label: 'Networking',
      route: 'Networking',
      icon: <NetworkingIcon />,
    },
    {
      key: 5,
      label: 'Workshops',
      route: 'Workshops',
      icon: <WorkshopIcon />,
    },
  ];
  return (
    <View style={styles.categoriesView}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: Colors.violetShade,
          marginBottom: 5,
          marginLeft: 4,
        }}>
        Categories
      </Text>
      <FlatList
        style={{
          marginTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categorys}
        renderItem={({item}) => {
          return <CategoryButton {...item} />;
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesView: {
    paddingLeft: 20,
  },
});
