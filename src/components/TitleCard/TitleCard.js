import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { DEEP_BLUE, INACTIVE_BLUE } from '../../constants'
import styles from './styles'

const TitleCard = ({ title, onPress, onLongPress, id, filterData }) => {
  const { container, titleStyle, bottomLine } = styles

  getInSelected = (docObj, id) => {
    let stateSelected = 'hidden'
    const inclinationLengthObj = [8, 4, 2]
    const verbDocArrLength = Object.keys(docObj).length > 0
    if (verbDocArrLength) {
      const verbDocObj = docObj[id]
      if (verbDocObj) {
        stateSelected = 'all'
        Object.values(verbDocObj).forEach((inclinationArr, index) => {
          if (inclinationArr.length !== inclinationLengthObj[index]) {
            stateSelected = 'notAll'
          }
        })
      }
    }
    return stateSelected
  }

  visiblIcon = stateSelected => {
    let nameIcon = ''
    switch (stateSelected) {
      case 'hidden':
        return null
      case 'notAll':
        nameIcon = 'check'
        break
      case 'all':
        nameIcon = 'check-circle'
        break
      default:
        console.log(`Неизвестное значение stateSelected - ${stateSelected}`)
    }
    /* console.log('nameIcon', nameIcon) */
    return <Icon name={nameIcon} color={DEEP_BLUE} size={20} />
  }

  return (
    <TouchableHighlight onPress={onPress} underlayColor={INACTIVE_BLUE} onLongPress={() => onLongPress(id)}>
      <View style={container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={titleStyle}>{title}</Text>
          {this.visiblIcon(this.getInSelected(filterData, id))}
        </View>
        <View style={bottomLine} />
      </View>
    </TouchableHighlight>
  )
}

export default TitleCard
