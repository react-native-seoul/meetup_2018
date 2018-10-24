import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback, 
  Dimensions, 
  Text, 
  Easing,
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

export default class Parallel extends Component {
  state = {
    ball: new Animated.ValueXY(),
  };

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.ball.y, {
        toValue: height-100,
        duration: 1500,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.ball.x, {
        toValue: width/2,
        duration: 1500,
        easing: Easing.quad
      })
    ]).start(() => {
      this.state.ball.x.setValue(0);
      this.state.ball.y.setValue(0);
    });
  };

  render() {
    const ballStyle = {
      transform: this.state.ball.getTranslateTransform()
    };

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.circle, ballStyle]} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => {Actions.pop()}}>
            <Text style={{fontSize: 30}}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 50
  },
  box: {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
});
