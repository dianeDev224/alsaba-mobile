import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import { UseNavigation } from '../../hooks/useNavigation';
import HistoriqueChargeRelle from './historiqueChargesRelles';
import NouvelleChargeRelle from './nouvelleChargeRelle';
import { chargeRelleMainStyles } from './styles';

export const chargeRelleRoutes = {
    NOUVELLE_CHARGE_RELLE: "nouvelle charge reelle",
    HISTORIQUE_CHARGES_RELLE: "historique charges relle",
}

const screenData = [

    {
        id: 1,
        screen: NouvelleChargeRelle
    },
    {
        id: 2,
        screen: HistoriqueChargeRelle
    },
]


export default function MainChargeReelle(props) {

    const { currentRoute, navigateTo } = UseNavigation(chargeRelleRoutes.NOUVELLE_CHARGE_RELLE);

    const flatListRef = useAnimatedRef()

    return (

        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Charges Réelles"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Charges Réelles'

            Navbar={
                <View
                    style={chargeRelleMainStyles.navigationBar}
                >
                    <Pressable
                        style={[chargeRelleMainStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={chargeRelleMainStyles.textStyle}>Nouvelle Des Charges Relles</Text>
                    </Pressable>

                    <Pressable
                        style={[chargeRelleMainStyles.navigationBarItem, { backgroundColor: '#79b878' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={chargeRelleMainStyles.textStyle}>Historique Des Charges Fictives</Text>
                    </Pressable>

                </View>

            }

            screenData={screenData}
            flatListRef={flatListRef}
        />
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case chargeRelleRoutes.NOUVELLE_CHARGE_RELLE:
            return <NouvelleChargeRelle navigateTo={navigateTo} />;
        case chargeRelleRoutes.HISTORIQUE_CHARGES_RELLE:
            return <HistoriqueChargeRelle navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}