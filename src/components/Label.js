import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Label extends React.Component {

  render() {
    let asterisk = <Text style={styles.asterisk} key>*</Text>;

    const required = this.props.required ? asterisk : '';
    return (
      <Text
        style={styles.label}
        onPress={this.props.focus}
      >
        {[this.props.text, required]}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  asterisk: {
    color: 'red',
  }
});
