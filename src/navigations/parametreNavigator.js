import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainCodeSecret from '../screens/codeSecret/mainCodeSecret';
import MainContact from '../screens/contact/mainContact';
import MainEmpreinteDigital
    from '../screens/empreinteDigital/mainEmpreinteDigital';
import MainMotDePasse from '../screens/gestionMotPasse/mainMotDePasse';
import MainProfile from '../screens/gestionProfile/mainProfile';

const ParametreStack = createNativeStackNavigator();

export default function ParametreNavigator() {
    return (
        <ParametreStack.Navigator>
            <ParametreStack.Screen name='MotDePasse' component={MainMotDePasse} options={{ header: () => null }} />
            <ParametreStack.Screen name='Profile' component={MainProfile} options={{ header: () => null }} />
            <ParametreStack.Screen name='EmpreinteDigital' component={MainEmpreinteDigital} options={{ header: () => null }} />
            <ParametreStack.Screen name='CodeSecret' component={MainCodeSecret} options={{ header: () => null }} />
            <ParametreStack.Screen name='Contact' component={MainContact} options={{ header: () => null }} />
        </ParametreStack.Navigator>
    )

}