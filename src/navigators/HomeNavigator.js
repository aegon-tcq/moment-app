import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreSearchScreen from '../screens/ExploreSearchScreen/index';
import FilterScreen from '../screens/FilterScreen/index';
import ExploreEventSearchScreen from '../screens/ExploreEventSearchScreen';
import ExploreCategoryScreen from '../screens/ExploreCategoryScreen';
import ChangeLocationScreen from '../screens/ChangeLocationScreen';
import TicketPurchasePay from './../screens/TicketPurchasePay/index';
import TicketsListScreen from './../screens/TicketsListScreen/index';
import TicketSelectionScreen from './../screens/TicketSelection/index';
import EventPermaLinkScreen from '../screens/EventParamLink/index';
import BottomTabNavigator from './BottomTabNavigator';
import CreateWishlists from './../screens/CreateWishlists/index';
import EventCreationScreen from '../screens/EventCreationScreen';
import EventDashboard from '../screens/EventDashBoard/index';
import CreateTicketsScreen from '../screens/CreateTickets';

const HomeStack = createStackNavigator();

export default HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={'HomeScreen'}>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={BottomTabNavigator}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreSearchScreen"
        component={ExploreSearchScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreEventSearchScreen"
        component={ExploreEventSearchScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ExploreCategoryScreen"
        component={ExploreCategoryScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ChangeLocationScreen"
        component={ChangeLocationScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="TicketSelectionScreen"
        component={TicketSelectionScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="EventPermaLinkScreen"
        component={EventPermaLinkScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="TicketPuchasePay"
        component={TicketPurchasePay}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="TicketPurchaseComplete"
        component={TicketsListScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ViewTickets"
        component={TicketsListScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="CreateWishlists"
        component={CreateWishlists}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="EventCreationScreen"
        component={EventCreationScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="EventDashboard"
        component={EventDashboard}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="CreateTicketsScreen"
        component={CreateTicketsScreen}
      />
    </HomeStack.Navigator>
  );
};
