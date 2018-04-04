import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Hello from './Hello.js';
import reducer from './reducer.js';

// Storeにstateを保持。(初期状態)
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      // 一番上の親コンポーネントをReduxと連携
      <Provider store={ store }>
        <View style={styles.container}>
          <Hello />
        </View>
      </Provider>
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

export default App;
