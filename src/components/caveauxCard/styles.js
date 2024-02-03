import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    container: {
        flexDirection: 'row',
        width: 300,
        height: 80,
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#0c7e3f",
        backgroundColor: "#ced5d6"
    },
    colContainer: {
        flexDirection: 'column',
        justifyContent: 'space-arround'
    },
    text: {
        color: '#777474',
        fontSize: 20
    },
    title: {
        fontWeight: 'bold'
    }
}) 