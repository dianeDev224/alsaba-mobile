import { Pressable } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerMenu({ handleClick = () => { } }) {
    return (
        <Pressable
            onPress={handleClick}>
            <MaterialCommunityIcons name="view-dashboard-outline" size={35} color="#0e964d" />
        </Pressable>
    )
}