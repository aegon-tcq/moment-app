import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Casual from '../../assets/icons/dresscode/casual.svg';
import SCasual from '../../assets/icons/dresscode/scasual.svg';
import BCasual from '../../assets/icons/dresscode/bcasual.svg';
import SF from '../../assets/icons/dresscode/sf.svg';
import Tie from '../../assets/icons/dresscode/tie.svg';
import Business from '../../assets/icons/dresscode/business.svg';
import CategoryButton from '../components/CategoryButton';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export const _iconsData = (index = 0, style = {}) => {
  switch (index) {
    case 0:
      return <Casual style={style} />;
    case 1:
      return <BCasual style={style} />;
    case 2:
      return <SCasual style={style} />;
    case 3:
      return <Business style={style} />;
    case 4:
      return <SF style={style} />;
    case 5:
      return <Tie style={style} />;
    default:
      return <Tie style={style} />;
  }
};

const DresscodeCategories = () => {
  const dressCategpories = [
    {
      label: 'Casual',
      isSelected: false,
    },
    {
      label: 'Business Casual',
      isSelected: true,
    },
    {
      label: 'Smart Casual',
      isSelected: false,
    },
    {
      label: 'Business',
      isSelected: false,
    },
    {
      label: 'Semi-Formal',
      isSelected: false,
    },
    {
      label: 'Black Tie',
      isSelected: false,
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dressCategpories.map((item, index) => {
        return (
          <CategoryButton
            {...item}
            isSelected={item.isSelected}
            icon={
              item.isSelected
                ? _iconsData(index, {color: '#fff'})
                : _iconsData(index, {color: Colors.violet})
            }
            onPress={() => {}}
          />
        );
      })}
    </ScrollView>
  );
};

export default DresscodeCategories;

const styles = StyleSheet.create({});
