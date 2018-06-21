/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import appStore from '../stores/appStore';
import { observer } from 'mobx-react';

@observer
export default class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
    };
  }

  public componentDidMount() {
    setTimeout(() => {
      appStore.loading = true;
    }, 3000);
  }

  public render() {
    if (!appStore.loading) {
      return (
        <Text>Loading</Text>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          title='click'
          onPress={this.onClick}
        />
        <Text style={styles.instructions}>
          {/* count: {this.state.cnt}{'\n'} */}
          appStore.cnt: {appStore.cnt}
        </Text>
      </View>
    );
  }

  private onClick = () => {
    // this.setState({
    //   cnt: this.state.cnt + 1,
    // });
    appStore.cnt = appStore.cnt + 3;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
