import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';

import {BurgerMenu} from '../components/BurgerMenu';

import {Platform, ScrollView, Button} from 'react-native';
import {DrawerItems, SafeAreaView} from 'react-navigation';

import {createBottomTabNavigator, createDrawerNavigator, createStackNavigator,createSwitchNavigator, createAppContainer} from 'react-navigation';

const HomeStack = createStackNavigator({
    DetailsScreen,
    HomeScreen,
    OptionsScreen
},{
    initialRouteName: "HomeScreen"
});

HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    drawerLabel:"Home",
}

SettingsScreen.navigationOptions = {
    tabBarLabel: "Setting",
    drawerLabel:"Setting",
}

/*const BurgerMenu = props => (
    <SafeAreaView style={Default.container} forceInset={{top:"always", horizontal:"never"}}>
        <ScrollView style={Default.container}>
            <DrawerItems {...this.props}/>
        </ScrollView>
        <Button title="LogOut"/>
    </SafeAreaView>
    );*/

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({HomeStack,SettingsScreen}),
    android: createDrawerNavigator({HomeStack,SettingsScreen},{contentComponent:BurgerMenu})
})

const RootSwitch = createSwitchNavigator(
    {LoadingScreen, MainNavigator},
    {initialRouteName: 'MainNavigator'}
);

export default createAppContainer(RootSwitch);