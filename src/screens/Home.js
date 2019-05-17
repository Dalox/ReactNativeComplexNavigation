import Default from '../styles/Default';
import Colors from '../styles/Colors';
import React, { Component } from 'react';
import {Button,Text, TouchableOpacity, Platform, View} from 'react-native';

import { NavigationScreenProps } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
  }

class HomeScreen extends Component<Props, Object> {
    static navigationOptions = ({navigation}: NavigationScreenProps) => ({
        headerTitle: 'Home',
        headerLeft: Platform.select({
            ios: null,
            android: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Text>Toogle</Text>
                </TouchableOpacity>
            )
        })
    });
    render() {
        const {navigate} =this.props.navigation;
        return(
            <View style={Default.container}>
                <Text>HomeScreen</Text>
                <Button title="Details" onPress={() => navigate("DetailsScreen")} />
                <Button title="Options" onPress={() => navigate("OptionsScreen")} />
            </View>
        );
    }
}

export default HomeScreen;