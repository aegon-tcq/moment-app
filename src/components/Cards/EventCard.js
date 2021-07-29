import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';

const EventCard = ({image, eventName, date, time, place}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.bgStyle}
        imageStyle={styles.bgImage}>
        <View style={styles.cardFooter}>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {eventName}
            </Text>
            <Text
              style={{
                color: '#66738F',
                fontSize: 12,
                fontWeight: '700',
                marginTop: 5,
              }}>
              {time.toUpperCase()} | {date.toUpperCase()}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 11,
                fontWeight: '700',
                marginTop: 2,
              }}>
              {place}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../assets/avatar.png')}
              style={{
                resizeMode: 'cover',
                height: 45,
                width: 45,
                borderRadius: 100,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    height: 206,
    width: 299,
    marginVertical: 10,
    marginRight: 25,
  },
  bgStyle: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: 400,
    overflow: 'hidden',
    borderRadius: 15,
  },
  bgImage: {
    borderRadius: 15,
    height: 480, // the image height
    top: 0,
  },
  cardFooter: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingTop: 12.3,
    paddingBottom: 7.48,
    bottom: 0,
    backgroundColor: '#0F0D0DC7',
    height: 80,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
