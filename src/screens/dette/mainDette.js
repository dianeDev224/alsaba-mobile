import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import HistoriqueDette from './historiqueDette';
import NouvelleDette from './nouvelleDette';
import RemboursementDette from './remboursementDette';
import { mainDetteStyles } from './styles';

const detteRoutes = {
    NOUVELLE_DETTE: "nouvelle dette",
    REMBOURSEMENT_DETTE: "remboursement dette",
    HISTORIQUE_DETTE: "historique des dettes"
}

const screenData = [

    {
        id: 1,
        screen: NouvelleDette
    },
    {
        id: 2,
        screen: RemboursementDette
    },
    {
        id: 3,
        screen: HistoriqueDette
    },
]


export default function MainDette(props) {

    const flatListRef = useAnimatedRef()

    return (
        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Dettes"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Dettes'

            Navbar={
                <View
                    style={mainDetteStyles.navigationBar}
                >
                    <Pressable
                        style={[mainDetteStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={mainDetteStyles.textStyle}>Nouvelle Dette</Text>
                    </Pressable>

                    <Pressable
                        style={[mainDetteStyles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={mainDetteStyles.textStyle}>Remboursement De Dette</Text>
                    </Pressable>

                    <Pressable
                        style={[mainDetteStyles.navigationBarItem, { backgroundColor: '#2c817a' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}
                    >
                        <Text style={mainDetteStyles.textStyle}>Historique Des Dettes</Text>
                    </Pressable>

                </View>

            }

            screenData={screenData}
            flatListRef={flatListRef}
        />
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case detteRoutes.NOUVELLE_DETTE:
            return <NouvelleDette navigateTo={navigateTo} />;
        case detteRoutes.REMBOURSEMENT_DETTE:
            return <RemboursementDette navigateTo={navigateTo} />;
        case detteRoutes.HISTORIQUE_DETTE:
            return <HistoriqueDette navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}