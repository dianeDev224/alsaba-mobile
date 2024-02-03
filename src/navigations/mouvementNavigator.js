import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainAutoInjection from '../screens/autoInjection/mainAutoInjection';
import MainChargesFictive from '../screens/chargesFictive/mainChargesFictive';
import MainChargeReelle from '../screens/chargesReelle/mainChargeReelle';
import MainDette from '../screens/dette/mainDette';
import MainEmprunt from '../screens/emprunt/mainEmprunt';
import MainEpargne from '../screens/epargne/mainEpargne';
import MainInjection from '../screens/injection/mainInjection';
import MainPret from '../screens/pret/mainPret';

const MouvementStack = createNativeStackNavigator();

export default function MouvemetNavigator() {
  return (
    <MouvementStack.Navigator>
      <MouvementStack.Screen name='Injection' component={MainInjection} options={{ header: () => null }} />
      <MouvementStack.Screen name='AutoInjection' component={MainAutoInjection} options={{ header: () => null }} />
      <MouvementStack.Screen name='Emprunt' component={MainEmprunt} options={{ header: () => null }} />
      <MouvementStack.Screen name='Dette' component={MainDette} options={{ header: () => null }} />
      <MouvementStack.Screen name='Pret' component={MainPret} options={{ header: () => null }} />
      <MouvementStack.Screen name='ChargesFictive' component={MainChargesFictive} options={{ header: () => null }} />
      <MouvementStack.Screen name='ChargesReelle' component={MainChargeReelle} options={{ header: () => null }} />
      <MouvementStack.Screen name='Epargne' component={MainEpargne} options={{ header: () => null }} />
    </MouvementStack.Navigator>
  )
}