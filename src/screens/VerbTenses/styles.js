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
  innerTitleHeader: {
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#D84315'
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginVertical: 15,
    marginRight: 'auto'
  },
  bottomLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: BORDER_BLUE
  }
})

export default styles
