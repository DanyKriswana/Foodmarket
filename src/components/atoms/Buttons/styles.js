import { StyleSheet } from "react-native";

import { colors } from "../../../Helpers/colors";
import { globalStyles } from "../../../Helpers/globalStyles";

export const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        borderRadius: 8,
        width: 312,
        height: 45,
        justifyContent: 'center'
    }),
    text: (color) => ({
        ...globalStyles.text.buttonText,
        color: color,
        textAlign: 'center'
    })
})