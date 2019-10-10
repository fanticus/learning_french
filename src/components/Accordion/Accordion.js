import React, { PureComponent } from 'react'
import { TouchableHighlight, View } from 'react-native'

type Props = {
  data: Array,
  underlayColor: String,
  componentHeader: Function,
  componentBody: Function,
  onPressHeader: Function,
  onPressBody: Function,
  handleLongPressHeader: Function,
  handleLongPressBody: Function
}

export default class Accordion extends PureComponent<Props> {
  state = {
    showArr: [],
    isSelect: false
  }

  updateIsSelect = isSelect => this.setState({ isSelect: !isSelect })

  _onPressHeader = propsData => {
    const { showArr } = this.state
    const { onPressHeader, isShowAccordion, index } = propsData
    let NewShowArr = null
    if (isShowAccordion) {
      NewShowArr = showArr.filter(item => item !== index)
    } else {
      NewShowArr = [...showArr, index]
    }
    this.setState(
      {
        showArr: NewShowArr
      },
      () => {
        if (onPressHeader) onPressHeader({ propsData })
      }
    )
  }

  _onLongPressHeader = async propsData => {
    const { isSelect } = this.state.isSelect
    const { handleLongPressHeader } = this.props
    const newPropsData = {
      ...propsData,
      isSelect,
      updateIsSelect: this.updateIsSelect()
    }
    if (handleLongPressHeader) {
      await handleLongPressHeader({ propsData: newPropsData })
      // временный костыль
      this.forceUpdate()
    }
  }

  _onPressBody = async propsData => {
    const { onPressBody } = this.props
    if (onPressBody) {
      await onPressBody({ propsData })
      // временный костыль
      this.forceUpdate()
    }
  }

  _onLongPressBody = propsData => {
    const { handleLongPressBody } = this.props
    if (handleLongPressBody) {
      handleLongPressBody({ propsData })
      this.forceUpdate()
    }
  }

  _getComponent = ({ propsData, funcComponent, onPress, onLongPress }) => {
    const { underlayColor } = this.props
    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={() => onPress(propsData)}
        onLongPress={() => onLongPress(propsData)}
      >
        {funcComponent({ propsData })}
      </TouchableHighlight>
    )
  }

  _renderItem = ({ item, index }) => {
    const { showArr } = this.state
    const { data, componentHeader, componentBody } = this.props
    const isShowAccordion = showArr.find(item => item === index) !== undefined
    const propsData = {
      data,
      item,
      index,
      isShowAccordion,
      ...this.props
    }
    const header = this._getComponent({
      propsData,
      funcComponent: componentHeader,
      onPress: this._onPressHeader,
      onLongPress: this._onLongPressHeader
    })
    let body = null
    if (isShowAccordion) {
      body = this._getComponent({
        propsData,
        funcComponent: componentBody,
        onPress: this._onPressBody,
        onLongPress: this._onLongPressBody
      })
    }
    return (
      <View key={index}>
        {header}
        {body}
      </View>
    )
  }

  render() {
    const { data } = this.props
    return data.map((item, index) => this._renderItem({ item, index }))
  }
}

Accordion.defaultProps = {
  data: [],
  underlayColor: '#FFC5CAE9',
  componentHeader: () => {},
  componentBody: () => {},
  onPressHeader: null,
  onPressBody: null,
  handleLongPressHeader: null,
  handleLongPressBody: null
}
