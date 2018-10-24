import React, { Component } from 'react';
import { StyleSheet, View, Button, Linking, Platform, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import openMap from 'react-native-open-maps';

export default class Google extends Component {
  state = {
    mapType: 'apple',
  };
  render() {
    const { mapType } = this.state;
    const { data } = this.props;
    const markers = data.map((place, idx) => {
      return (
        <Marker
          key={idx}
          coordinate={{
            title: place.name,
            latitude: Number(place.lat),
            longitude: Number(place.lon),
          }}
          // onPress={() => openMap({ latitude: Number(place.lat), longitude: Number(place.lon) })}
          onPress={() => this.handleOpen(Number(place.lat), Number(place.lon), place.name)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 37.5030682,
            longitude: 127.0222213,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.00621,
          }}
          style={{ width: 320, height: 400 }}
          provider={mapType === 'google' ? PROVIDER_GOOGLE : null}
        >
          {markers}
        </MapView>
        <View>
          <Button onPress={() => this.setState({ mapType: 'apple' })} title='Apple' />
          <Button onPress={() => this.setState({ mapType: 'google' })} title='Google' />
        </View>
      </View>
    );
  }
  handleOpen = (lat, lon, name) => {
    if (Platform.OS === 'ios') {
      const place = `navermaps://?menu=location&lat=${lat}&lng=${lon}&title=${name}`;
      this.openURL(place, (err) => {
        Alert.alert('네이버 지도 연결불가', '네이버 지도 앱이 설치되어 있지 않습니다. 확인을 누르시면 앱스토어에서 네이버 지도앱을 설치하실 수 있습니다.', [
          { text: '취소', onPress: () => {} },
          {
            text: '확인',
            onPress: () => {
              this.openURL('itms-apps://itunes.apple.com/kr/app/id311867728', (err2) => {
                Alert.alert('앱스토어 연결 실패', '네이버 지도 앱스토어에 접속할 수 없습니다.', [ { text: '확인', onPress: () => {} } ]);
              });
            },
          },
        ]);
      });
    } else {
      name = encodeURIComponent(name);
      this.openURL(`geo:${lat},${lon}?q=${name}`);
    }
  };
  openURL = (link, callback) => {
    Linking.openURL(link).catch((err) => {
      if (callback !== undefined) {
        callback(err);
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
