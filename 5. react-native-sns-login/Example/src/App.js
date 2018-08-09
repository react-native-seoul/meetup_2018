'use strict';

import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert, TouchableHighlight, Button } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native';
import appStore from './stores/appStore';
import RNKakaoLogins from 'react-native-kakao-logins';
import NativeButton from 'apsl-react-native-button';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginButton } from 'react-native-fbsdk';

class App extends React.Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      userInfo: null,
      error: null,
    };
    GoogleSignin.configure({
      iosClientId: 'ios key 가 들어갑니다 google에서 받은 .plist 에서 붙여넣기하세요!', // only for iOS
    });

    const signIn = async () => {
  try {
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('error', error);
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('error', error);
      // operation (f.e. sign in) is in progress already
    } else {
      Alert.alert('google', this.userInfo);
      // some other error happened
    }
  }
};
  }
  render() {
    return (
      <Provider store={ appStore }>
        <View style={styles.container}>
          <LoginButton />
          <Button
            onPress={() => RNKakaoLogins.login((err, result) => {
              if (err) {
                Alert.alert('error', err);
                return;
              }
              Alert.alert('result', result);
            })}
            title="kakaoLogin">
          </Button>
          <Button
            onPress={() => RNKakaoLogins.logout((err, result) => {
              if (err) {
                Alert.alert('error', err);
                return;
              }
              Alert.alert('result', result);
            })}
            title="kakaoLogout">
          </Button>
          <Button
            onPress={() => GoogleSignin.signIn((err, result) => {
              if (err) {
                Alert.alert('error', err);
                return;
              }
              Alert.alert('result', result);
            })}
            title="googlelogin">
          </Button>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default App;
