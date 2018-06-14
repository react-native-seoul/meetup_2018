import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  facebookLogin = async () => {
    console.log('onPress');
    const result: any = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1868642810112992',
      { permissions: [ 'email', 'public_profile' ] },
    );
  
    if (result.type !== 'success') {
      return false;
    }
  
    console.log('token: ' + result.token);

    const resultToken: any = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture,email&access_token=${result.token}`);
    const user = JSON.parse(resultToken._bodyInit);
    console.log(user);
  }

  recordAudio = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      console.log(result);

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      console.log(e);
      return {error: true};
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          // onPress={this.facebookLogin}
          onPress={this.recordAudio}
          title='Click Me!!!'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
