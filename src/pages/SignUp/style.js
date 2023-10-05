import { StyleSheet } from "react-native";
import { colors } from "../../Helpers/colors";

export const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 24,
        paddingHorizontal: 24,
        paddingVertical: 26,
    },
    photo: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 16,
    },
    borderPhoto: {
         borderWidth: 1,
         borderColor: colors.darkGrey,
         width: 110,
         height: 110,
         borderRadius: 110,
         borderStyle: 'dashed',
         justifyContent: 'center',
         alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 90,
        width: 90, 
        height: 90, 
        backgroundColor: colors.superLightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        borderRadius: 90,
        width: 90, 
        height: 90, 
        backgroundColor: colors.superLightGrey,
        padding: 20,
        justifyContent: 'center'
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light', 
        color: colors.greyThemeColor,
        textAlign: 'center'
    }
})