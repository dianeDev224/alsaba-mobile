import {
    Text,
    View,
} from 'react-native';

import AnnonceSouscriptionCard
    from '../../components/annonceSouscriptionCard/annonceSouscriptionCard';
import BackArrowNavigator
    from '../../components/backArrowNavigator/backArrowNavigator';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import LgButton from '../../components/formValidationSmBtn/lgButton';
import souscriptionAnnonceController from './souscriptionAnnonceController';
import { Styles } from './styles';

const item = {
    id: 1,
    depart: "Guinée",
    codeDepart: "gn",
    arrivee: "Maroc",
    codeArrivee: "ma",
    nbreKilo: "2Kg",
    date: "ven 22/22/2022",
    heure: "11h/18:40",
    color: "#e0e9e9"
}

export default function SouscriptionAnnonce(props) {

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <BackArrowNavigator rightText={"Annonces"} handleClick={() => souscriptionAnnonceController.handleBackBtnPress({ navigator: props.navigation })} />
                <Text style={Styles.title}>Subcription Annonce</Text>
                <AnnonceSouscriptionCard item={item} extraStyles={{ container: Styles.annonceCard }} />
                <LgButton
                    extraStyles={{
                        text: {
                            color: "#289b11"
                        }, container: {
                            borderColor: "#289b11"
                        }
                    }}
                    palceholde='Suscrire' />
                <LgButton
                    extraStyles={{
                        text: {
                            color: "#b60655"
                        }, container: {
                            borderColor: "#b60655"
                        }
                    }}
                    palceholde='Annuler' />
            </View>
        </ComponentSafeArea>
    )
}