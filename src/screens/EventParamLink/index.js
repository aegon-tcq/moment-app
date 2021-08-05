import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ViewAllEventsButton from '../ExploreSearchScreen/ViewAllEventsButton';
import Colors from '../../constants/Colors';
import GradientButton from '../../components/buttons/GradientButton';
import Tickets from '../../assets/icons/Tickets.svg';
import ContributionBottomSheet from './ContributionBottomSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import ExpandableBtn from '../TicketSelection/ExpandableBtn';
import WishList from './WishList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReanderImage = ({
  imageUrl = 'https://s3-alpha-sig.figma.com/img/d77f/624f/58da182bdbce39b54fa97493deba2e28?Expires=1629072000&Signature=XWUq8Y1FYeY~TE9p5Vgv8u84wQZD8RhEYZHi25bqznP0BOiQDGHuwuGFFMT1b-oZnoa8w26CoQdDBTIFZVK1Ud-t0OJkxmz22TT-EQheajdTPXQq3WTQVJXj4gvA5NQhofpYglVI-~jXk~jCZECOmvXbERCp06tkx3psQBejSXoxpfSntAnHky17RieQEgDUaDtOC3N0Jr9~giMLiFK-QWLDG4FtDNUTM3WvZ2bJJa1rMic9dgA8-TTr7oSLu2FqyKxEtfnwy6LB9PyXTSIUQknjlI~8BoRnRQuZAMuzDliWiKV7AeFG6PsZf5rfMqSC7auOBaJ8rUsxrAx5aaU0-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}) => (
  <Image
    resizeMode={'cover'}
    style={{height: 250, width: windowWidth * 0.9, borderRadius: 25}}
    source={{uri: imageUrl}}
  />
);

const RenderDots = ({activeIndex = 0, noOfDots = 1}) => <View></View>;

export default EventPermaLinkScreen = ({
  navigation,
  dateTime = '14:00 | 08 APR 2021 - 21:00 | 11 APR 2021',
  ticketHeading = 'Gidi Fest: Bringing It Home!',
  location = 'Cricket Pitch, TBS, Lagos',
  description = 'Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah… wishing for The Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. ',
}) => {
  const refRBSheet = React.useRef();

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#2A7E8D', '#140C56']}
        style={styles.linearGradient}></LinearGradient>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            width: '100%',
            zIndex: 1,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name={'arrowleft'} size={30} color={'#FFF'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <AntDesign name={'hearto'} size={30} color={'#FFF'} />
          </TouchableOpacity>
        </View>
        <View style={{height: '100%', zIndex: -1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flex: 1}}
            data={[1, 2, 3]}
            key={item => item.toString()}
            renderItem={({item, index}) => <ReanderImage />}
          />
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#FFF',
          width: windowWidth,
          paddingHorizontal: 20,
          marginTop: 80,
        }}>
        <View style={styles.topContainer}>
          <Text style={styles.timeDateText}>{dateTime}</Text>
          <Text style={styles.headingText}>{ticketHeading}</Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name={'location'} size={20} color={'#C4C4C4'} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
        <ViewAllEventsButton
          btnStyle={{
            backgroundColor: Colors.grayLight,
            width: windowWidth * 0.9,
            marginLeft: 0,
          }}
          leftIcon={<Tickets />}
          btnText={'Starts from N10,000'}
          textStyle={{
            color: Colors.description,
          }}
        />
        <Text style={styles.descriptionText}>{description}</Text>
        <ExpandableBtn
          ticket={false}
          text={'DressCode'}
          description={'Denime and White tees'}
        />
        <ExpandableBtn
          ticket={false}
          text={'About the Organiser'}
          description={'Denime and White tees'}
        />
        <WishList />
      </ScrollView>
      <GradientButton
        btnText={'Buy Tickets'}
        onPress={() => navigation.navigate('TicketSelectionScreen')}
        btnStyles={{margin: 0, marginHorizontal: 20}}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={450}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <ContributionBottomSheet
          onPress={() => {
            refRBSheet.current.close();
            navigation.navigate('TicketSelectionScreen');
          }}
        />
      </RBSheet>
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
    fontFamily: "sf-ui-display-light-58646b33e0551"
  },
});
