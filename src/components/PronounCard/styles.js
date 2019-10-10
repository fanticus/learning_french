import { StyleSheet } from 'react-native'
import { BORDER_BLUE } from '../../constants'

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 15
  },
  innerContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerPronoun: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5
  },
  titleHeader: {
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#D84315'
  },
  pronounStyle: {
    fontSize: 18,
    color: 'gray',
    marginRight: 5
  },
  valueStyle: {
    fontSize: 18,
    color: '#000',
    marginLeft: 5
  },
  bottomLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: BORDER_BLUE
  }
})

export default styles
