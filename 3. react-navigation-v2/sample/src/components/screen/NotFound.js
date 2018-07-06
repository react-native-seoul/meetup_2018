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
import { inject } from 'mobx-react/native';

import { ratio } from '../../utils/Styles';
import {
  IC_MASK,
} from '../../utils/Icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

type Props = {
}

type State = {
}

class Page extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Not Found</Text>
      </View>
    );
  }
}

export default Page;
