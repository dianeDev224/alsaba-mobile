import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import DemandeInjection from './demandeInjection';
import InjectionAnnuler from './injectionAnnuler';
import InjectionLivrer from './injectionLivrer';
import InjectionReçu from './injectionReçu';
import NouvelleInjection from './nouvelleInjection';
import { Styles } from './styles';

const injectionRoutes = {
    NOUVELLE_INJECTION: "nouvelle injection",
    INJECTION_RECU: "nouvelle reçu",
    INJECTION_LIVRER: "injection livrer",
    INJECTION_ANNULER: "injection annulé",
    DEMANDE_INJECTION: "demandes d'injection",
}
const screenData = [

    {
        id: 1,
        screen: NouvelleInjection
    },
    {
        id: 2,
        screen: InjectionReçu
    },
    {
        id: 3,
        screen: InjectionLivrer
    },
    {
        id: 4,
        screen: DemandeInjection
    },
    {
        id: 5,
        screen: InjectionAnnuler
    },
]

export default function MainInjection(props) {

    const flatListRef = useAnimatedRef()

    return (

        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Injections"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Injections'

            Navbar={


                <View
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={Styles.textStyle}>Nouvelle Injection</Text>
                    </Pressable>
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#5daa5c' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={Styles.textStyle}>injection Réçu</Text>
                    </Pressable>
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#4b8aa3' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}
                    >
                        <Text style={Styles.textStyle}>injection Livrer</Text>
                    </Pressable>
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#754794' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 3 })
                        }}
                    >
                        <Text style={Styles.textStyle}>Demande D'injection</Text>
                    </Pressable>
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b46376' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 4 })
                        }}
                    >
                        <Text style={Styles.textStyle}>injection Annulées</Text>
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
        case injectionRoutes.NOUVELLE_INJECTION:
            return <NouvelleInjection navigateTo={navigateTo} />;
        case injectionRoutes.DEMANDE_INJECTION:
            return <DemandeInjection navigateTo={navigateTo} />;
        case injectionRoutes.INJECTION_ANNULER:
            return <InjectionAnnuler navigateTo={navigateTo} />;
        case injectionRoutes.INJECTION_RECU:
            return <InjectionReçu navigateTo={navigateTo} />;
        case injectionRoutes.INJECTION_LIVRER:
            return <InjectionLivrer navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}



