import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import appStore from '../../stores/appStore';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';

const routeConfig = {
  Intro: {
    screen: IntroScreen,
    path: 'Intro',
  },
  NotFound: {
    screen: NotFoundScreen,
    path: 'NotFound',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  header: null,
  headerMode: 'none',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  transitionConfig: () => ({ screenInterpolator:
    appStore.rootNavigatorActionHorizontal
      ? StackViewStyleInterpolator.forHorizontal
      : StackViewStyleInterpolator.forVertical,
  }),
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

@observer
class RootNavigator extends React.Component {
  static router = RootStackNavigator.router;

  render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;
