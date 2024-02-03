import {
    Pressable,
    Text,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { Styles } from './styles';

export function ButtonAjouter({ extraStyle = {}, handlePress }) {
    return (
        <Pressable style={[Styles.container, extraStyle.container]} onPress={handlePress}>
            <Text style={Styles.text}>Ajouter</Text>
            <Entypo name="plus" size={24} color="#E6E6E6" />
        </Pressable>
    )
}
