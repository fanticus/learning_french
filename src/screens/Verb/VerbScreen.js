import React, { PureComponent } from 'react'
import { ScrollView, View, Text, StatusBar, ActivityIndicator } from 'react-native'
import ActionButton from 'react-native-action-button'
import IconMyAdd from 'react-native-vector-icons/Feather'
import IconAdd from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import styles from './styles'
import { DEEP_BLUE, WHITE } from '../../constants'
import { TitleCard } from '../../components'
import { getFilterChanged } from '../../store/actions'

class VerbScreen extends PureComponent<NavigationScreenProps> {
  setDataList = () => {
    const { filter, data, navigation } = this.props
    const { userVerb, defaultVerb } = data
    const DataArr = navigation.state.routeName === 'VerbScreen2' ? userVerb : defaultVerb
    const { container, notificationContainer, labelStyle, textIndicator } = styles
    const ActionIcon = () => {
      if (navigation.state.routeName === 'VerbScreen2') {
        return <IconMyAdd name="plus" color={WHITE} size={20} />
      }
      return <IconAdd name="database-plus" color={WHITE} size={20} />
    }

    /** Переделать в отдельную функцию, которая возвращает компонент * */
    if (data.isLoading) {
      return (
        <View style={notificationContainer}>
          <StatusBar backgroundColor={DEEP_BLUE} barStyle="light-content" />
          <ActivityIndicator size="large" color={DEEP_BLUE} />
          <Text style={textIndicator}>Синхронизация...</Text>
        </View>
      )
    }

    if (DataArr.length > 0) {
      return (
        <View style={container}>
          <StatusBar backgroundColor={DEEP_BLUE} barStyle="light-content" />
          <ScrollView style={container}>
            {DataArr.map(item => (
              <TitleCard
                title={item.title}
                key={item.id}
                id={item.id}
                filterData={filter}
                onPress={() => this.onPressList(item)}
                onLongPress={this.onLongPressList}
              />
            ))}
          </ScrollView>
          <ActionButton
            renderIcon={() => ActionIcon()}
            buttonColor={DEEP_BLUE}
            onPress={() => {
              console.log('hi')
            }}
          />
        </View>
      )
    }
    return (
      <View style={notificationContainer}>
        <StatusBar backgroundColor={DEEP_BLUE} barStyle="light-content" />
        <Text style={labelStyle}>Глаголы отсутствуют</Text>
        <ActionButton
          renderIcon={() => ActionIcon()}
          buttonColor={DEEP_BLUE}
          onPress={() => {
            console.log('тест')
          }}
        />
      </View>
    )
  }

  onPressList = (item, screenVerb) => {
    this.props.navigation.navigate('VerbTensesNavigator', { item, screenVerb })
  }

  onLongPressList = id => {
    // вынести в отдельные функции
    const { filter, data } = this.props
    let filterObj
    if (filter[id]) {
      if (Object.keys(filter).length === 1) {
        filterObj = {}
      } else {
        filterObj = { ...filter }
        delete filterObj[id]
      }
    } else {
      const { userVerb, defaultVerb } = data
      const DataArr = [...userVerb, ...defaultVerb]
      const choosenDoc = DataArr.find(doc => doc.id === id)
      const { indicatif, subjonctif, conditionnel } = choosenDoc.inclinations
      const idIndicatifArr = indicatif.conjugations.map(pronounObj => pronounObj.id)
      const idSubjonctifArr = subjonctif.conjugations.map(pronounObj => pronounObj.id)
      const idConditionnelArr = conditionnel.conjugations.map(pronounObj => pronounObj.id)
      filterObj = {
        ...filter,
        [choosenDoc.id]: {
          indicatif: idIndicatifArr,
          subjonctif: idSubjonctifArr,
          conditionnel: idConditionnelArr
        }
      }
    }
    this.props.getFilterChanged(filterObj)
  }

  render() {
    return this.setDataList()
  }
}

const mapStateToProps = state => ({
  data: state.data,
  filter: state.filter
})
export default connect(
  mapStateToProps,
  { getFilterChanged }
)(VerbScreen)
