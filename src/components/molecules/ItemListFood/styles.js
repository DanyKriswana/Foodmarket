import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    imageStyles:{
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        resizeMode: 'cover',
        marginRight: 12,
    },
    textImage:{
        flex: 1
    },
})