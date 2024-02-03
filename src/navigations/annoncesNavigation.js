import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AjouterAnnonce from '../screens/ajouterAnnonce/ajouterAnnonceView';
import SouscriptionAnnonce
    from '../screens/souscriptionAnnonce/souscriptionAnnonceView';

const AnnoncesStack = createNativeStackNavigator();

export default function AnnoncesNavigator() {
    return (
        <AnnoncesStack.Navigator>
            <AnnoncesStack.Screen name='SouscriptionAnnonce' component={SouscriptionAnnonce} options={{ header: () => null }} />
            <AnnoncesStack.Screen name='AjoutAnnonce' component={AjouterAnnonce} options={{ header: () => null }} />
        </AnnoncesStack.Navigator>
    )
}