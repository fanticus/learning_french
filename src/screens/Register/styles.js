import { StyleSheet } from 'react-native'
import { DEEP_BLUE } from '../../constants'

const styles = StyleSheet.create({
  viewStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 200, 242, 0.05)'
  },
  welcomeText: {
    color: DEEP_BLUE,
    paddingBottom: 20,
    fontSize: 26
  }
})

export default styles
