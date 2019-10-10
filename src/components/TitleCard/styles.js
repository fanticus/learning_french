import { StyleSheet } from 'react-native'
import { BORDER_BLUE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  titleStyle: {
    paddingVertical: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
  bottomLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: BORDER_BLUE
  }
})

export default styles
