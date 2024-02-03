import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';

import TopNavbar from '../../components/common/topAppNavbar';
import WithScreenSwippe from '../../components/highOrder/withScreenSwippe';
import AutoInjectionAnnuler from './autoInjectionAnnuler';
import AutoInjectionEffectuer from './autoInjectionEffectuer';
import NouvelleAutoInjection from './nouvelleAutoInjection';
import { autoInjectionStyles } from './styles';

const autoInjectionRoutes = {
    NOUVELLE_AUTO_INJECTION: "nouvelle injection",
    AUTO_INJECTION_EFFECTUER: "auto injection effectuer",
    AUTO_INJECTION_ANNULER: "auto injecton annuler",
}

const screenData = [

    {
        id: 1,
        screen: NouvelleAutoInjection
    },
    {
        id: 2,
        screen: AutoInjectionEffectuer
    },
    {
        id: 3,
        screen: AutoInjectionAnnuler
    },
]

export default function MainAutoInjection(props) {

    const flatListRef = useAnimatedRef()

    return (

        <WithScreenSwippe
            TitleBar={<TopNavbar title={"Auto Injection"} rest={{ ...props }} classNamer={"bg-[#abc]"} />}

            soldeTitle='Auto Injection'

            Navbar={
                <View
                    style={autoInjectionStyles.navigationBar}
                >
                    <Pressable
                        style={[autoInjectionStyles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 0 })
                        }}
                    >
                        <Text style={autoInjectionStyles.textStyle}>Nouvelle Auto Injection</Text>

                    </Pressable>

                    <Pressable
                        style={[autoInjectionStyles.navigationBarItem, { backgroundColor: '#399137' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 1 })
                        }}

                    >
                        <Text style={autoInjectionStyles.textStyle}>Auto Injection Effectuer</Text>

                    </Pressable>

                    <Pressable
                        style={[autoInjectionStyles.navigationBarItem, { backgroundColor: '#c07889' }]}
                        onPress={() => {
                            flatListRef.current?.scrollToIndex({ index: 2 })
                        }}
                    >
                        <Text style={autoInjectionStyles.textStyle}>Auto Injection Annulées</Text>

                    </Pressable>
                </View>

            }

            screenData={screenData}
            flatListRef={flatListRef}
        />
    )
}
