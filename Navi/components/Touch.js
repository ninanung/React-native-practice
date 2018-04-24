import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';

class Touch extends Component {

  panResponder = {};
  pLeft = 0;
  pTop = 0;
  circleStyle = {};
  circle = null;

  constructor(props) {
    super(props);
    this.state = {
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
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
    this.pLeft = 20;
    this.pTop = 80;
    this.circleStyle = {
      style: {
        left: this.pLeft,
        top: this.pTop
      }
    }
  }

  componentDidMount() {
    this.updatePosition();
  }

  handleStartShouldSetPanResponder = (event, gestureState) => {
    return true;
  };

  handleMoveShouldSetPanResponder = (event, gestureState) => {
    return true;
  };

  updatePosition = () => {
    this.circle && this.circle.setNativeProps(this.circleStyle)
  }

  highlight = () => {
    this.circle && this.circle.setNativeProps({
      style: {
        backgroundColor: "blue"
      }
    })
  }

  unHighlight = () => {
    this.circle && this.circle.setNativeProps({
      style: {
        backgroundColor: "red"
      }
    })
  }

  handlePanResponderGrant = (e, gestureState) => {
    this.highlight();
  }

  handlePanResponderMove = (e, gestureState) => {
    this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy
    });
    this.circleStyle.style.left = this.pLeft + gestureState.dx;
    this.circleStyle.style.top = this.pTop + gestureState.dy;
    this.updatePosition();
  }

  handlePanResponderEnd = (e, gestureState) => {
    this.unHighlight();
    this.pLeft += gestureState.dx;
    this.pTop += gestureState.dy;
  }

  render() {
    return(
      <View style={styles.container}>
        <View 
          ref={(circle) => { this.circle = circle; }}
          style={styles.circle}{...this.panResponder.panHandlers}>
        </View>
        <Text>
          dx: {this.state.dx}, dy: {this.state.dy}, vx: {this.state.vx}, vy: {this.state.vy}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 20 / 2,
    backgroundColor: "red",
    position: "absolute",
    left: 100,
    top: 100
  },
  container: {
    flex: 1,
    paddingTop: 64
  }
})

export default Touch;