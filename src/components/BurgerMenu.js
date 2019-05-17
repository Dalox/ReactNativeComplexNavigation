import Default from '../styles/Default';
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Colors} from '../styles/Colors';
import {ScrollView, Button} from 'react-native';
import {DrawerItems, SafeAreaView} from 'react-navigation';

class BurgerMenu extends Component {
    render() {
        return (
            <SafeAreaView style={Default.container} forceInset={{top:"always", horizontal:"never"}}>
                <ScrollView style={Default.container}>
                    <DrawerItems {...this.props}/>
                </ScrollView>
                <Button title="LogOut"/>
            </SafeAreaView>
        );
    }
}

export default BurgerMenu;