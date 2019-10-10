import React, { PureComponent } from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'
import { getFilterTest } from '../../services'
import { Accordion, PronounCard } from '../../components'
import { DEEP_BLUE, COLOR_LONG_PRESS } from '../../constants'
import { getFilterChanged } from '../../store/actions'

class VerbTensesScreen extends PureComponent<NavigationScreenProps> {

  getComponentHeader = ({ propsData }) => {
    const {
      item: { title, id },
      isShowAccordion
    } = propsData
    const { filter } = this.props
    const idVerb = this.props.navigation.state.params.item.id
    const inclinationsLengthObj = {
      indicatif: 8,
      subjonctif: 4,
      conditionnel: 2
    }
    const visibleIcon = (numberFilter, numberInclination) => {
      if (numberFilter === 0) return null
      const nameIcon = numberFilter === numberInclination ? 'check-circle' : 'check'
      return <Icon name={nameIcon} color={DEEP_BLUE} size={20} style={{ marginRight: 15 }} />
    }
    const { titleHeader, bottomLine } = styles
    let filterLength = 0
    let inclinationLength = 0

    if (Object.keys(filter).length !== 0) {
      const selectedObj = filter[idVerb][this.getProperty()].find(idConjugation => idConjugation === id)
      if (selectedObj) {
        inclinationLength = inclinationsLengthObj[this.getProperty()]
        filterLength = filter[idVerb][this.getProperty()] ? filter[idVerb][this.getProperty()].length : 0
      }
    }

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15
          }}
        >
          {visibleIcon(filterLength, inclinationLength)}
          <Text style={titleHeader}>{title}</Text>
          <Icon name={isShowAccordion ? 'chevron-up' : 'chevron-down'} color={DEEP_BLUE} size={20} />
        </View>
        {!isShowAccordion ? <View style={bottomLine} /> : null}
      </View>
    )
  }

  getComponentPronoun = ({ propsData }) => {
    console.log('propsData - getComponentPronoun', propsData)
    const { item, index, handleLongPress } = propsData
    const getStyle = () => {
      return this.selectItem({
        style: { marginHorizontal: 15 },
        isChecked: this.getIsCheckFilter()
      })
    }

    const onPress = async ({ propsData, propsData: { item, onPressFunc } }) => {
      await onPressFunc({
        propsData: {
          ...propsData,
          item
        }
      })
    }

    return (
      <PronounCard
        propsData={{
          item,
          onPress,
          onPressFunc: handleLongPress,
          getStyle
        }}
        key={`PronounCard_${index}`}
      />
    )
  }

  getFilter = async ({ propsData }) => {
    const {
      filter,
      data: { userVerb, defaultVerb },
      getFilterChanged
    } = this.props
    const dataArr = [...userVerb, ...defaultVerb]
    const idVerb = this.props.navigation.state.params.item.id
    await getFilterTest({
      propsData: {
        ...propsData,
        filter,
        dataArr,
        idVerb,
        getFilterChanged,
        propInclination: this.getProperty()
      }
    })
  }

  selectItem({ style, isChecked }) {
    if (!isChecked) {
      return style || null
    }
    return style ? { ...style, backgroundColor: COLOR_LONG_PRESS } : { backgroundColor: COLOR_LONG_PRESS }
  }

  getIsCheckFilter() {
    const { filter, navigation } = this.props
    const { id } = navigation.state.params.item
    const propInclination = this.getProperty()
    if (Object.keys(filter).length === 0) return false
    if (filter[id][propInclination].length === 0) return false
    if (filter[id][propInclination].find(idConjugation => idConjugation === this.props.index) !== undefined) return true
  }

  getProperty() {
    const { routeName } = this.props.navigation.state
    switch (routeName) {
      case 'Indicatif':
        return 'indicatif'
      case 'Subjonctif':
        return 'subjonctif'
      case 'Conditionnel':
        return 'conditionnel'
      default:
        console.log(`Неизвестное значение routeName - ${routeName}`)
    }
  }

  render() {
    /*console.log('this.props.navigation.state.params', this.props.navigation.state.params)*/
    const { conjugations } = this.props.navigation.state.params.item.inclinations[this.getProperty()]
    return (
      <ScrollView>
        <StatusBar backgroundColor={DEEP_BLUE} barStyle="light-content" />
        <Accordion
          data={conjugations}
          componentHeader={this.getComponentHeader}
          componentBody={this.getComponentPronoun}
          handleLongPressHeader={this.getFilter}
          onPressBody={this.getFilter}
          underlayColor={COLOR_LONG_PRESS}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  filter: state.filter
})
export default connect(
  mapStateToProps,
  { getFilterChanged }
)(VerbTensesScreen)
