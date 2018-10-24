import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback, 
  Dimensions, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');

export default class ConfigureAnimataions extends Component {
  state = {
    decay: new Animated.Value(0),
    timing: new Animated.Value(0),
    spring: new Animated.Value(0),
  };

  decayAnimation = () => {
      Animated.decay(this.state.decay, {
          velocity: 1,
          deceleration: 0.998,
      }).start(() => {
        this.state.decay.setValue(0);
      });
  };

  timingAnimation = () => {
    Animated.timing(this.state.timing, {
      toValue: height-300,
      duration: 1500,
    }).start(() => {
      this.state.timing.setValue(0);
    });
  };

  springAnimation = () => {
      Animated.spring(this.state.spring, {
          toValue: height-300,
          friction: 3,
          tension: 50,
      }).start(() => {
        this.state.spring.setValue(0);
      });
  }

  render() {
    const decayStyle = {
        transform: [
          { translateY: this.state.decay },
        ]
    };

    const timingStyle = {
      transform: [
        { translateY: this.state.timing },
      ]
    };

    const springStyle = {
        transform: [
          { translateY: this.state.spring },
        ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableWithoutFeedback onPress={this.decayAnimation}>
            <Animated.View style={[styles.decay, decayStyle]} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.timingAnimation}>
            <Animated.View style={[styles.timing, timingStyle]} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.springAnimation}>
            <Animated.View style={[styles.spring, springStyle]} />
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
  decay: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 100,
    left: 50,
  },
  timing: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 100
  },
  spring: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 100,
    right: 50,
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
