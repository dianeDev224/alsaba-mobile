import {
    TextInput,
    View,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { Styles } from './styles';

export function InputTextStyled({ extraStyle = {}, placeholder = "chercher une annonce" }) {
    return (
        <View style={[Styles.container]}>
            <FontAwesome5 name="search" size={24} color={extraStyle.IconColor} />
            <TextInput
                style={Styles.textInput}
                placeholder={placeholder}
            />
        </View>
    )
}