import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {_iconsData} from './_iconsData';
import CategoryButton from './CategoryButton';

const Categories = ({isFilter = false, categoryFilter = []}) => {
  const navigation = useNavigation();

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
              icon={
                isSelected
                  ? _iconsData(index, {color: '#fff'})
                  : _iconsData(index, {color: Colors.violet})
              }
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
