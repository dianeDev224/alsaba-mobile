import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import { UseNavigation } from '../../hooks/useNavigation';
import HistoriqueChargeFictive from './historiqueChargesFictives';
import NouvelleChargeFictive from './nouvelleChargeFictive';
import { chargeFictiveMainStyles } from './styles';

export const chargeFictiveRoutes = {
    NOUVELLE_CHARGE_FICTIVE: "nouvelle charge fictive",
    HISTORIQUE_CHARGES_FICTIVE: "historique charges fictive",
}

const screenData = [

    {
        id: 1,
        screen: NouvelleChargeFictive
    },
    {
        id: 2,
        screen: HistoriqueChargeFictive
    },
]


export default function MainChargesFictive(props) {

    const { currentRoute, navigateTo } = UseNavigation(chargeFictiveRoutes.NOUVELLE_CHARGE_FICTIVE);

    const flatListRef = useAnimatedRef()

    return (
        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Charges Fictives"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Charges Fictives'

            Navbar={
                <View
                    style={chargeFictiveMainStyles.navigationBar}
                >
                    <Pressable
                        style={[chargeFictiveMainStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={chargeFictiveMainStyles.textStyle}>Nouvelle Charge Fictive</Text>
                    </Pressable>

                    <Pressable
                        style={[chargeFictiveMainStyles.navigationBarItem, { backgroundColor: '#678f67' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={chargeFictiveMainStyles.textStyle}>Historique Des Charges Fictives</Text>
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
        case chargeFictiveRoutes.NOUVELLE_CHARGE_FICTIVE:
            return <NouvelleChargeFictive navigateTo={navigateTo} />;
        case chargeFictiveRoutes.HISTORIQUE_CHARGES_FICTIVE:
            return <HistoriqueChargeFictive navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}