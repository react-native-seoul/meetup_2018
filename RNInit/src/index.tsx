// import { observer } from 'mobx-react/native';
import React from 'react';
import { Provider } from 'mobx-react';
import appStore from './stores/appStore';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';

// import { ratio } from '@utils/Styles';
// import { ICONS } from '@utils/Icons';

class App extends React.Component {
  public render() {
    return (
      <Provider
        store={ appStore }
      >
        <View style={styles.container}>
          <RootStackNavigator />
        </View>
      </Provider>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
