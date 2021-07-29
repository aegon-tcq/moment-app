import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import Colors from '../../constants/Colors';
import ToggleButton from './../../components/buttons/ToggleButton';
import GradientButton from './../../components/buttons/GradientButton';
import SortByButton from './SortByButton';
import Slider from '@react-native-community/slider';
const FilterScreen = ({navigation}) => {
  const [filter, setFilter] = React.useState({
    categorys: [0],
    dressCode: false,
  });

  const sortByValues = [
    {
      key: 0,
      name: 'Name',
    },
    {
      key: 1,
      name: 'Date',
    },
    {
      key: 2,
      name: 'Distance',
    },
    {
      key: 3,
      name: 'Price',
    },
    {
      key: 4,
      name: 'Relevance',
    },
    {
      key: 5,
      name: 'Popularity',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={[
            styles.row,
            {
              paddingHorizontal: 20,
              marginVertical: 10,
            },
          ]}>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.blue,
              }}>
              RESET
            </Text>
          </TouchableOpacity>
          <Text>FILTERS</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Text
              style={{
                color: Colors.error,
              }}>
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.violetShade,
                marginBottom: 15,
                marginLeft: 4,
              }}>
              Sort By
            </Text>
            <FlatList
              numColumns={3}
              data={sortByValues}
              renderItem={({item}) => {
                return (
                  <SortByButton
                    text={item.name}
                    key={item.key}
                    isSelected={item.key === 0}
                  />
                );
              }}
            />
          </View>

          {/* ----------------- Categories View ---------------*/}
          <View
            style={{
              marginVertical: 10,
            }}>
            <Categories isFilter={true} categoryFilter={filter.categorys} />
          </View>
          {/* ----------------- End of Categories View ---------------*/}
          <View
            style={{
              marginVertical: 15,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.violetShade,
                marginBottom: 20,
                marginLeft: 4,
              }}>
              Distance
            </Text>
            <Slider
              minimumValue={5}
              maximumValue={100}
              minimumTrackTintColor={Colors.violet}
              maximumTrackTintColor={Colors.violet}
              thumbTintColor={Colors.violet}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                }}>
                5 KM
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}>
                100KM
              </Text>
            </View>
          </View>
          {/* ----------------- Price Select View ---------------*/}
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.violetShade,
                marginBottom: 15,
                marginLeft: 4,
              }}>
              Price
            </Text>
            <View style={styles.row}>
              <View style={styles.divider} />
              <View>
                <TextInput placeholder="0" style={styles.priceInput} />
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 10,
                  }}>
                  MIN
                </Text>
              </View>
              <View>
                <TextInput placeholder="3,00,000" style={styles.priceInput} />
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 10,
                  }}>
                  MAX
                </Text>
              </View>
            </View>
          </View>
          {/* ----------------- End of Price Select View ---------------*/}

          {/* ----------------- DressCode Toggler View ---------------*/}
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.violetShade,
                marginBottom: 15,
                marginLeft: 4,
              }}>
              Dresscode
            </Text>
            <ToggleButton
              labelLeft="No Dresscode"
              labelRight="Dresscode"
              selectedValue={filter.dressCode ? 'right' : 'left'}
              onChangeHandler={value => {
                let selectedValue;
                if (value === 'left') {
                  selectedValue = false;
                } else {
                  selectedValue = true;
                }
                setFilter({
                  ...filter,
                  dressCode: selectedValue,
                });
              }}
            />
          </View>
        </View>
        {/* ----------------- End of DressCode Toggler View ---------------*/}
        <View>
          <GradientButton btnText="Apply Filters" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  sectionView: {
    flex: 0.5,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceInput: {
    backgroundColor: '#EFF0F6',
    width: 150,
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#E2D1FF',
    position: 'absolute',
  },
});
