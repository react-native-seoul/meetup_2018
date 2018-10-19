import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-daummap';

export default class Daum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 37.5030682,
            longitude: 127.0222213,
            zoomLevel: 2,
          }}
          mapType={'Standard'}
          style={{width: 320, height: 400 }}
          markers={[
            {latitude: 37.5030682, longitude: 127.0222213, title: '테스트', draggable: true},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
