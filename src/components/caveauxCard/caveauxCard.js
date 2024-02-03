import {
    Text,
    View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Styles } from './styles';

export function CaveauxCard({ extraStyle = {}, item }) {
    return (
        <View style={Styles.wrapper}>
            <View style={[Styles.container, extraStyle.container]}>
                <MaterialIcons name="attach-money" size={24} color="#0e964d" />
                <View style={Styles.colContainer}>
                    <Text style={[Styles.text, Styles.title]}>{item.name}</Text>
                    <Text style={Styles.text}>solde : {item.solde} {item.monnaie}</Text>
                </View>
            </View>
        </View>
    )
}
