import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        borderWidth: 3,
        alignItems: 'center',
        padding: 4,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: "#646464"
    },
    fieldContainter: {
        flexDirection: 'row',
        width: 130,
        height: 30,
        borderWidth: 3,
        alignItems: 'center',
        padding: 3,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: "#646464",
        backgroundColor: "#a2adc4"

    },
    text: {
        color: "#424242",
        fontWeight: 'bold',
    },
    inpuText: {
        color: "#424242",
        fontStyle: 'italic',
        textDecorationLine: "none"
    }
})