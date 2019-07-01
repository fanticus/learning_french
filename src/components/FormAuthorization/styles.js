import { StyleSheet } from 'react-native'
import { DEEP_BLUE, WHITE, width } from '../../../constants'

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width / 1.2,
        height: 45,
        paddingLeft: 15,
        paddingRight: 10,
        borderColor: DEEP_BLUE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 24,
    },
    errorInput: {
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    input: {
        flex: 1,
        color: DEEP_BLUE,
        fontSize: 16
    },
    button: {
        borderRadius: 24,
        backgroundColor: DEEP_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 1.2,
        height: 45,
        marginTop: 10,
    },
    textButton: {
        color: WHITE,
    },
    passwordResetButton: {
        marginTop: 20,
    },
})

export default styles
