import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import { UseNavigation } from '../../hooks/useNavigation';
import HistoriquePret from './historiquePret';
import NouveauPret from './nouveauPret';
import RemboursementPret from './remboursementPret';
import { mainPretStyles } from './styles';

export const pretRoutes = {
    NOUVEAU_PRET: "nouvelle prêt",
    REMBOURSEMENT_PRET: "remboursement prêt",
    HISTORIQUE_PRET: "historique prêt"
}


const screenData = [

    {
        id: 1,
        screen: NouveauPret
    },
    {
        id: 2,
        screen: RemboursementPret
    },
    {
        id: 3,
        screen: HistoriquePret
    },
]

export default function MainPret(props) {

    const { currentRoute, navigateTo } = UseNavigation(pretRoutes.NOUVEAU_PRET);
    const flatListRef = useAnimatedRef()

    return (
        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Prêts"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Prêts'

            Navbar={
                <View
                    style={mainPretStyles.navigationBar}
                >
                    <Pressable
                        style={[mainPretStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={mainPretStyles.textStyle}>Nouveau Prêt</Text>
                    </Pressable>

                    <Pressable
                        style={[mainPretStyles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={mainPretStyles.textStyle}>Remboursement De Prêt</Text>
                    </Pressable>
                    <Pressable
                        style={[mainPretStyles.navigationBarItem, { backgroundColor: '#8f5387' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}

                    >
                        <Text style={mainPretStyles.textStyle}>Historique Des Prêts</Text>
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
        case pretRoutes.NOUVEAU_PRET:
            return <NouveauPret navigateTo={navigateTo} />;
        case pretRoutes.REMBOURSEMENT_PRET:
            return <RemboursementPret navigateTo={navigateTo} />;
        case pretRoutes.HISTORIQUE_PRET:
            return <HistoriquePret navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}