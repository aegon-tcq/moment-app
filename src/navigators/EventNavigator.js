import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EventsHomeScreen from '../screens/Events/EventsHomeScreen';
import EventsUpcomingScreen from '../screens/Events/EventsUpcomingScreen';
import EventCreationScreen from "../screens/EventCreationScreen"
import EventsMyEventScreen from "../screens/Events/EventsMyEventScreen"
import EventProgressDashBoardScreen from "../screens/Events/EventProgressDashBoardScreen";
import AttendanceScreen from '../screens/Attendence/AttendanceScreen';
import TodosScreen from '../screens/Events/TodosScreen';
import EventsVendorsScreen from '../screens/Events/EventsVendorsScreen';

const EventStack = createStackNavigator();

export default EventStackNavigator = () => {
  return (
    <EventStack.Navigator initialRouteName={'HomeScreen'}>
      <EventStack.Screen
        options={{headerShown: false}}
        name="EventsHomeScreen"
        component={EventsHomeScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="EventsUpcomingScreen"
        component={EventsUpcomingScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="EventCreationScreen"
        component={EventCreationScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="EventsMyEventScreen"
        component={EventsMyEventScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="EventProgressDashBoardScreen"
        component={EventProgressDashBoardScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="AttendanceScreen"
        component={AttendanceScreen}
      />
      <EventStack.Screen
        options={{headerShown: false}}
        name="TodosScreen"
        component={TodosScreen}
      />
       <EventStack.Screen
        options={{headerShown: false}}
        name="EventsVendorsScreen"
        component={EventsVendorsScreen}
      />
    </EventStack.Navigator>
  );
};
