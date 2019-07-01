import styles from './styles'
import React, { PureComponent } from 'react'
import { ScrollView, View, Text, StatusBar } from 'react-native'
import TitleCard from '../../components/TitleCard'
import { DEEP_BLUE } from '../../../constants'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

class VerbScreen extends PureComponent<NavigationScreenProps> {

    render() {
        const data = this.props.navigation.state.routeName === 'VerbScreen2' ? this.props.userData.data.userVerb : this.props.userData.data.defaultVerb
        const {container, notificationContainer, labelStyle} = styles
        /** Переделать в отдельную функцию, которая возвращает компонент **/
        if (data.length > 0) {
            return (
                <ScrollView>
                    <StatusBar
                        backgroundColor={DEEP_BLUE}
                        barStyle='light-content' />
                    <View style={container}>
                        {data.map(item => (
                            <TitleCard
                                title={item.title}
                                key={item.id}
                                onPress={() => this.props.navigation.navigate('VerbTensesScreen', { item })}
                            />
                        ))}
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <View style={notificationContainer}>
                    <Text style={labelStyle}>Глаголы отсутствуют</Text>
                </View>
            );
        }
    }
}
/** Переделать **/
const mapStateToProps = state => ({
    userData: {
        user: state.user.user,
        data: state.user.data
    }
})
export default connect(mapStateToProps)(VerbScreen)
