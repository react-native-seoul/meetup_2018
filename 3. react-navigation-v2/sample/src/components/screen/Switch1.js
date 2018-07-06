// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';
import Button from '../shared/Button';
import NavigationService from '../navigation/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dodgerBlue,
    flexDirection: 'column',
    alignItems: 'center',
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
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 80,
        }}>Switch Screen 1</Text>
        <Button onPress={() => this.props.navigation.navigate('Switch2')}>
          go Switch Screen 2
        </Button>
      </View>
    );
  }
}

export default Screen;
