import styles from './styles'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const TitleCard = ({ title, onPress }) => {
    const { container, titleStyle } = styles
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={container}>
                <Text style={titleStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TitleCard