import { StyleSheet } from "react-native";
import { colors } from "../../Helpers/colors";

export const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    profileDetail: {
        backgroundColor: 'white',
        paddingBottom: 26
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
    },
    borderPhoto: {
         borderWidth: 1,
         borderColor: colors.darkGrey,
         width: 110,
         height: 110,
         borderRadius: 110,
         borderStyle: 'dashed',
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom: 16
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
    },
    name: {
        textAlign: 'center',
        fontSize: 18
    },
    email: {
        textAlign: 'center'
    },
    tabContainer: {
        flex: 1,
        marginTop: 24,
        backgroundColor: 'white'
    },
})