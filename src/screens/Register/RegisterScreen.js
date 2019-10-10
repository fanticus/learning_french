import React, { PureComponent } from 'react'
import { StatusBar, Text, ScrollView, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import styles from './styles'
import { FormAuthorization } from '../../components'
import { getData, userChanged } from '../../store/actions'

class RegisterScreen extends PureComponent<NavigationScreenProps> {
  authorization = async (username, email, password) => {
    // Авторизоваться, получить данные пользователя, и перейти на главный экран
    this.props.userChanged({ username, email, password })
    const token = ''
    await this.props.getData(token)
    this.setState({
      username: '',
      email: '',
      password: ''
    })
    this.props.navigation.navigate('MainNavigator')
  }

  render() {
    const { viewStyle, welcomeText } = styles
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={viewStyle}>
          <StatusBar backgroundColor="rgba(18, 200, 242, 0.02)" barStyle="dark-content" />
          <Text style={welcomeText}>Создать учетную запись</Text>
          <FormAuthorization authorization={this.authorization} user="new" />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
})

export default connect(
  mapStateToProps,
  { userChanged, getData }
)(RegisterScreen)
