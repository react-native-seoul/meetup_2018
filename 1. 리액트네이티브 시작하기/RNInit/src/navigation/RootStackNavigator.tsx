import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NavigationService from './NavigationService';
import HomeScreen from '../screen/Home';

class RootNavigator extends React.Component {
  public render() {
    const RootStackNavigator = createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
    });
    return (
      <RootStackNavigator
        ref={(v) => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }}
        onNavigationStateChange={(prevState, currentState) => {
          this.getActiveRouteName(currentState);
        }}
      />
    );
  }
}

export default RootNavigator;
