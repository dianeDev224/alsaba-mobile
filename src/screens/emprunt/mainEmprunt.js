import {
    Pressable,
    Text,
    View,
} from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import HistoriqueEmprunt from './historiqueEmprunt';
import NouveauEmprunt from './nouveauEmprunt';
import RemboursementEmprunt from './remboursementEmprunt';
import { mainEmprunttyles } from './styles';

export const empruntsRoutes = {
    NOUVELLE_EMPRUNT: "nouvelle emprunt",
    REMBOURSEMENT_EMPRUNT: "remboursement emprunt",
    HISTORIQUE_EMPRUNT: "historique emprunt",
}

const screenData = [

    {
        id: 1,
        screen: NouveauEmprunt
    },
    {
        id: 2,
        screen: RemboursementEmprunt
    },
    {
        id: 3,
        screen: HistoriqueEmprunt
    },
]


export default function MainEmprunt(props) {

    const flatListRef = useAnimatedRef()

    return (

        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Emprunts"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Emprunts'

            Navbar={
                <View
                    style={mainEmprunttyles.navigationBar}
                >
                    <Pressable
                        style={[mainEmprunttyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Animated.Text style={mainEmprunttyles.textStyle}>Nouvelle Emprunt</Animated.Text>
                    </Pressable>

                    <Pressable
                        style={[mainEmprunttyles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => {
                            flatListRef.current.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={mainEmprunttyles.textStyle}>Remboursement D'emprunt</Text>
                    </Pressable>
                    <Pressable
                        style={[mainEmprunttyles.navigationBarItem, { backgroundColor: '#8199ce' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}

                    >
                        <Text style={mainEmprunttyles.textStyle}>Historique Des Emprunts</Text>
                    </Pressable>
                </View>

            }

            screenData={screenData}
            flatListRef={flatListRef}
        />
    )
}

