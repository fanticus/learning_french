import React, { PureComponent } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import { HelperText } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import { DEEP_BLUE } from '../../constants'
import styles from './styles'

export default class FormAuthorization extends PureComponent {
  state = {
    username: '',
    password: '',
    email: '',
    errorLogin: false,
    errorPassword: false,
    errorEmail: false
  }

  checkData = () => {
    /** Переделать, когда будет готов back-end * */
    const { state, props } = this
    const { username, email, password } = state
    const CheckEmail = email.trim().length > 0
    const CheckPass = password.trim().length > 0
    if (props.user) {
      const CheckUser = username.trim().length > 0
      if (CheckEmail && CheckUser && CheckPass) {
        props.authorization(username, email, password)
      }
      this.setState({ errorLogin: !CheckUser })
    } else if (CheckEmail && CheckPass) {
      props.authorization(email, password)
    }
    this.setState({
      errorEmail: !CheckEmail,
      errorPassword: !CheckPass
    })
  }

  setUsername = username => {
    this.setState({ username })
  }

  setPassword = password => {
    this.setState({ password })
  }

  setEmail = email => {
    this.setState({ email })
  }

  passwordReset = () => {
    this.props.passwordReset()
  }

  render() {
    const { username, password, email, errorLogin, errorPassword, errorEmail } = this.state
    const { user } = this.props
    const textLoginButton = user ? 'ЗАРЕГИСТРИРОВАТЬСЯ' : 'ВОЙТИ'
    const { viewStyle, viewInput, errorInput, input, button, textButton, passwordResetButton } = styles
    return (
      <View style={viewStyle}>
        <View>
          {user ? (
            <View style={viewInput}>
              <Icon name="user" color={DEEP_BLUE} size={20} />
              <TextInput
                style={input}
                value={username}
                spellCheck={false}
                placeholder="Логин"
                textContentType="username"
                onChangeText={this.setUsername}
                maxLength={15}
                underlineColorAndroid="transparent"
                placeholderTextColor={DEEP_BLUE}
              />
            </View>
          ) : null}
          {user ? (
            <HelperText type="error" style={errorInput} visible={errorLogin}>
              Введите логин!
            </HelperText>
          ) : null}
          <View style={viewInput}>
            <Icon name="mail" color={DEEP_BLUE} size={20} />
            <TextInput
              style={input}
              value={email}
              spellCheck={false}
              placeholder="Электронная почта"
              textContentType="username"
              onChangeText={this.setEmail}
              maxLength={15}
              underlineColorAndroid="transparent"
              placeholderTextColor={DEEP_BLUE}
            />
          </View>
          <HelperText type="error" style={errorInput} visible={errorEmail}>
            Введите адрес электронной почты!
          </HelperText>
          <View style={viewInput}>
            <Icon name="lock" color={DEEP_BLUE} size={20} />
            <TextInput
              style={input}
              value={password}
              spellCheck={false}
              secureTextEntry
              placeholder="Пароль"
              textContentType="password"
              onChangeText={this.setPassword}
              maxLength={20}
              underlineColorAndroid="transparent"
              placeholderTextColor={DEEP_BLUE}
            />
          </View>
          <HelperText type="error" style={errorInput} visible={errorPassword}>
            Введите пароль!
          </HelperText>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={button} onPress={this.checkData}>
          <Text style={textButton}>{textLoginButton}</Text>
        </TouchableOpacity>
        {!user ? (
          <TouchableOpacity activeOpacity={0.8} style={passwordResetButton} onPress={this.passwordReset}>
            <Text>Забыли пароль?</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    )
  }
}
