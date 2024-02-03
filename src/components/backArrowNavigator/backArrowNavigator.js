import {
    Pressable,
    Text,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { Styles } from './styles';

export default function BackArrowNavigator({ rightText, handleClick = () => { } }) {
    return (
        <Pressable style={Styles.container} onPress={handleClick}>
            <FontAwesome5 name="arrow-left" size={24} color="#2D9BF0" />
            <Text style={[Styles.boldText, { color: "#2D9BF0", marginHorizontal: 4 }]}>{rightText}</Text>
        </Pressable>
    )
}