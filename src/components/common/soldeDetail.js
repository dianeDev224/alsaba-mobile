import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import {
    Text,
    View,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { Styles } from './styles';

export default function DetailSolde({ title = "solde" }) {

    const [fontSize, setFontSize] = useState(0)

    return (
        <LinearGradient
            colors={['#94FDBE', '#0d7030', '#6cb87a']}
            style={Styles.soldeContainer}
        >
            <Text style={Styles.titleTextStyle}>{title}</Text>
            <View style={{
                flexDirection: "row",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                columnGap: 12,
                padding: 2
            }}
            >
                <Text style={{ flex: 1, fontWeight: "bold", color: '#fff', textAlign: "center", fontSize: fontSize / 11 }} onLayout={(e) => {
                    setFontSize(e.nativeEvent.layout.width)
                    console.log("the dimension : ", e.nativeEvent)
                }}>224242434343 FGN</Text>
                <Entypo name="eye" size={30} color="#e0b422" className="bg-[#115DA9]" />
            </View>
        </LinearGradient >
    )
}
