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
import HoraireTravailTiers from './horaireTravailTiersView.js.js';
import MesHorairesTravail from './mesHorairesTravailView';
import { Styles } from './styles';

const StyledView = styled(View)
const horaireTravailRoute = {
    MES_HORAIRES_TRAVAILS: "mes horaires de travails",
    HORAIRES_TRAVAIL_AGENCES: "les horaires de trvaisl des agences",
}

export default function HoraireTravail(props) {
    const { currentRoute, navigateTo } = UseNavigation(horaireTravailRoute.MES_HORAIRES_TRAVAILS);

    return (
        <ComponentSafeArea>
            <StyledView className='flex-1'>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => navigateTo(horaireTravailRoute.MES_HORAIRES_TRAVAILS)}

                    >
                        <Text style={Styles.textStyle}>Mes Horaires</Text>
                        {currentRoute == horaireTravailRoute.MES_HORAIRES_TRAVAILS && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#399137' }]} />}
                    </Pressable>

                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#6960b3' }]}
                        onPress={() => navigateTo(horaireTravailRoute.HORAIRES_TRAVAIL_AGENCES)}
                    >
                        <Text style={Styles.textStyle}>Horaires Des Agences</Text>
                        {currentRoute == horaireTravailRoute.HORAIRES_TRAVAIL_AGENCES && <StyledView style={[Styles.navigationBarCurrentItem, { borderTopColor: '#6960b3' }]} />}
                    </Pressable>
                </StyledView>
                <SwitcherNav currentRoute={currentRoute} navigateTo={navigateTo} />
            </StyledView>
        </ComponentSafeArea>
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case horaireTravailRoute.MES_HORAIRES_TRAVAILS:
            return <MesHorairesTravail />;
        case horaireTravailRoute.HORAIRES_TRAVAIL_AGENCES:
            return <HoraireTravailTiers />;
        default:
            return alert("erreur de route");
    }
}