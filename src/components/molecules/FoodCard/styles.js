import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 12
    },
    image: {
        width: 200,
        height: 140,
        resizeMode: 'cover',
    },
    content:{
        padding: 12
    },
})