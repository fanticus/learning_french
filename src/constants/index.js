import { Dimensions } from 'react-native'

const win = Dimensions.get('window')
const { height, width } = win

const DEEP_BLUE = 'rgb(3,60,103)'
const INACTIVE_BLUE = 'rgba(3,60,103, 0.1)'
const BORDER_BLUE = 'rgba(14, 57, 158, 0.1)'
const WHITE = '#fff'

const COLOR_LONG_PRESS = 'rgba(3,60,103, 0.05)'

export { height, width, DEEP_BLUE, INACTIVE_BLUE, BORDER_BLUE, WHITE, COLOR_LONG_PRESS }
