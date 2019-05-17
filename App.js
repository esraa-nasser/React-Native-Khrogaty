import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './Resources/Screens/Splash'
import FirstScreen from './Resources/Screens/OnBooarding/FirstScreen'
import SecondScreen from './Resources/Screens/OnBooarding/SecondScreen'
import ThirdScreen from './Resources/Screens/OnBooarding/ThirdScreen'
import Home from './Resources/Screens/HomeScreens/Home'
import  AllPlaces from './Resources/Screens/HomeScreens/AllPlaces'
import  AllActivities from './Resources/Screens/HomeScreens/AllActivities'
import  AllRestaurants from './Resources/Screens/HomeScreens/AllRestaurants'
import Details from './Resources/Screens/Details/Details';
import Location from './Resources/Screens/Details/Location';
import {createAppContainer,createStackNavigator} from 'react-navigation'
import Search from './Resources/Screens/HomeScreens/Search'
import SelectedRestaurants from './Resources/Screens/HomeScreens/SelectAndDetailsScreens/SelectedRestaurants'
import TabsScreen from './Resources/Screens/HomeScreens/Tabs/TabsScreen'
import SelectedPlaces from './Resources/Screens/HomeScreens/SelectAndDetailsScreens/SelectedPlaces'
import SelectedActivities from './Resources/Screens/HomeScreens/SelectAndDetailsScreens/SelectedActivities'
type Props = {};
const AppNavigator = createStackNavigator({
  // Splash,
  // Home,
   SelectedRestaurants,
   TabsScreen,Location,Details, 
  //Search,
  // Location,
  // AllPlaces,
  // AllActivities,
  // AllRestaurants,
  // FirstScreen,
  // SecondScreen,
  // ThirdScreen,
   SelectedActivities,SelectedPlaces
});

export default createAppContainer(AppNavigator);
