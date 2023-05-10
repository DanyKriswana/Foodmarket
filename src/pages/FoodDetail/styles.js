import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    content: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
        paddingHorizontal: 26,
        paddingVertical: 26,
        flex: 1
    },
    mainContent: {
        flex: 1
    },
    foodContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1
    },
    button: {
        width: 163
    },
})