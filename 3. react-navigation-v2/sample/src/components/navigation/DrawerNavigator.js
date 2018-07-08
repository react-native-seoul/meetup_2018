import React from 'react';
import {
  Image,
  Button,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';

import { IC_MASK } from '../../utils/Icons';

class MyDrawer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={IC_MASK}
        style={{
          width: 24,
          height: 24,
        }}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyApp = createDrawerNavigator({
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Notifications: {
    screen: MyDrawer,
  },
});

export default MyApp;
