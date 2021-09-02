import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Crousel from '../../components/Crousel';
import EventBtns from './EventBtns';
import Colors from '../../constants/Colors';
import GradientButton from '../../components/buttons/GradientButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import DresscodeCategories from './DresscodeCategories';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {TextArea} from '../../components/formInputs/FormTextInput';

const ReanderImage = ({
  imageUrl = 'https://s3-alpha-sig.figma.com/img/d77f/624f/58da182bdbce39b54fa97493deba2e28?Expires=1629072000&Signature=XWUq8Y1FYeY~TE9p5Vgv8u84wQZD8RhEYZHi25bqznP0BOiQDGHuwuGFFMT1b-oZnoa8w26CoQdDBTIFZVK1Ud-t0OJkxmz22TT-EQheajdTPXQq3WTQVJXj4gvA5NQhofpYglVI-~jXk~jCZECOmvXbERCp06tkx3psQBejSXoxpfSntAnHky17RieQEgDUaDtOC3N0Jr9~giMLiFK-QWLDG4FtDNUTM3WvZ2bJJa1rMic9dgA8-TTr7oSLu2FqyKxEtfnwy6LB9PyXTSIUQknjlI~8BoRnRQuZAMuzDliWiKV7AeFG6PsZf5rfMqSC7auOBaJ8rUsxrAx5aaU0-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}) => (
  <Image
    resizeMode={'cover'}
    style={{height: 250, width: windowWidth * 0.9, borderRadius: 25}}
    source={{uri: imageUrl}}
  />
);

const btns = [
  {
    bgColor: '#14142B',
    textColor: Colors.OffWhite,
    title: 'Event Details',
  },
  {
    bgColor: Colors.violetLightShade,
    textColor: Colors.primary,
    title: 'Tickets',
  },
  {
    bgColor: Colors.violetLightShade,
    textColor: '#FF84B7',
    title: 'Vendor',
  },
  {
    bgColor: '#F1FCFF',
    textColor: '#0096B7',
    title: 'Dresscode',
  },
];

export default EventDashboard = ({navigation}) => {
  const refRBSheet = React.useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#2A7E8D', '#140C56']}
        style={styles.linearGradient}></LinearGradient>
      <View style={styles.container}>
        <Crousel renderChildItem={<ReanderImage />} />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 50,
          padding: 20,
        }}>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'sf-ui-display-heavy',
          }}>
          OPTIONAL
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[...Array(4).keys()]}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => (
            <EventBtns
              containerStyle={{
                backgroundColor: btns[index % 4].bgColor,
              }}
              title={btns[index % 4].title}
              titleStyle={{
                color: btns[index % 4].textColor,
              }}
              iconIndex={index % 4}
              onPress={() => {
                if (btns[index % 4].title === 'Tickets') {
                  navigation.navigate('CreateTicketsScreen');
                }
                if (btns[index % 4].title === 'Dresscode') {
                  refRBSheet.current.open();
                }
              }}
            />
          )}
          numColumns={2}
        />
      </View>
      <GradientButton
        btnText={'Publish'}
        onPress={() => navigation.navigate('TicketSelectionScreen')}
        btnStyles={{margin: 0, marginHorizontal: 20}}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={500}
        closeOnPressMask={false}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <SelectDressCode />
      </RBSheet>
    </View>
  );
};

const SelectDressCode = () => {
  return (
    <View style={styles.selectDress}>
      <View style={{flex: 1}}>
        <Text style={styles.sdTitle}>Categories</Text>
        <DresscodeCategories />
      </View>
      <View style={styles.sdItem}>
        <Text style={styles.sdTitle}>Choose Colour</Text>
        <TouchableOpacity style={styles.addWl}>
          <Text style={styles.text}>Add Colour</Text>
          <Ionicons name={'add-sharp'} size={30} color={Colors.violetShade} />
        </TouchableOpacity>
      </View>
      <View style={styles.sdItem}>
        <Text style={styles.sdTitle}>Description (Optional)</Text>
        <TextArea placeholder={'Description'} />
      </View>
      <GradientButton
        btnText={'Save Dresscode'}
        onPress={() => {}}
        btnStyles={{margin: 0, marginHorizontal: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 250,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    zIndex: -5,
  },
  container: {
    position: 'absolute',
    top: 60,
    height: 250,
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.9,
  },
  topContainer: {
    justifyContent: 'space-around',
    minHeight: 150,
  },
  timeDateText: {
    color: '#66738F',
    fontSize: 12,
    fontFamily: 'sf-ui-display-bold-58646a511e3d9',
  },
  headingText: {
    fontSize: 32,
    color: '#000F59',
  },
  locationText: {
    color: '#B06AB3',
    fontSize: 12,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'sf-ui-display-light-58646b33e0551',
  },
  selectDress: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex: 1,
  },
  sdTitle: {
    fontSize: 16,
    color: '#6E7191',
  },
  sdItem: {
    marginVertical: 2,
  },
  addWl: {
    backgroundColor: '#F3EFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 11,
    marginVertical: 20,
  },
});
