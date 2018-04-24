import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="Touch"
                    onPress={() => this.props.navigation.navigate('Touch')}
                ></Button>
                <Button
                    title="BookList"
                    onPress={() => this.props.navigation.navigate('BookList')}
                ></Button>
          </View>
        )
    }
}

export default Home;