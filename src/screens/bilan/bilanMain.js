import {
    Pressable,
    Text,
    View,
} from 'react-native';

import AppBar from '../../components/common/drawerTopBar';
import DetailSolde from '../../components/common/soldeDetail';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import { UseNavigation } from '../../hooks/useNavigation';
import HistoriqueBilan from './historiqueBilans';
import Resultats from './resultats';
import { Styles } from './styles';

const bilanWrapperRoutes = {
    HISTORIQUE_BILAN: "historique des  bilans",
    RESULTATE: "résultats"
}

export default function BilanMainMain(props) {

    const { currentRoute, navigateTo } = UseNavigation(bilanWrapperRoutes.HISTORIQUE_BILAN);

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <DetailSolde />
                <View
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => navigateTo(bilanWrapperRoutes.HISTORIQUE_BILAN)}
                    >
                        <Text style={Styles.textStyle}>Historiques Des Bilans</Text>
                        {currentRoute == bilanWrapperRoutes.HISTORIQUE_BILAN && <View style={[Styles.navigationBarCurrentItem, { borderTopColor: '#b5ae24' }]} />}
                    </Pressable>
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#2c558a' }]}
                        onPress={() => navigateTo(bilanWrapperRoutes.RESULTATE)}
                    >
                        <Text style={Styles.textStyle}>Resultats</Text>
                        {currentRoute == bilanWrapperRoutes.RESULTATE && <View style={[Styles.navigationBarCurrentItem, { borderTopColor: '#2c558a' }]} />}
                    </Pressable>
                </View>
                <SwitcherNav currentRoute={currentRoute} navigateTo={navigateTo} />
            </View>
        </ComponentSafeArea>
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case bilanWrapperRoutes.HISTORIQUE_BILAN:
            return <HistoriqueBilan navigateTo={navigateTo} />;
        case bilanWrapperRoutes.RESULTATE:
            return <Resultats navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}