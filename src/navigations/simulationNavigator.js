import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SimulationTransfertIntl
    from '../screens/simulation/simulationTransfertIntl';
import SimulationTansfertNationnale
    from '../screens/simulation/simulationTransfertNationnale';

const SimulationStack = createNativeStackNavigator();

export default function SimulationNavigation() {

    return (
        <SimulationStack.Navigator>
            <SimulationStack.Screen name='simulationNationnale' component={SimulationTansfertNationnale} options={{ header: () => null }} />
            <SimulationStack.Screen name='simulationInternationnale' component={SimulationTransfertIntl} options={{ header: () => null }} />
        </SimulationStack.Navigator>
    )
}