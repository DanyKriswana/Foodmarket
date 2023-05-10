import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { globalStyles } from '../../../Helpers/globalStyles';
import { colors } from '../../../Helpers/colors';

const Buttons = ({text, onPress, color=colors.yellowThemeColor, textColor=colors.black}) => {
    return (
        <TouchableOpacity style={styles.container(color)} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.text(textColor)}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttons