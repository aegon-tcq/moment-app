import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import MicIcon from '../../assets/icons/Mic.svg';
import CelebrationIcon from '../../assets/icons/Hat.svg';
import ExhibitionIcon from '../../assets/icons/Pencil.svg';
import PartyIcon from '../../assets/icons/Glass.svg';
import NetworkingIcon from '../../assets/icons/Handshake.svg';
import WorkshopIcon from '../../assets/icons/Workshop.svg';
import MicWhiteIcon from '../../assets/icons/MicWhite.svg';
import PartyIconWhite from '../../assets/icons/GlassWhite.svg';
import CelebrationIconWhite from '../../assets/icons/HatWhite.svg';
import ExhibitionIconWhite from '../../assets/icons/PencilWhite.svg';
import NetworkingIconWhite from '../../assets/icons/HandshakeWhite.svg';
import WorkshopIconWhite from '../../assets/icons/WorkshopWhite.svg';
import CategoryButton from './CategoryButton';
import {useNavigation} from '@react-navigation/native';

const Categories = ({isFilter = false, categoryFilter = []}) => {
  const navigation = useNavigation();
  const iconsDefault = [
    <MicIcon />,
    <CelebrationIcon />,
    <ExhibitionIcon />,
    <PartyIcon />,
    <NetworkingIcon />,
    <WorkshopIcon />,
  ];
  const iconsWhite = [
    <MicWhiteIcon />,
    <CelebrationIconWhite />,
    <ExhibitionIconWhite />,
    <PartyIconWhite />,
    <NetworkingIconWhite />,
    <WorkshopIconWhite />,
  ];
  const categorys = [
    {
      key: 0,
      label: 'Shows',
      route: 'ExploreCategoryScreen',
    },
    {
      key: 1,
      label: 'Celebrations',
    },
    {
      key: 2,
      label: 'Exhibitions',
    },
    {
      key: 3,
      label: 'Parties',
    },
    {
      key: 4,
      label: 'Networking',
    },
    {
      key: 5,
      label: 'Workshops',
    },
  ];
  return (
    <View style={styles.categoriesView}>
      <Text
        style={{
          fontSize: isFilter ? 18 : 20,
          fontWeight: '500',
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
        renderItem={({item, index}) => {
          const isSelected = categoryFilter.includes(item.key);
          return (
            <CategoryButton
              {...item}
              isSelected={isFilter ? isSelected : false}
              icon={isSelected ? iconsWhite[index] : iconsDefault[index]}
              onPress={() => {
                if (item.route) {
                  navigation.navigate(item.route);
                }
              }}
            />
          );
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
