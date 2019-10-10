import React, { PureComponent } from 'react'
import { View, ActivityIndicator, StatusBar, Image, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './styles'
import { DEEP_BLUE } from '../../constants'

export default class LoadingScreen extends PureComponent<NavigationScreenProps> {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen')
    }, 2000)
  }

  render() {
    const { container, logoImage, textIndicator } = styles
    /** Доработать лого на векторную картинку * */
    return (
      <View style={container}>
        <StatusBar backgroundColor="rgba(18, 200, 242, 0.02)" barStyle="dark-content" />
        <Image style={logoImage} source={{ uri: 'https://i.ibb.co/vxT8Ccw/logo2.png' }} />
        <ActivityIndicator size="large" color={DEEP_BLUE} />
        <Text style={textIndicator}>Загрузка...</Text>
      </View>
    )
  }
}
