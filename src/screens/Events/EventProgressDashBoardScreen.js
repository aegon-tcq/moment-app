import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import HeaderWithOptions from '../../components/Header/HeaderWithOptions';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import ToDoCard from '../../components/Cards/ToDoCard';
import VendorCard from '../../components/Cards/VendorCard';
import AttendanceCard from '../Attendence/AttendanceCard';
import Colors from '../../constants/Colors';
import FacePile from 'react-native-face-pile';
import EventProgressMultiCircle from './EventProgressMultiCircle';
import EventProgressCircle from './EventProgressCircle';

const {width, height} = Dimensions.get("window");

const FACES = [
  {
    id: 0,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 1,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 2,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 3,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 4,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 5,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 6,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0a27/c79a/a65243967682d6d8680a749228c64365?Expires=1630886400&Signature=CvBPMasMRvUviO8UydMBIsEChBKtZ5Av4ZGf914IvYcsCNN6Po6ZTKuozM938zoVQa4Ne6xCD6O87k2-HCdqpSqzzD4IIikZvSiq-dCfIFiELKXG7GdvQBPnRXZ7Gpm1nqIIcF9tbE3N~fONTikiqN5SQyzGPcbtSwBFeztZbckmhYyhGjOu8aFLnrdzFxNVYrgwZxqulJ0o~JYvoZ-XUbFZTlXN2pb32W28qvkfPLJKDjgeu1EQFR3UJIuBMbuquKYdOvxJlQdUhR~wB8-T5NqlXEJg9W3FJx9Tx6e0SRBs8otwk4uFbHZVWy93ablOE~dHEkSygyFcmiebspoGvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

const AttendesCard = ({noOfAttendes = 26, navigate}) => {
  const _inviteBtn = () => (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.darkPurple,
        borderRadius: 20,
        width: 110,
        padding: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#FFF'}}>Invite more</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        paddingHorizontal: 10,
        height: 80,
        justifyContent: 'space-around',
      }}>
      <View style={styles.rowSpaceBetween}>
        <Text
          style={styles.attendanceText}>{`Attendes  (${noOfAttendes})`}</Text>
        <Text style={[styles.attendanceText, {color: Colors.violetDark}]}>
          Send a message
        </Text>
      </View>
      <View style={styles.rowSpaceBetween}>
        <TouchableOpacity onPress={() => navigate('AttendanceScreen')}>
          <FacePile circleSize={25} numFaces={6} faces={FACES} />
        </TouchableOpacity>
        {_inviteBtn()}
      </View>
    </View>
  );
};

const List = ({
  type = 'TODO',
  title = 'To-Dos',
  noOfItems = 2,
  listItems = [1, 2],
  navigate = () => {},
}) => (
  <View style={{padding: 15}}>
    <View style={styles.rowSpaceBetween}>
      <Text style={styles.attendanceText}>{`${title}  (${noOfItems})`}</Text>
      <TouchableOpacity onPress={navigate}>
        <Text style={[styles.attendanceText, {color: Colors.violetDark}]}>
          See all
        </Text>
      </TouchableOpacity>
    </View>
    {type === 'TODO'
      ? listItems.map((item, index) => (
          <View key={index}>
            <ToDoCard showLeftIcon={false} />
          </View>
        ))
      : listItems.map((item, index) => (
          <View key={index}>
            <VendorCard />
          </View>
        ))}
  </View>
);

export default EventProgressDashBoardScreen = ({
  dateTime = '14:00 | 08 APR 2021 - 21:00 | 11 APR 2021',
  ticketHeading = 'Gidi Fest: Bringing It Home!',
  location = 'Cricket Pitch, TBS, Lagos',
  navigation,
}) => {
  const handleNavigationTo = screenName => navigation.navigate(screenName);

  return (
    <ScrollView style={{backgroundColor: '#FFF', flexGrow: 1}}>
      <HeaderWithOptions
        headerText={'DashBoard'}
        headerStyle={{
          height: 350,
        }}
        headerViewStyle={{
          paddingTop: 30,
          alignItems: 'flex-start',
        }}
      />
      {/* <View> */}
      <View style={styles.topContainer}>
        <Text style={styles.timeDateText}>{dateTime}</Text>
        <Text style={styles.headingText}>{ticketHeading}</Text>
        <View style={{flexDirection: 'row'}}>
          <EvilIcons name={'location'} size={20} color={'#C4C4C4'} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <Text style={{color: '#FFF', fontSize: 16}}>Event Progress</Text>
        <View
          style={styles.textView}>
          <Text style={styles.timeDateText}>Event Budget</Text>
          <Text style={styles.timeDateText}>N100,00</Text>
        </View>
        <View
          style={styles.textView}>
          <Text style={styles.timeDateText}>Total order</Text>
          <Text style={styles.timeDateText}>5</Text>
        </View>
        <View
          style={styles.textView}>
          <Text style={styles.timeDateText}>To-dos</Text>
          <Text style={styles.timeDateText}>8</Text>
        </View>
        <View
          style={styles.textView}>
          <Text style={styles.timeDateText}>Attendees</Text>
          <Text style={styles.timeDateText}>25</Text>
        </View>

        <View style={{flexDirection:"row",marginTop:15}} >
          <EventProgressMultiCircle />
          <EventProgressCircle outerStyle={{marginLeft:width*0.3}}  />
          <EventProgressCircle outerStyle={{marginLeft:width*0.6}} textNo={8} />
        </View>

        <View style={{flexDirection:"row",marginTop:90,justifyContent:"space-around"}} >
        <Text style={styles.timeDateText}>Budget</Text>
        <Text style={styles.timeDateText}>Order</Text>
        <Text style={styles.timeDateText}>To-Dos</Text>
        </View>

      </View>

      {/* <ToDoCard 
          title={"Choose a cake from vendor"}
        />
        <VendorCard />
        <AttendanceCard />
      </View> */}
      <View style={{marginTop: 250, flex: 1}}>
        <AttendesCard navigate={handleNavigationTo} />
        <List
          type={'TODO'}
          navigate={() => handleNavigationTo('TodosScreen')}
        />
        <List
          type={'VENDOR'}
          title={'vendors'}
          noOfItems={5}
          navigate={() => handleNavigationTo('EventsVendorsScreen')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 80,
    padding: 20,
    width: '100%',
    minHeight: 150,
  },
  progressContainer: {
    position: 'absolute',
    top: 250,
    marginLeft: '5%',
    backgroundColor: '#4E4B66',
    padding: 20,
    width: '90%',
    borderRadius: 15,
    minHeight: 300,
    zIndex: 100,
  },
  timeDateText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'sf-ui-display-bold-58646a511e3d9',
  },
  headingText: {
    fontSize: 32,
    color: '#FFF',
  },
  locationText: {
    color: '#FFF',
    fontSize: 12,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  attendanceText: {
    fontSize: 16,
    fontFamily: 'sf-ui-display-bold',
    color: Colors.violetShade,
  },
  textView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  }
});
