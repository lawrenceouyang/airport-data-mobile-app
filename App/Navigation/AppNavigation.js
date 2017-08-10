import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import DashboardScreen from '../Containers/Dashboard/Dashboard';
import DashboardDrawer from '../Containers/Dashboard/Dashboard-Drawer';
import AllCheckpoints from '../Containers/Checkpoints/Screens/AllCheckpoints';
import CheckpointProfile from '../Containers/Checkpoints/Screens/CheckpointProfile';
import CheckpointQueues from '../Containers/Checkpoints/Screens/CheckpointQueues';
import AllGarages from '../Containers/Garages/Screens/AllGarages';
import GarageProfile from '../Containers/Garages/Screens/GarageProfile';
import HelpScreen from '../Containers/Help/Help';
import FavoriteFlights from '../Containers/Flights/Screens/FavoriteFlights';
import FlightProfile from '../Containers/Flights/Screens/FlightProfile';
import styles from './Styles/NavigationStyles';
import SearchForm from '../Containers/Flights/Screens/SearchForm';
import SearchedFlights from '../Containers/Flights/Screens/SearchedFlights';
import SearchedGarages from '../Containers/Garages/Screens/SearchedGarages';
import React from 'react';
import AllFlights from '../Containers/Flights/Screens/AllFlights';

// StackNavigator for Flights Search which shows the search page and the search results.
// Defaults to the SearchForm Screen
const SearchPageNavigator = StackNavigator(
  {
    Search: { screen: SearchForm },
    FlightSearchResults: { screen: SearchedFlights },
    GarageSearchResults: { screen: SearchedGarages },
  },
  {
    navigationOptions: {
      headerStyle: styles.searchHeader,
    },
    // Header mode is none here because react rendered two headers
    headerMode: 'none',
    mode: 'card',
  },
);

// Tab Navigator of the AllFlights and FavoriteFlights screens.
// Defaults to AllFlights Screen
const FlightScreenNavigator = TabNavigator(
    {
        All: { screen: AllFlights },
        Favorites: { screen: FavoriteFlights },
        // SearchPager:{ screen: SearchPageNavigator }
    },
    {
        swipeEnabled: true,
        backBehavior: 'none',
        navigationOptions: {
            headerStyle: styles.flightsHeader,
            // headerRight: (<SearchButton onPress = {() => this.props.navigation.navigate('SearchMain')}/>)
        },
        tabBarOptions: {
            style: styles.tabBarStyle,
            activeTintColor: '#fff',
            inactiveTintColor: '#929292',
        },
    },
);

// Root Navigator for Flight Module
// Defaults to the Flight Main Tab Navigator
const FlightProfileNavigator = StackNavigator(
    {
        FlightMain: { screen: FlightScreenNavigator },
        Profile: { screen: FlightProfile },
        SearchMain: { screen: SearchPageNavigator },
    },
    {
        // Default config for all screens
        headerMode: 'none',
    },
);

// Manifest of all possible screens

// Root Navigator for Garage Module
// Defaults to the AllGarages Screen
const GarageNavigator = StackNavigator(
    {
        AllGarages: { screen: AllGarages },
        GarageProfile: { screen: GarageProfile },
        SearchMain: { screen: SearchPageNavigator },
    },
    {
        // Default config for all screens
        headerMode: 'none',
    },
);

// Root Navigator for CheckpointsProfile Module
// Defaults to the CheckPointProfile
const CheckpointProfileNavigator = StackNavigator(
    {
        CheckpointProfile: { screen: CheckpointProfile },
        CheckpointQueues:{ screen: CheckpointQueues }
    },
    {
        // Default config for all screens
        headerMode: 'none',
    },
);


// Root Navigator for Checkpoints Module
// Defaults to the AllCheckpoints Screen
const CheckpointNavigator = StackNavigator(
    {
        AllCheckpoints: { screen: AllCheckpoints },
        Checkpoint: { screen: CheckpointProfileNavigator }
    },
    {
        // Default config for all screens
        headerMode: 'none',
    },
);

// Root Navigator for App
// Defaults to Dashboard Screen
const PrimaryNav = StackNavigator(
    {
        LaunchScreen: { screen: DashboardScreen },
        Flights: { screen: FlightProfileNavigator },
        Checkpoints: { screen: CheckpointNavigator },
        Garages: { screen: GarageNavigator },
        Help: { screen: HelpScreen },
    },
    {
        // Default config for all screens
        headerMode: 'float',
        initialRouteName: 'LaunchScreen',
        navigationOptions: {
            // Don't set headerStyle here because Flight Navigator can't override parent NavigationOptions
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: 'white',
        },
    },
);

export default PrimaryNav;
