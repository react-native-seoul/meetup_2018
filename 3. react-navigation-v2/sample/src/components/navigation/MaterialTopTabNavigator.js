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
import { createMaterialTopTabNavigator } from 'react-navigation';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

const MyNavigator = createMaterialTopTabNavigator(
  {
    Screen1,
    Screen2,
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      header: null,
      headerMode: 'none',
      tabBarVisible: true,
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        switch (routeName) {
          //
        }
        return <Text>{routeName}</Text>;
      },
    }),
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'rgb(12,157,197)',
      inactiveTintColor: 'black',
      indicatorStyle: {
        backgroundColor: 'rgb(102,134,205)',
      },
      labelStyle: {
        fontSize: 14 * ratio,
        color: 'tomato',
        // marginTop: Platform.OS === 'ios' ? 8 * ratio : 6 * ratio,
        // fontFamily: 'NotoSans-Bold',
      },
      tabStyle: {
        paddingTop: statusBarHeight,
        height: Platform.select({
          ios: (44 + statusBarHeight) * ratio,
          android: (60 + statusBarHeight) * ratio,
        }),
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {
        backgroundColor: 'white',
      },
      statusBarStyle: 'light-content',
    },
  },
);

export default MyNavigator;
