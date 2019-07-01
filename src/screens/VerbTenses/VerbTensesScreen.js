import styles from './styles'
import React, { PureComponent } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { DEEP_BLUE } from '../../../constants'
import { NavigationScreenProps } from 'react-navigation'

export default class VerbTensesScreen extends PureComponent<NavigationScreenProps> {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.item.title
    })

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={DEEP_BLUE}
                    barStyle='light-content' />
                <Text>Дополнительная информация</Text>
            </View>
        )
    }
}