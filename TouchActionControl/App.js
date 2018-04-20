import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';

class App extends Component {

  panResponder = {};
  pLeft = 0;
  pTop = 0;
  circleStyle = {};
  circle = null;

  constructor(props) {
    super(props);
    this.state = {
      stateID: "",
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: true,
      onMoveShouldSetPanResponder: true,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
    this.pLeft = 20;
    this.pTop = 80;
    this.circleStyle = {
      style: {
        left: this._pLeft,
        top: this._pTop
      }
    }
  }

  componentDidMount() {
    this.updatePosition();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <Text>

        </Text>
      </View>
    )
  }
}

export default App;