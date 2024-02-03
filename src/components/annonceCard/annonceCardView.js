import {
    Pressable,
    Text,
    View,
} from 'react-native';
import CountryFlag from 'react-native-country-flag';

import {
    FontAwesome5,
    Octicons,
} from '@expo/vector-icons';

import { Styles } from './styles';

export default function AnnonceCard({ extraStyles = {}, item, handleClick = () => { } }) {

    return (
        <Pressable style={[Styles.container, extraStyles.container]} onPress={handleClick}>
            <Text style={[Styles.text]}>Nouveau Voyage</Text>
            <View style={Styles.countryContainer}>
                <FontAwesome5 name="map-marker" size={24} color="#973e3e" />
                <Text style={[Styles.text]}>Depart : </Text>
                <CountryFlag isoCode={item.codeDepart} size={15} />
                <Text style={[Styles.text]}>{item.depart}</Text>
            </View>
            <View style={Styles.countryContainer}>
                <FontAwesome5 name="map-marker" size={24} color="#973e3e" />
                <Text style={[Styles.text]}>Arrivé : </Text>
                <CountryFlag isoCode={item.codeArrivee} size={15} />
                <Text style={[Styles.text]}>{item.arrivee}</Text>
            </View>
            <View style={Styles.packageContainer}>
                <Octicons name="package" size={24} color="#9510AC" />
                <Text style={[Styles.text]}>{item.nbreKilo} disponible</Text>
            </View>
            <View>
                <Text style={[Styles.text]}>Date</Text>
                <Text style={[Styles.text]}>le {item.date}</Text>
                <Text style={[Styles.text]}>à {item.heure}</Text>
            </View>
        </Pressable>
    )
}
