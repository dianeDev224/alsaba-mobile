import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    navigationBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        height: 80,
        marginVertical: 10,
        // borderRadius: 160,
        padding: 2,
        justifyContent: "space-between",
        backgroundColor: '#c7f5cb',
    },

    textStyle: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        color: '#fff',
        fontWeight: "bold",
        fontSize: 13
    },
    navigationBarItem: {
        flexBasis: '40%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        position: "relative",
        borderLeftWidth: 3,
        borderRadius: 100,
        shadowOffset: 100,
        shadowOpacity: 1,
        borderLeftColor: '#ffffff',
    },
    navigationBarCurrentItem: {
        position: 'absolute',
        bottom: -10,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    }

})

