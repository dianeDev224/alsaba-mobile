import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    soldeContainer: {
        flexDirection: 'column',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: '80%',
        height: 100,
        backgroundColor: '#0ca63a',
        marginVertical: 10
    },
    titleTextStyle: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: '#e0b422'
    },
    textStyle: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        color: '#ffffff',
        fontWeight: "bold",
        fontSize: 13
    },
})