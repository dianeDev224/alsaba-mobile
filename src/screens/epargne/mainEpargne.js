import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import HistoriqueEpargne from './historiqueEpargne';
import InjectionEpargne from './injectionEpargne';
import NouvelleEpargne from './nouvelleEpargne';
import { mainEpargneStyles } from './styles';

export const eparngeRoutes = {
    NOUVELLE_EPARGNE: "nouvelle epargne",
    INJECTION_EPARGNE: "injection epargne",
    HISTORIQUE_EPARGNE: "historique des epargnes"
}

const screenData = [

    {
        id: 1,
        screen: NouvelleEpargne
    },
    {
        id: 2,
        screen: InjectionEpargne
    },
    {
        id: 3,
        screen: HistoriqueEpargne
    },
]


export default function MainEpargne(props) {

    const flatListRef = useAnimatedRef()

    return (
        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Mes Epargnes"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Epargnes'

            Navbar={
                <View
                    style={mainEpargneStyles.navigationBar}
                >
                    <Pressable
                        style={[mainEpargneStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={mainEpargneStyles.textStyle}>Nouvelle Epargne</Text>
                    </Pressable>

                    <Pressable
                        style={[mainEpargneStyles.navigationBarItem, { backgroundColor: '#73af72' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={mainEpargneStyles.textStyle}>Injection Epargne</Text>
                    </Pressable>

                    <Pressable
                        style={[mainEpargneStyles.navigationBarItem, { backgroundColor: '#528bcc' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}

                    >
                        <Text style={mainEpargneStyles.textStyle}>Historique Des Epargnes</Text>
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
        case eparngeRoutes.NOUVELLE_EPARGNE:
            return <NouvelleEpargne navigateTo={navigateTo} />;
        case eparngeRoutes.INJECTION_EPARGNE:
            return <InjectionEpargne navigateTo={navigateTo} />;
        case eparngeRoutes.HISTORIQUE_EPARGNE:
            return <HistoriqueEpargne navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}