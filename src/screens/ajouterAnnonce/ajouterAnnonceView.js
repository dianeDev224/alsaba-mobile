import {
    Pressable,
    Text,
    View,
} from 'react-native';

import {
    FontAwesome5,
    Octicons,
} from '@expo/vector-icons';

import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import CountryPickerV from '../../components/countryPicker/countryPicker';
import DatePicker from '../../components/DatePicker/datePicker';
import LgButton from '../../components/formValidationSmBtn/lgButton';
import PackagePicker from '../../components/packagePicker/packagePicker';
import TimePicker from '../../components/timePicker/timePicker';
import ajouterAnnonceController from './ajouterAnnonceController';
import { Styles } from './styles';

export default function AjouterAnnonce(props) {

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <Pressable style={Styles.header} onPress={() => ajouterAnnonceController.handleBackBtnPress({ navigator: props.navigation })}>
                    <FontAwesome5 name="arrow-left" size={24} color="#2D9BF0" />
                    <Text style={[Styles.boldText, { color: "#2D9BF0", marginHorizontal: 4 }]}>Annonces</Text>
                </Pressable>

                <Text style={Styles.title}>Nouvelle Annonce</Text>

                <View style={Styles.countryPickerContainer}>
                    <Octicons name="package" size={34} color="#9510AC" />
                    <PackagePicker />
                </View>

                <CountryPickerV />
                <DatePicker />
                <TimePicker />
                <LgButton
                    extraStyles={{
                        text: {
                            color: "#45C159"
                        }, container: {
                            borderColor: "#45C159"
                        }
                    }}
                    palceholde='Valider'
                />
                <LgButton extraStyles={{
                    text: {
                        color: "#DA0063"
                    }, container: {
                        borderColor: "#DA0063"
                    }
                }}
                    palceholde='Annuler'
                />
            </View>
        </ComponentSafeArea>
    )
}