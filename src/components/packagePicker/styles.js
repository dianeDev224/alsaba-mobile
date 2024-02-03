import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 10,
        width: 200,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 1,
    },
    text: {
        textAlign: 'center',
        flex: 1
    }
})