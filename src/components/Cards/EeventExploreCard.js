import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Rectangle from "../../assets/icons/Rectangle.svg"

function EeventExploreCard({
  location = 'Cricket Pitch, TBS, Lagos',
  onPress = () => {},
  eventTitle = 'Gidi Fest: Bringing It Home Festival',
  profilePhoto = 'https://s3-alpha-sig.figma.com/img/15b0/5f39/3d2c0f0720c23346bfc89efd39c30e94?Expires=1628467200&Signature=Z6cFWYB0N3edQ8QZ77vOolSTdLmp3~vfT3-v2dYQB4PreHW1MvgdbuakBoCbRbDADPTwWqOQVcAQJGlPWOE4uZwhuNGB2i2yulP1F-cQuKmUkREvctM7sfevAAZDJDZXPvYrB8UM29Nbrte7jbqxFIUhaFN13VWXjvncQjZEx9Q4DIuMaTk4q4ar-yJYh91hIOT0lae8kZWimI1NJzQCjeF5zQwEA2UZcQPdfxbcnOeutRNpuoPR6zHYWeZ4pW3AuCsPKIQe8yXsPxNMC56jpUicGSLzi9QXX5mHijAYPv2wknXxvXLL15W1M4Q0fjqvujXksGWaQALdZZUMDgMrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  imageUrl = 'https://s3-alpha-sig.figma.com/img/d77f/624f/58da182bdbce39b54fa97493deba2e28?Expires=1628467200&Signature=gljhpf317293ZvO2PvnON2cRJEzDQju9Zya-kB~c9e8B5cDrdcYm~zUDbKZvjfSOwbARXm3MK~p~LvlzMZsK1xDEs3SwEuSjJLzSWduL4q3kMtjU6Q2FDXuZ45MN1GOPj0JDfvFPVk946HJcs27lo3nUjsfv2nCjR473-VXl39wjVqolc2UqG7kiKTQcpcMOyJtpKRE94VEx0aSUv38G9OkfasxlgCyvda1WkC9pGJZ7hGdAaAcdTQAvQ~9xHXZ7SPm0XOqNviiYubTjJ69Sek0BvUfMic4WvFcqMM~t04WnRPCbk8k9hdnt2JvbCnokxdgGHZdhghDzx~1DZ1oKpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
}) {
  return (
    <TouchableOpacity
    onPress={onPress}
     style={styles.container}>
    <View style={styles.priceContainer} >
    <Rectangle />
        <Text style={styles.priceText} >PRICE</Text>
        <Text style={[styles.priceText,{marginTop:10,fontSize:8,color:"#FFF"}]} >N,500</Text>
    </View>
      <View style={styles.containerChild}>
        <Image style={styles.leftImageStyle} source={{uri: imageUrl}} />
        <View style={styles.containerChildRight}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.timeText,{
                  borderRightWidth:1,
                  borderRightColor:"#66738F"
              }]} >12:00</Text>
              <Text style={styles.timeText} >18 April 2021 -</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop:5}}>
              <Text style={[styles.timeText,{
                  borderRightWidth:1,
                  borderRightColor:"#66738F"
              }]} >12:00</Text>
              <Text style={styles.timeText} >18 April 2021 -</Text>
            </View>
          </View>
          <Text style={styles.eventTitle}>{eventTitle}</Text>
          <View style={styles.location}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons name={'location'} size={20} color={'#C4C4C4'} />
              <Text style={styles.locationText}>{location}</Text>
            </View>
            <Image
              style={{height: 30, width: 30, borderRadius: 15}}
              source={{uri: profilePhoto}}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default EeventExploreCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 170,
    borderRadius: 25,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    elevation: 5,
    marginVertical:10
  },
  priceContainer:{
    position:"absolute",
    top:0,
    right:50,
    alignItems:"center",
    justifyContent:"space-between",
  },
  priceText:{
    color: '#FFF',
    fontSize: 4,
    position:"absolute",
    margin:5
  },
  containerChild: {
    flex: 1,
    flexDirection: 'row',
  },
  leftImageStyle: {
    height: '100%',
    width: '30%',
    borderRadius: 25,
  },
  containerChildRight: {
    width: '70%',
    padding: 10,
    justifyContent:"space-between"
  },
  timeText:{
    color: '#66738F',
    fontSize: 7,
    lineHeight: 8.35,
    paddingHorizontal:5
  },
  eventTitle: {
    color: '#000F59',
    fontSize: 18,
    lineHeight: 26.34,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    color: '#B06AB3',
    fontSize: 10,
    lineHeight: 11.93,
  },
});
