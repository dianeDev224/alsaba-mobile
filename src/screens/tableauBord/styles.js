import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        marginTop: 1,
        marginBottom: 15,
        fontWeight: 'bold',
        color: "#525252",
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
    cardTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic'
    },
    cardContent: {
        marginTop: 10
    },
    text: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    "1col": {
        // backgroundColor: "lightblue",
        borderColor: "#8f8787",
        borderWidth: 3,
        flex: 1,
        justifyContent: 'center'
    },
    "2col": {
        backgroundColor: "green",
        borderColor: "#8f8787",
        borderWidth: 3,
        flex: 2,
        justifyContent: 'center'
    },
    "3col": {
        backgroundColor: "orange",
        borderColor: "#8f8787",
        borderWidth: 3,
        flex: 3,
        justifyContent: 'center'
    },
    "4col": {
        flex: 4,
        justifyContent: 'center',
        borderWidth: 3,
    },
    spaceBetween: {
        marginTop: 1,
        marginBottom: 1,
    },
})