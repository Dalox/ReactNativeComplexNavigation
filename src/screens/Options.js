import Default from '../styles/Default';
import Colors from '../styles/Colors';
import React, { Component } from 'react';
import {Text, View} from 'react-native';

class OptionsScreen extends Component {
    render() {
        return(
            <View style={Default.container}>
                <Text>OptionsScreen</Text>
            </View>
        );
    }
}

export default OptionsScreen;