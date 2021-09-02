import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextHeader from '../../components/Header/TextHeader';
import EventsForYou from '../ExploreSearchScreen/EventsForYou';
import IconButton from '../../components/buttons/IconButton';
import CreateEventBtn from '../../components/buttons/CreateEventBtn';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const events = [
  {
    imageUri:
      'https://s3-alpha-sig.figma.com/img/2eb1/f5a7/dbea8c9828e2234c2e07bce0e96ea612?Expires=1630281600&Signature=gcaBz0Pr-YFkNv2WAc8GU7CqBjJCiLMPI0eU1Mx58C~GUQiPyvPG~g58sslFtSaVucy~nVmPR0S-akbrQVa6gZZO8wYfd25ue1oGjSeLJAnKHbTjGMn4FNq0nca-2Ru6XLWDQX5ZJSAxDP56-pIAxna1miDXPcd28vLk5jeqgyFfO4sRLUGG4o22EGT--0I~Wv1OsimplyYwXEuNPdN5C9xBIqGWElx5pHP2b~YT9vV2pRMnxWzHNdrAVX6-628DtV-gM9iszFjlAg1c7GswpUbW~Oq2GnDBTCEj6qFaVSVhevp9U3WglpJhOteQTWb~C8XNVW3UKFZIJPd5FEyD8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    text: 'The Science Festival 2020',
  },
  {
    imageUri:
      'https://s3-alpha-sig.figma.com/img/2703/9dff/610d2361504aaa2c0156f6f94e138912?Expires=1630281600&Signature=I2ZxkcY7mQolTVnTDecl-es0MG1h7jI4ING4j~xAj5KBenGR1~AEi9Pyh58cehXUr3dwS2zBoasPPdNPnkp7RwMRQ30HAurLtF4vHoQ8VL0pl0EgdpBOyp3BsOB2uqhR3-lJh9PidYfB~8la6AaLyWe6WV1H5LK6KpNK8~Z4Wzub6dNJvmUc6I8vmPdwvLzZ2QRh0xpFupKo8XIQVp6Z1irvZkUDXMYFoHO8P9gu0~ozmf9SR77FyKNk5VrmLYCi6FKOprMRr~74xLruO6BzG5-xu2shTZ23cDrwS246FQ1nnwWiZLIdrNqaDUMw7wiEs7Cl202d2Kc-J1ZzCfYpaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    text: 'The Science Festival 2020',
  },
  {
    imageUri:
      'https://s3-alpha-sig.figma.com/img/2eb1/f5a7/dbea8c9828e2234c2e07bce0e96ea612?Expires=1630281600&Signature=gcaBz0Pr-YFkNv2WAc8GU7CqBjJCiLMPI0eU1Mx58C~GUQiPyvPG~g58sslFtSaVucy~nVmPR0S-akbrQVa6gZZO8wYfd25ue1oGjSeLJAnKHbTjGMn4FNq0nca-2Ru6XLWDQX5ZJSAxDP56-pIAxna1miDXPcd28vLk5jeqgyFfO4sRLUGG4o22EGT--0I~Wv1OsimplyYwXEuNPdN5C9xBIqGWElx5pHP2b~YT9vV2pRMnxWzHNdrAVX6-628DtV-gM9iszFjlAg1c7GswpUbW~Oq2GnDBTCEj6qFaVSVhevp9U3WglpJhOteQTWb~C8XNVW3UKFZIJPd5FEyD8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    text: 'The Science Festival 2020',
  },
  {
    imageUri:
      'https://s3-alpha-sig.figma.com/img/2703/9dff/610d2361504aaa2c0156f6f94e138912?Expires=1630281600&Signature=I2ZxkcY7mQolTVnTDecl-es0MG1h7jI4ING4j~xAj5KBenGR1~AEi9Pyh58cehXUr3dwS2zBoasPPdNPnkp7RwMRQ30HAurLtF4vHoQ8VL0pl0EgdpBOyp3BsOB2uqhR3-lJh9PidYfB~8la6AaLyWe6WV1H5LK6KpNK8~Z4Wzub6dNJvmUc6I8vmPdwvLzZ2QRh0xpFupKo8XIQVp6Z1irvZkUDXMYFoHO8P9gu0~ozmf9SR77FyKNk5VrmLYCi6FKOprMRr~74xLruO6BzG5-xu2shTZ23cDrwS246FQ1nnwWiZLIdrNqaDUMw7wiEs7Cl202d2Kc-J1ZzCfYpaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    text: 'The Science Festival 2020',
  },
];

export default EventsHomeScreen = ({navigation}) => {
  const handleNavigationTo = screenName => navigation.navigate(screenName);

  const _renderEventCard = (item, index) => (
    <TouchableOpacity
      onPress={() => handleNavigationTo('EventProgressDashBoardScreen')}
      style={[
        styles.eventCard,
        {
          height: (index + 1) % 4 == 0 || index === 0 ? 270 : 200,
        },
      ]}>
      <Image style={styles.eventCardImg} source={{uri: item.imageUri}} />
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <TextHeader
        showBackArrow={false}
        showLocationIcon={false}
        headerText={'Events'}
      />
      <ScrollView>
        <EventsForYou
          onPressAllEvent={() => handleNavigationTo('EventsUpcomingScreen')}
        />
        <View style={styles.flexRow}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sf-ui-display-bold',
              color: '#000',
              marginBottom: 5,
            }}>
            My Events
          </Text>
          <IconButton
            onPress={() => handleNavigationTo('EventsMyEventScreen')}
            icon={
              <EntypoIcon
                name="chevron-right"
                style={{
                  fontSize: 16,
                  color: '#fff',
                }}
              />
            }
          />
        </View>
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          nestedScrollEnabled
          numColumns={2}
          data={events}
          keyExtractor={index => index.toString()}
          renderItem={({item, index}) => _renderEventCard(item, index)}
        />
      </ScrollView>
      <CreateEventBtn
        onPress={() => handleNavigationTo('EventCreationScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    height: 200,
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    padding: 15,
  },
  eventCardImg: {
    height: '80%',
    width: '100%',
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
