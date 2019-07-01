import styles from './styles'
import React, { PureComponent } from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

export default class LoginScreen extends PureComponent<NavigationScreenProps> {

    render() {
        const {
            view,
            welcomeText,
            nextText,
            button,
            textButton,
            logoImage,
            buttonMain,
            textButtonMain,
        } = styles
        return  (
            <View style={view}>
                <StatusBar
                    backgroundColor={'rgba(18, 200, 242, 0.02)'}
                    barStyle='dark-content' />
                <Image
                    style={logoImage}
                    source={{uri: 'https://i.ibb.co/vxT8Ccw/logo2.png'}} />
                <Text style={welcomeText}>Добро пожаловать!</Text>
                <Text style={nextText}>Войдите или зарегистрируйтесь, чтобы начать</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={buttonMain}
                    onPress={() => this.props.navigation.navigate('AuthorizationScreen')}>
                    <Text style={textButtonMain}>ВОЙТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={button}
                    onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                    <Text style={textButton}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
