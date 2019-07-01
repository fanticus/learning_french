import { StyleSheet } from 'react-native'
import { BORDER_BLUE } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomColor: BORDER_BLUE,
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    }
})

export default styles
