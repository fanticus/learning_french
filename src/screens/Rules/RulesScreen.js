import React, { PureComponent } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { DEEP_BLUE } from '../../constants'
import styles from './styles'

export default class RulesScreen extends PureComponent<NavigationScreenProps> {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={DEEP_BLUE} barStyle="light-content" />
        <Text>Правила</Text>
      </View>
    )
  }
}
