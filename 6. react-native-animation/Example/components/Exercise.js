import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  KeyboardAvoidingView,
  ImageBackground, 
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Background from "../imgs/drink.jpg";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedKeyboardAvoidingView = Animated.createAnimatedComponent(KeyboardAvoidingView);

const createAnimationStyle = (animation) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0],
  });

  return {
    opacity: animation,
    transform : [{ 
      translateY 
    }]
  }
};

export default class Exercise extends Component {
  state = {
    animation: new Animated.Value(0),
    email: new Animated.Value(0),
    password: new Animated.Value(0),
    button: new Animated.Value(0),
  };

  componentDidMount = () => {
    Animated.sequence([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1800,
      }),
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 500,
      }),
      Animated.stagger(200, [
        Animated.timing(this.state.email, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.password, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.button, {
          toValue: 1,
          duration: 200
        }),
      ])
    ]).start()
  }

  render() {
    const coverHeightInterpolate = this.state.animation.interpolate({
      inputRange: [0, .4, 1],
      outputRange: ["100%", "100%", "0%"],
      extrapolate: 'clamp'
    });

    const coverOpacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, .4, 1],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })

    const loginWrapbgColorInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: ['rgba(139, 219, 219, 0)', 'rgba(255, 255, 255, .5)'],
    });

    const loginWrapTranslateYInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [-30, 0],
      extrapolate: 'clamp',
    });

    const titleOpacityInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0, 1],
    });

    const coverStyles = {
      height : coverHeightInterpolate,
      opacity: coverOpacityInterpolate,
    }
    
    const loginWrapStyles ={
      backgroundColor: loginWrapbgColorInterpolate,
      transform: [
        { translateY: loginWrapTranslateYInterpolate },
      ]
    };

    const titleStyle = {
      opacity: titleOpacityInterpolate
    };

    const emailStyle = createAnimationStyle(this.state.email);
    const passwordStyle = createAnimationStyle(this.state.password);
    const buttonStyle = createAnimationStyle(this.state.button);

    return (
      <View style={styles.container}>
        <ImageBackground
          style={[styles.box]} 
          source={Background}
        >
          <AnimatedKeyboardAvoidingView 
            style={[styles.loginWrap, loginWrapStyles]} 
            behavior="position" 
            enabled
          >
            <View style={styles.loginView}>
              <Animated.Text style={[styles.title, titleStyle]}>React Native Seoul</Animated.Text>
              
              <AnimatedTextInput
                style={[styles.textInput, emailStyle]}
                placeholder='Email'
              />
              <AnimatedTextInput
                style={[styles.textInput, passwordStyle]}
                placeholder='Password'
                secureTextEntry
              />

              <TouchableOpacity>
                <Animated.View style={[styles.button, buttonStyle]}>
                  <Text style={styles.buttonText}>Login</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </AnimatedKeyboardAvoidingView>
        </ImageBackground>
        <Animated.View style={[styles.cover, coverStyles]}/>

        <View style={styles.back}>
          <TouchableOpacity onPress={() => {Actions.pop()}}>
            <Text style={{fontSize: 30, color: '#468EFF'}}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
  },
  box: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  loginWrap: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  loginView: {
    flex: 1, 
    alignItems: 'center',
  },
  title: {
    color: '#2063B0',
    fontSize: 30,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  button:{
    marginTop: 13,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8BDBDB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    paddingRight: 45,
    paddingLeft: 45,
  },
  buttonText:{
    color: '#2063B0',
    fontSize: 20,
  },
  textInput: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    padding: 8,
    width: '85%',
    borderWidth: 1,
    borderColor: '#8BDBDB',
  },
  back: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
});
