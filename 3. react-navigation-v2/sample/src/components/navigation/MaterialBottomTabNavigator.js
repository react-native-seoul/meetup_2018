import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
  AsyncStorage,
  BackHandler,
  StyleSheet,
} from 'react-native';

import { ratio, colors, statusBarHeight } from '../../utils/Styles';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { IC_MASK } from '../../utils/Icons';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

const MyNavigator = createMaterialBottomTabNavigator({
  Screen1,
  Screen2,
  Screen3,
  Screen4,
}, {
  initialRouteName: 'Screen1',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      // let iconName;
      // if (routeName === 'Scree1') {
      //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Screen2') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Image style={{
        width: 24,
        height: 24,
      }} source={IC_MASK}/>;
    },
  }),
});

export default MyNavigator;
