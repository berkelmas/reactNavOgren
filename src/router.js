import React from 'react';
import {TabNavigator, createStackNavigator, createBottomTabNavigator, DrawerNavigator} from 'react-navigation';

import {Icon} from 'react-native-elements';

import Home from './screens/Home';
import Deneme from './screens/Deneme';

export const TabsDeneme = createBottomTabNavigator({
        Home : {
            screen : Home,
            navigationOptions : {
                tabBarLabel : 'Ana Sayfa',
                tabBarIcon:({tintColor}) => <Icon size={ 35 } name={ 'list' } color={ tintColor }/>
            }
        },
        Deneme : {
            screen : Deneme,
        }
    },
    {
        initialRouteName : 'Home'
    },
);


export const Tabs = DrawerNavigator({
        Home : {
            screen : Home,
            navigationOptions : {
                tabBarLabel : 'Ana Sayfa',
                tabBarIcon:({tintColor}) => <Icon size={ 35 } name={ 'list' } color={ tintColor }/>
            }
        },
        Deneme : {
            screen : Deneme,
        },
        Bottom : {
            screen : TabsDeneme
        }
    },
    {
        initialRouteName : 'Bottom'
    },
);