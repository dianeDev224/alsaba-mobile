import { useState } from 'react';

import {
    Pressable,
    Text,
    View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Styles } from './styles';

export default function PackagePicker({ extraStyles = {} }) {

    const [nbreKilo, setNbreKilo] = useState(0)
    return (
        <View style={[Styles.container, extraStyles.container]}>
            <Text style={Styles.text}>
                {nbreKilo}kg
            </Text>
            <View>
                <Pressable style={{ transform: [{ rotateX: '180deg' }] }} onPress={() => setNbreKilo(nbreKilo + 1)}>
                    <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                </Pressable>
                <Pressable style={{ transform: [{ rotateX: '180deg' }] }} onPress={() => {
                    if (nbreKilo > 0) setNbreKilo(nbreKilo - 1)
                }} >
                    <MaterialIcons name="arrow-drop-up" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}