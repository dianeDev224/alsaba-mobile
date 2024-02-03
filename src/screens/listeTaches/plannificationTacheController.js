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
import ListeTache from './listeTachesView';
import NouvelleTache from './nouvelleTacheView';
import { Styles } from './styles';

const StyledView = styled(View)
const plannificationTacheRoute = {
    LISTE_TACHE: "liste des tâches",
    NOUVELLE_TACHE: "nouvelle tâche",
}

export default function PlannificationTaches(props) {
    const { currentRoute, navigateTo } = UseNavigation(plannificationTacheRoute.LISTE_TACHE);

    return (
        <ComponentSafeArea>
            <StyledView className='flex-1'>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => navigateTo(plannificationTacheRoute.LISTE_TACHE)}
                    >
                        <Text style={Styles.textStyle}>Liste Des Tâches</Text>
                        {currentRoute == plannificationTacheRoute.LISTE_TACHE && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#b5ae24' }]} />}
                    </Pressable>

                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => navigateTo(plannificationTacheRoute.NOUVELLE_TACHE)}

                    >
                        <Text style={Styles.textStyle}>Nouvelle Tâche</Text>
                        {currentRoute == plannificationTacheRoute.NOUVELLE_TACHE && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#399137' }]} />}
                    </Pressable>

                </StyledView>
                <SwitcherNav currentRoute={currentRoute} navigateTo={navigateTo} />
            </StyledView>
        </ComponentSafeArea>
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case plannificationTacheRoute.NOUVELLE_TACHE:
            return <NouvelleTache />;
        case plannificationTacheRoute.LISTE_TACHE:
            return <ListeTache />;
        default:
            return alert("erreur de route");
    }
}