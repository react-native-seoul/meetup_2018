// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {

};
type State = {
  text: string;
}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'TextInput',
  };

  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            backgroundColor: 'white',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            minWidth: 100,
            paddingHorizontal: 5,
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Screen;
