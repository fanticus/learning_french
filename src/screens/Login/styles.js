import { StyleSheet } from 'react-native'
import { DEEP_BLUE, width, height } from '../../../constants'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(18, 200, 242, 0.05)'
    },
    logoImage: {
        width: width / 1.6,
        height: width * 0.21,
        marginBottom: 20,
        marginTop: height / 7.2,
    },
    welcomeText: {
        color: DEEP_BLUE,
        paddingBottom: 15,
        fontSize: 26
    },
    nextText: {
        fontSize: 12,
        marginBottom: 'auto',
        color: 'rgba(0,0,0,0.4)'
    },
    buttonMain: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 1.2,
        height: 45,
        marginBottom: 10,
        backgroundColor: DEEP_BLUE,
        borderRadius: 24
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 1.2,
        height: 45,
        borderColor: DEEP_BLUE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 24,
        marginBottom: height / 19,
    },
    textButtonMain: {
        color: '#fff',
    },
    textButton: {
        color: '#000',
    },
})

export default styles
