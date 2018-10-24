/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
// import { StringifyOptions } from 'querystring';

type ResultValueProps = {
  label: number,
};
class ResultValue extends Component<ResultValueProps> {
  render() {
    return (
      <Text style={styles.font20}>
        {this.props.label}
      </Text>
    );
  }
}

type CustomButtonProps = {
  switchState: (param: string) => any,
  onClick?: (arg: any) => any,
  switch: string,
  btnTxt: string,
};
class CustomButton extends Component<CustomButtonProps> {
  render() {
    return (
      // <Button
      //   onPress={this.props.switchState}
      //   title={this.props.btnTxt}
      //   style={styles.customButton}
      // />
      <TouchableOpacity
        onPress={this.props.switchState}
        style={styles.customButton}
      >
        <View style={{}}>
          <Text style={[styles.font20, {color: '#fff'}]}>{this.props.btnTxt}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// type Props = {
//   props: any,
// };
type State = {
  value: number,
  label: Object,
  data: Object,
  switch: string,
};
export default class App extends Component<null, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
      label: {
        'a': {
          'a': '미터(M)',
          'b': '인치(Inch)',
          'c': '피트(Feet)'
        },
        'b': {
          'a': '야드(Yard)',
          'b': '마일(Mile)',
          'c': '자'
        },
        'c': {
          'a': '간',
          'b': '정',
          'c': '리'
        }
      },
      data: {
        'a': {
          'a': 0.01,
          'b': 0.3937,
          'c': 0.0328,
        },
        'b': {
          'a': 0.0109,
          'b': 0.000006,
          'c': 0.033,
        },
        'c': {
          'a': 0.0055,
          'b': 0.00009,
          'c': 0.0000025,
        }
      },
      switch: 'a',
    };
  }

  switchState = (param: string) => {
    this.setState({
      switch: param
    })
  }
  calc = (param: number) => {
    return (param * this.state.value).toFixed(4);
  }

  render() {
    console.log('value:', this.state.value);
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.header}>
            <Text style={[styles.font20, {color: '#fff'}]}>
              단위환산기(cm to ...)
            </Text>
            <TextInput
              placeholder="센티미터"
              maxLength={5}
              onChangeText={(value) => this.setState({value})}
            />
          </View>
          <View style={styles.tableCol}>
            <CustomButton
              switchState = {()=>this.switchState('a')}
              switch = "a"
              btnTxt = "미터/인치/피트"
            />
            <CustomButton
              switchState = {()=>this.switchState('b')}
              switch = "b"
              btnTxt = "야드/마일/자"
            />
            <CustomButton
              switchState = {()=>this.switchState('c')}
              switch = "c"
              btnTxt = "간/정/리"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.tableCol}>
              <Text style={styles.font20}>{this.state.label[this.state.switch].a}</Text>
              <Text>{this.calc(this.state.data[this.state.switch].a)}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.font20}>{this.state.label[this.state.switch].b}</Text>
              <Text>{this.calc(this.state.data[this.state.switch].b)}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.font20}>{this.state.label[this.state.switch].c}</Text>
              <Text>{this.calc(this.state.data[this.state.switch].c)}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tableCol: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  font20: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  customButton: {
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }
});
