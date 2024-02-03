import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BilanMainWrapper
    from '../components/caisse/bilan/bilanWrapper/bilanWrapper';

const BilanStack = createNativeStackNavigator();


export default function BilanNavigator() {
    return (
        <BilanStack.Navigator>
            <BilanStack.Screen name='BilanWrapper' component={BilanMainWrapper} options={{ header: () => null }} />
        </BilanStack.Navigator>
    )
}