import React, { PureComponent } from 'react'
import { Alert, ScrollView, View, Text, StatusBar, ActivityIndicator } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { DEEP_BLUE, WHITE } from '../../constants'
import styles from './styles'
import { addVerbActions } from '../../store/actions'

class FormVerbScreen extends PureComponent<NavigationScreenProps> {
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
  { addVerbActions }
)(FormVerbScreen)
