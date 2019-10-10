import React, { PureComponent } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { FormAuthorization } from '../../components'
import styles from './styles'
import { userChanged, getData } from '../../store/actions'

class AuthorizationScreen extends PureComponent<NavigationScreenProps> {
  authorization = (username, password) => {
    // Авторизоваться, получить данные пользователя, и перейти на главный экран
    this.props.userChanged({ username, password })
    const token = ''
    this.props.getData(token)
    this.setState({
      username: '',
      password: ''
    })
    this.props.navigation.navigate('MainNavigator')
  }

  passwordReset(props) {
    // Тут будет popup об отправке письма на почту о восстановлении пароля
  }

  render() {
    const { viewStyle, welcomeText } = styles
    return (
      <View style={viewStyle}>
        <StatusBar backgroundColor="rgba(18, 200, 242, 0.02)" barStyle="dark-content" />
        <Text style={welcomeText}>С возвращением!</Text>
        <FormAuthorization authorization={this.authorization} passwordReset={this.passwordReset} />
      </View>
    )
  }
}
/** Переделать * */
const mapStateToProps = state => ({
  user: state.user,
  data: state.data
})

export default connect(
  mapStateToProps,
  { userChanged, getData }
)(AuthorizationScreen)
