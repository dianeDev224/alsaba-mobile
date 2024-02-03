import {
    Text,
    View,
} from 'react-native';

import BackArrowNavigator
    from '../../components/backArrowNavigator/backArrowNavigator';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import LgButton from '../../components/formValidationSmBtn/lgButton';
import { TextInputField } from '../../components/textInput/textInput';
import ajouterCaveauxController from './ajouterCaveauxController';
import { Styles } from './styles';

export default function AjouterCaveaux(props) {

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <BackArrowNavigator rightText={"Caveaux"} handleClick={() => ajouterCaveauxController.handleBackBtnPress({ navigator: props.navigation })} />
                <Text style={Styles.title}>Nouveaux Caveaux</Text>
                <TextInputField label='Nom' />
                <TextInputField label='Solde Initial' />
                <View>
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
                            borderColor: "#DA0063",
                            marginVertical: 5
                        }
                    }}
                        palceholde='Annuler'
                    />
                </View>
            </View>
        </ComponentSafeArea>
    )
}