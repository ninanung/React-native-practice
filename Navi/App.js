import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BookList from './components/BookList.js';
import Touch from './components/Touch.js';
import Home from './components/Home.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Touch: {
      screen: Touch
    },
    BookList: {
      screen: BookList
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}