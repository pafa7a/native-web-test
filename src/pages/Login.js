import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <LoginForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
