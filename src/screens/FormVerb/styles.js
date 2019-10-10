import { StyleSheet } from 'react-native'
import { DEEP_BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(18, 200, 242, 0.05)'
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 200, 242, 0.05)'
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textIndicator: {
    marginTop: 10,
    color: DEEP_BLUE
  }
})

export default styles
