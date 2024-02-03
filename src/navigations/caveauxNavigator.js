import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HistoriqueCaveau
    from '../../components/caisse/caveaux/historiqueCaveaux/historiqueCaveau';

const CaveauxStack = createNativeStackNavigator();

export default function CaveauxNavigator() {
    return (
        <CaveauxStack.Navigator>
            <CaveauxStack.Screen name='Elements' component={HistoriqueCaveau} options={{ header: () => null }} />
        </CaveauxStack.Navigator>
    )
}