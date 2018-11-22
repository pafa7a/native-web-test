import React from 'react';
import {
  StyleSheet, Text,
  TextInput,
  View,
} from 'react-native';
import Label from './Label'
import Button from './Button'
import {Actions} from 'react-native-router-flux'

export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeat_password: '',
    };
  }
  onSubmit() {
    console.log(this.state);
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
            ref={(input) => this.email = input}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => this.password.focus()}
            underlineColorAndroid='transparent'
          />

          <Label
            focus={() => this.password.focus()}
            text='Password'
            required={true}
          />
          <TextInput
            style={styles.input}
            ref={(input) => this.password = input}
            returnKeyType='go'
            secureTextEntry={true}
            onSubmitEditing={() => this.password_repeat.focus()}
            underlineColorAndroid='transparent'
          />
          <Label
            focus={() => this.password_repeat.focus()}
            text='Repeat password'
            required={true}
          />
          <TextInput
            style={styles.input}
            ref={(input) => this.password_repeat = input}
            returnKeyType='go'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
          <Button
            title='Register'
            click={() => this.onSubmit.bind(this)}
          />
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
});
