import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <RegisterForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
