import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';

import { store } from './store.js';
import { styles } from './styles.js';
import Hello from './Hello.js';
import CheckScreen from './CheckScreen.js';
import HomeScreen from './HomeScreen.js';
import HttpScreen from './HttpScreen.js';

/* 画面を変数で宣言し、コンポーネント(AppNavigator)に保持する
 * key - value で対応
 */
const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Hello: {screen: Hello},
  Check: {screen: CheckScreen},
  Http: {screen: HttpScreen}
});

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;