import React from 'react';
import Colors from '../constants/Colors';
import SegmentedControlTab from "react-native-segmented-control-tab";


export default TopTabNavigator = ({
  active = 10,
  completed = 100,
  unpublished = 10,
}) => {
  const [index, setIndex] = React.useState(0);

  return (
    <SegmentedControlTab
      values={[
        `ACTIVE (${active})`,
        `COMPLETED (${completed})`,
        `UNPUBLISHED (${unpublished})`,
      ]}
      selectedIndex={index}
      onTabPress={setIndex}
      activeTabStyle={{
        fontSize:10,
        backgroundColor: Colors.darkPurple,
      }}
      activeTabTextStyle={{
        backgroundColor: Colors.darkPurple,
      }}
      borderRadius={10}
      tabsContainer={{
        borderWidth: 0.5,
        borderColor: Colors.darkPurple,
      }}
      tabStyle={{
        borderWidth: 1,
        paddingVertical:10,
        borderColor: Colors.darkPurple,
      }}
      tabTextStyle={{
        fontSize:12,
        color:Colors.darkPurple,
      }}
    />
  );
};
