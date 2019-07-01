import styles from './styles'
import React, { PureComponent } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { DEEP_BLUE } from '../../../constants'
import { NavigationScreenProps } from 'react-navigation'

export default class RulesScreen extends PureComponent<NavigationScreenProps> {

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={DEEP_BLUE}
                    barStyle='light-content' />
                <Text>Правила</Text>
            </View>
        );
    }
}
