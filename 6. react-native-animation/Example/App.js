import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import AnimatedValue from './components/AnimatedValue';
import ConfigureAnimations from './components/ConfigureAnimations';
import Easing from './components/Easing';
import ValueXY from './components/ValueXY';
import Parallel from './components/Parallel';
import Interpolate from './components/Interpolate';
import Extrapolate from './components/Extrapolate';
import Exercise from './components/Exercise';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene 
            key='home'
            component={Home}
            title='Home'
            hideNavBar
          />
          <Scene 
            key='AnimatedValue'
            component={AnimatedValue}
            title='AnimatedValue'
            hideNavBar
          />
          <Scene 
            key='ConfigureAnimations'
            component={ConfigureAnimations}
            title='ConfigureAnimations'
            hideNavBar
          />
          <Scene 
            key='Easing'
            component={Easing}
            title='Easing'
            hideNavBar
          />
          <Scene 
            key='ValueXY'
            component={ValueXY}
            title='ValueXY'
            hideNavBar
          />
          <Scene 
            key='Parallel'
            component={Parallel}
            title='Parallel'
            hideNavBar
          />
          <Scene 
            key='Interpolate'
            component={Interpolate}
            title='Interpolate'
            hideNavBar
          />
          <Scene 
            key='Extrapolate'
            component={Extrapolate}
            title='Extrapolate'
            hideNavBar
          />
          <Scene 
            key='Exercise'
            component={Exercise}
            title='Exercise'
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
