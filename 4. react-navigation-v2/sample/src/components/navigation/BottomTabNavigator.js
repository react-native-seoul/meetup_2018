import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

import { IC_MASK } from '../../utils/Icons';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
  },
  {
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
        if (!focused) {
          return <Image style={{
            width: 16,
            height: 16,
          }} source={IC_MASK}/>;
        }
        return <Image style={{
          width: 24,
          height: 24,
        }} source={IC_MASK}/>;
      },
    }),
    tabBarLabel: {
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      // showLabel: false,
    },
  }
);

export default BottomTabNavigator;
