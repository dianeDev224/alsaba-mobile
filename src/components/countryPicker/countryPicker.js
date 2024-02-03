import { useState } from 'react';

import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';

import { FontAwesome5 } from '@expo/vector-icons';

import { Styles } from './styles';

export default function CountryPickerV({ extratStyles = {}, toggleShow = () => { } }) {
    const [show, setShow] = useState(false)
    const [country, setContry] = useState({})
    return (
        <Pressable style={[Styles.container, extratStyles]} onPress={() => setShow(true)}>
            <FontAwesome5 name="flag-checkered" size={24} color="black" />
            <View style={Styles.countryPickerContainer}>
                <Text style={Styles.countryName}>{country.name ?? "ex : Guinée"}</Text>
                <CountryPicker
                    lang='fr'
                    show={show}
                    style={Styles.counttryPicker}
                    pickerButtonOnPress={(item) => {
                        console.log("item :", item.name["fr"])
                        setContry({
                            code: item.code,
                            dial_code: item.dial_code,
                            name: item.name["fr"]
                        });
                        setShow(false);
                    }}
                    popularCountries={['ma', 'gn', 'fr']}
                    onBackdropPress={() => setShow(false)}
                />
            </View>
        </Pressable>
    )
}