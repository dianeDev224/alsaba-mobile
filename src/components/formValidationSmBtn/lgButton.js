import {
    Pressable,
    Text,
} from 'react-native';

import { Styles } from './styles';

export default function LgButton({ palceholde = "text", extraStyles = {}, handlePress = () => { } }) {

    return (
        <Pressable style={[Styles.container, extraStyles.container]} onPress={handlePress}>
            <Text style={[Styles.text, extraStyles.text]}>{palceholde}</Text>
        </Pressable>
    )
}