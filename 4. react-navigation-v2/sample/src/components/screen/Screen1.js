// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    marginBottom: 20,
  },
  txtDrawer: {
    color: 'tomato',
    fontSize: 18,
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Screen 1</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Screen2')}
          title='Navigate'
        />
        {
          this.props.navigation.getParam('isDrawer')
            ? <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            ><Text style={styles.txtDrawer}>Open Drawer</Text>
            </TouchableOpacity>
            : null
        }
      </View>
    );
  }
}

export default Screen;
