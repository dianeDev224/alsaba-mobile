import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    title: {
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
        color: "#525252",
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
    inputText: {
        marginTop: 20,
        marginBottom: 50,
        justifyContent: 'flex-start',
        paddingHorizontal: 5,
        alignItems: 'center',
        width: 300,
        height: 60,
        borderWidth: 3,
        borderColor: "#c4c4c4",
        alignSelf: 'center'
    },
    inputTextLabel: {
        color: "#c4c4c4"
    },
    annonCardConatiner: {
        backgroundColor: "#e2e4e4"
    }

})