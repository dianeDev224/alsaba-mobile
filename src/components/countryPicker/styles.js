import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    countryPickerContainer: {
        width: 200,
        height: 40,
        borderRadius: 10,
        borderWidth: 3,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1
    },
    countryName: {
        textAlign: 'center',
        color: "#575454"
    },
    counttryPicker: {

        // Styles for modal backdrop [View]
        // backdrop: {

        // },
        // Styles for bottom input line [View]
        // line: {

        // },
        // Styles for list of countries [FlatList]
        itemsList: {
            height: 150,
            width: '100%',
        },
        // Styles for input [TextInput]
        // textInput: {
        //     height: 80,
        //     borderRadius: 0,
        // },
        // Styles for country button [TouchableOpacity]
        // countryButtonStyles: {
        //     height: 80
        // },
        // Styles for search message [Text]
        // searchMessageText: {

        // },
        // Styles for search message container [View]
        // countryMessageContainer: {

        // },
        // Flag styles [Text]
        // flag: {

        // },
        // Dial code styles [Text]
        // dialCode: {

        // },
        // Country name styles [Text]
        // countryName: {

        // }
    }

})