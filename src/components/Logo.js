import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 181,
    height: 72,
  }
});
