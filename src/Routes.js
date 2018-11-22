import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'
import Login from "./pages/Login";
import {StyleSheet} from "react-native";
import Register from "./pages/Register";

export default class Routes extends React.Component {
  render() {
    return (
      <Router sceneStyle={styles.container}>
        <Stack
          key="root"
          hideNavBar={false}
          backButtonTintColor='#fff'
          navigationBarStyle={styles.nav}
          titleStyle={styles.title}
          navBarButtonColor='#fff'
        >
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Register} title="Register"/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
  },
  title: {
    color: '#fff',
  },
  nav: {
    backgroundColor: '#ff6b00',
  }
});