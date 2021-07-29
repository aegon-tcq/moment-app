import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LocationIcon from '../../assets/icons/Location.svg';
import SettingsIcon from '../../assets/icons/Filter.svg';
import Searchbar from '../Searchbar';


const HeaderWithSearchbar = ({
  colors = ['#2A7E8D', '#140C56'],
  headerStyle = {},
  title = 'Header Title',
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={colors}
      style={[styles.gradientView, headerStyle]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.titleRow}>
        <Text style={styles.ttileText}>{title}</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <SettingsIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <LocationIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Searchbar />
      </View>
    </LinearGradient>
  );
};

export default HeaderWithSearchbar;

const styles = StyleSheet.create({
  gradientView: {
    height: 210,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
  },
  ttileText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});