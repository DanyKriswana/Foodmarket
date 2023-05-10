import { StyleSheet } from "react-native";
import { globalStyles } from "../../../Helpers/globalStyles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    value: (color) => ({
        ...globalStyles.text.smallTitle,
        color: color,
    })
})