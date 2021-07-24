import React from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import GradientButton from '../components/buttons/GradientButton';
import CircularButton from '../components/buttons/CircularButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const btnConfig = [
  [
    {radius: 50, name: 'Music', margins: {marginTop: 10, marginLeft: 10}},
    {radius: 50, name: 'Art', margins: {marginTop: 10, marginLeft: 50}},
  ],
  [
    {radius: 50, name: 'Sports', margins: {marginTop: 50, marginLeft: 10}},
    {radius: 60, name: 'Games', margins: {marginTop: 10, marginLeft: 10}},
    {radius: 85, name: 'Tech', margins: {marginTop: 10, marginLeft: 10}},
  ],
  [
    {radius: 70, name: 'Business', margins: {marginTop: 10, marginLeft: 10}},
    {radius: 60, name: 'Eating', margins: {marginTop: -30, marginLeft: 10}},
    {radius: 85, name: 'Dancing', margins: {marginTop: 10, marginLeft: 10}},
  ],
  [{radius: 60, name: 'Sports', margins: {marginTop: -50, marginLeft: -100}}],
];

function ChooseInterestScreen() {
  return (
    <ScrollView style={{backgroundColor:"#FFF"}} >
      <View style={styles.container}>
        <Text style={styles.headingText}>Choose Interests</Text>
        <View
          style={{
            flex: 1,
            height: windowHeight * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {btnConfig.map(btn => (
            <View style={{flexDirection: 'row'}}>
              {btn.map(b => (
                <CircularButton
                  radius={b.radius}
                  margins={b.margins}
                  btnText={b.name}
                />
              ))}
            </View>
          ))}
        </View>
        <GradientButton
          colors={['#00BA88', '#00BA88']}
          btnText={'To Explore Page'}
        />
      </View>
    </ScrollView>
  );
}

export default ChooseInterestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28,
    color: '#4E4B66',
    textAlign: 'center',
    marginTop: 20,
  },
});
