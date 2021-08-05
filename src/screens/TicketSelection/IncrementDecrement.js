import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Octicons from 'react-native-vector-icons/dist/Octicons';

export default IncrementDecrement = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems:"center",
        width: 100,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>setCount(count-1)}
      >
      <Octicons name={'dash'} size={30} color={Colors.violetShade} />
      </TouchableOpacity>
      <Text style={{
          fontSize:20,
          fontFamily:"sf-ui-display-medium-58646be638f96",
          color:Colors.violetDarkShade
      }} >{count}</Text>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>setCount(count+1)}
      >
      <Ionicons name={'add-sharp'} size={30} color={Colors.violetShade} />
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
    btn:{
        height:30,
        width:30,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#EFF0F6'
    }
})
