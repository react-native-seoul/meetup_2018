// @flow
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react/native';

import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import User from '../../models/User';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';
import NavigationService from '../navigation/NavigationService';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    color: 'black',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 2,
    width: 240,
    height: 52,
    borderColor: 'white',
    marginTop: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  store: User;
};
type State = {
  isLoggingIn: boolean;
}

@inject('store') @observer
class Page extends Component<Props, State> {
  static navigationOptions = {
    headerTitle: <Text style={styles.titleTxt}>React Navigation V2</Text>,
  };

  timer: any;

  state = {
    isLoggingIn: false,
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={{
          backgroundColor: colors.background,
        }}
      >
        <Button
          onPress={() => NavigationService.navigate('SwitchNavigator')}
          style={[
            styles.btn,
            {
              marginTop: 50,
            },
          ]}
        >Switch Navigator</Button>
        <Button
          style={styles.btn}
          onPress={() => NavigationService.navigate('StackNavigator')}
        >Stack Navigator</Button>
        <Button
          style={styles.btn}
          onPress={() => NavigationService.navigate('MaterialTopTabNavigator')}
        >MaterialTopTabNavigator</Button>
        <Button
          style={styles.btn}
          onPress={() => NavigationService.navigate('BottomTabNavigator')}
        >BottomTab Navigator</Button>
        <Button
          style={styles.btn}
          onPress={() => NavigationService.navigate('MaterialBottomTabNavigator')}
        >MaterialBottomTabNavigator</Button>
        <Button
          style={styles.btn}
          onPress={() => NavigationService.navigate('DrawerNavigator', { isDrawer: true })}
        >Drawer Navigator</Button>
      </ScrollView>
    );
  }
}

export default Page;
