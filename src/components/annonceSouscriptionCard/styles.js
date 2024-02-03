import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 20,
        shadowRadius: 10,
        shadowOffset: 10,
        borderWidth: 3,
        borderColor: "#32b64ede",
        justifyContent: 'space-evenly'
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    packageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: "#585757"
    }
})