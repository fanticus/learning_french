import { StyleSheet } from 'react-native'
import { width } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(18, 200, 242, 0.05)'
  },
  logoImage: {
    width: width / 1.6,
    height: width * 0.21,
    marginBottom: 20,
  },
})

export default styles
