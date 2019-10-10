import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import { COLOR_LONG_PRESS } from '../../constants'

class PronounCard extends PureComponent {
  render() {
    const {
      propsData,
      propsData: {
        item: {
          data: { i, you, he_she, we, your, they }
        },
        getStyle,
        onPress
      }
    } = this.props
    const { containerPronoun, pronounStyle, valueStyle, bottomLine } = styles
    return (
      <View style={getStyle()}>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>je</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{i}</Text>
          </View>
        </View>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>tu</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{you}</Text>
          </View>
        </View>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>il/elle</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{he_she}</Text>
          </View>
        </View>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>nous</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{we}</Text>
          </View>
        </View>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>vous</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{your}</Text>
          </View>
        </View>
        <View style={containerPronoun}>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Text style={pronounStyle}>ils/elles</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={valueStyle}>{they}</Text>
          </View>
        </View>
        <View style={bottomLine} />
      </View>
    )
  }
}

export default PronounCard
