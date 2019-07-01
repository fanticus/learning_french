import styles from './styles'
import React, { PureComponent } from 'react'
import {StatusBar, Text, ScrollView, View} from 'react-native'
import FormAuthorization from '../../components/FormAuthorization'
import {NavigationScreenProps} from 'react-navigation'

export default class RegisterScreen extends PureComponent<NavigationScreenProps> {
    /** Добавить reducers **/
  authorization = () => {
      this.props.navigation.navigate('MainNavigator')
  }

  render() {
    const { viewStyle, welcomeText } = styles
    return  (
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={viewStyle}>
            <StatusBar
                backgroundColor={'rgba(18, 200, 242, 0.02)'}
                barStyle='dark-content' />
            <Text style={welcomeText}>Создать учетную запись</Text>
            <FormAuthorization authorization={this.authorization} user={'new'}/>
          </ScrollView>
        </View>
    );
  }
}
