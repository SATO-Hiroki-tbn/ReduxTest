/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  InputView,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {num: 0}
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} title={"+"} onPress={this._onPlusPress.bind(this)}/>
        <Text style={styles.textNum}>{this.state.num}</Text>
        <Button style={styles.button} title={"-"} onPress={this._onMinusPress.bind(this)}/>
      </View>
    );
  }

  // 「+」ボタン処理
  _onPlusPress(e) {
    this.setState({num: this.state.num+1})
  }

  // 「-」ボタン処理
  _onMinusPress(e) {
    this.setState({num: this.state.num-1})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 200,
    height: 100,
  },
  textNum: {
    fontSize: 40,
  }
});
