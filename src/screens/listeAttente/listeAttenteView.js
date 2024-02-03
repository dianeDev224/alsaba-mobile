import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import AppBar from '../../components/common/drawerTopBar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import { UseNavigation } from '../../hooks/useNavigation';
import HistoriqueListeAttentes from './historiqueListeAttentesView';
import NouvelleListeAttente from './nouvelleListeAttentesView';
import { Styles } from './styles';

const StyledView = styled(View)
const listeAttentesRoute = {
    NOUVELLE_LISTE_ATTENTE: "nouvelle liste attentes",
    HISTORIQUE_LISTE_ATTENTE: "historique liste en attente",
}

export default function ListeAttentes(props) {
    const { currentRoute, navigateTo } = UseNavigation(listeAttentesRoute.HISTORIQUE_LISTE_ATTENTE);

    return (
        <ComponentSafeArea>
            <StyledView className='flex-1'>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => navigateTo(listeAttentesRoute.HISTORIQUE_LISTE_ATTENTE)}
                    >
                        <Text style={Styles.textStyle}>Historique Reservation</Text>
                        {currentRoute == listeAttentesRoute.HISTORIQUE_LISTE_ATTENTE && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#b5ae24' }]} />}
                    </Pressable>

                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => navigateTo(listeAttentesRoute.NOUVELLE_LISTE_ATTENTE)}

                    >
                        <Text style={Styles.textStyle}>Nouvelle réservation</Text>
                        {currentRoute == listeAttentesRoute.NOUVELLE_LISTE_ATTENTE && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#399137' }]} />}
                    </Pressable>
                </StyledView>
                <SwitcherNav currentRoute={currentRoute} navigateTo={navigateTo} />
            </StyledView>
        </ComponentSafeArea>
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case listeAttentesRoute.NOUVELLE_LISTE_ATTENTE:
            return <NouvelleListeAttente />;
        case listeAttentesRoute.HISTORIQUE_LISTE_ATTENTE:
            return <HistoriqueListeAttentes />;
        default:
            return alert("erreur de route");
    }
}