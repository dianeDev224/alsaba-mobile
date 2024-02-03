import {
    Dimensions,
    StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("screen").width
export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 4,
        width: SCREEN_WIDTH - 30,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})