import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    header: {
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        top: 2,
        left: 2
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    countryPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    datePickerContainer: {
        flexDirection: 'row'
    },
    timePickerContainer: {
        flexDirection: 'row'
    },

})