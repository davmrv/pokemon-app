/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './views/Home';
import Pokemon from './views/Pokemon';

const MainNavigator = createStackNavigator({
  Home,
  Pokemon,
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

export default App;

