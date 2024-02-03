import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: "#ff5",
        borderRadius: 20,
        shadowRadius: 10,
        shadowOffset: 10,
        borderWidth: 3,
        borderColor: "#32b64ede",
        margin: 5
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 2
    },
    packageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 2
    },

    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: "#585757"
    }
})