import { StyleSheet } from "react-native";

import { colors } from "../../../Helpers/colors";
import { globalStyles } from "../../../Helpers/globalStyles";

export const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        widht: 200,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center'
    }),
    text: (color) => ({
        ...globalStyles.text.buttonText,
        color: color,
        textAlign: 'center'
    })
})