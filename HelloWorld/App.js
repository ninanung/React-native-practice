import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPress: false
    }
    this.onPressInHandle = this.onPressInHandle.bind(this);
    this.onPressOutHandle = this.onPressOutHandle.bind(this);
  }

  onPressInHandle() {
    this.setState({
      isPress: true
    })
  }
  onPressOutHandle() {
    this.setState({
      isPress: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this.onPressInHandle}
          onPressOut={this.onPressOutHandle}
          style={{backgroundColor: 'white'}}
        >
          <View style={this.state.isPress ? [styles.inpress, styles.button] : [styles.outpress, styles.button]}> 
            <Text style={styles.text}>
              {this.state.isPress ? "nope" : "yes"}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inpress: {
    backgroundColor: "red"
  },
  outpress: {
    backgroundColor: "blue"
  },
  text: {
    textAlign: "center"
  },
  button: {
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center'
  }
});

export default App;
