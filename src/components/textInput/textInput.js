import {
    Text,
    TextInput,
    View,
} from 'react-native';

import { Styles } from './styles';

export function TextInputField({ label = "text input" }) {
    return (
        <View style={Styles.container}>
            <View style={Styles.fieldContainter}>
                <Text style={Styles.text}>{label}</Text>
            </View>
            <TextInput
                style={[Styles.inputContainer, Styles.inpuText]}
                placeholder={"hello"}
            />
        </View>
    )
}