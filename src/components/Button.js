import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Button extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.click()}
      >
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6b00',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700'
  }
});
