import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24, 
        paddingTop: 30, 
        paddingBottom: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    photoProfile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
})