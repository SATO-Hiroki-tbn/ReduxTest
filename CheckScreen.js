import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './action.js';
import { styles } from './styles.js';

class CheckScreen extends Component {
  static navigationOptions = {
    title: "チェック画面"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.hello }</Text>
      </View>
    );
  }
}

CheckScreen.propTypes = {
  hello: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckScreen);