import React from 'react';
import {
  StyleSheet, Text,
  TextInput,
  View,
} from 'react-native';
import Label from './Label'
import Button from './Button'
import {Actions} from 'react-native-router-flux'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'pavel.tsandev@ffwagency.com',
      password: 'Candev0460',
    };
  }


  goToRegister() {
    Actions.register();
  }

  onSubmit() {
    console.warn('Email: ' + this.state.email);
    console.warn('Password: ' + this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Label
            focus={() => this.email.focus()}
            text='Email'
            required={true}
          />
          <TextInput
            style={styles.input}
            ref={(element) => this.email = element}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => this.password.focus()}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            underlineColorAndroid='transparent'
          />

          <Label
            focus={() => this.password.focus()}
            text='Password'
            required={true}
          />
          <TextInput
            style={styles.input}
            ref={(element) => this.password = element}
            returnKeyType='go'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid='transparent'
          />
          <Button
            title='Login'
            click={() => this.onSubmit.bind(this)}
          />
        </View>

        <View style={styles.signUpWrapper}>
          <Text onPress={this.goToRegister}>Don't have an account yet?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  form: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  signUpWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20,
  }
});
