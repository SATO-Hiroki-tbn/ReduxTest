import React, { Component } from 'react';
import { View, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './action.js';

class IncrementButton extends Component {
  render() {
    return (
      <View>
        <Text>{ this.props.counter }</Text>
        <Button title="+" onPress={ this.props.incrementCount() } />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);
