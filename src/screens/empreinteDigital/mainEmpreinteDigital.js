import {
    useEffect,
    useState,
} from 'react';

import * as LocalAuthentication from 'expo-local-authentication';
import { styled } from 'nativewind';
import {
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import SwitchToggle from 'react-native-switch-toggle';

import { Ionicons } from '@expo/vector-icons';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)

export default function MainEmpreinteDigital(props) {
    const [toggle, setToggle] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        checkDeviceForHardware()
        checkForFingerprints()
    }, [])

    function handleToggle() {
        setToggle(!toggle)
    }

    const checkDeviceForHardware = async () => {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        console.log(compatible);
    }

    const checkForFingerprints = async () => {
        let fingerprints = await LocalAuthentication.isEnrolledAsync();
        console.log(fingerprints);
    }

    const scanFingerprint = async () => {
        let result = await LocalAuthentication.authenticateAsync();
        console.log('Scan Result:', result)
        // Alert.alert(
        //     'Scannage En Effectuer avec success',
        // )
    }

    const showAndroidAlert = () => {
        Alert.alert(
            'Scannage En cour',
            [
                {
                    text: 'Scanner', onPress: () => {
                        scanFingerprint();
                    }
                },
                { text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel' }
            ]
        )
    }


    return (
        <ComponentSafeArea>
            <StyledView className="flex-1">
                <TopNavbar title={"Données Biometrique"} rest={{ ...props }} />
                <StyledView className="flex-1 flex-col  space-y-5">
                    <StyledView className="flex flex-col m-3">
                        <Text className="text-base">Activer Vos Données Biometriques ,  </Text>
                        <Text className="text-base">pour pouvoir faciliter les operations avec alsaba ! </Text>
                    </StyledView>
                    <StyledView className="flex flex-row justify-center items-center">
                        <Switch toggle={toggle} setToggle={handleToggle} />
                        <Text className="font-bold m-3 text-lg">Activer</Text>
                    </StyledView>
                    <StyledView className="flex flex-col items-center justify-center">
                        <Text className="flex text-center m-3 font-bold text-[#3fa531]">Veillez touchez L'empreinte</Text>
                        <TouchableOpacity onPress={() => scanFingerprint()}>
                            <Ionicons name="md-finger-print" size={50} color="#000" />
                        </TouchableOpacity>
                    </StyledView>
                </StyledView>
            </StyledView>
            {/* <ValidationPopup show={showPopup} toggleShow={setShowPopup} /> */}
        </ComponentSafeArea>
    )
}

function ValidationPopup({ show = false, toggleShow = () => { } }) {
    return (
        <Modal isVisible={show} className={`flex flex-col self-center`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col h-[300px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[200px] h-[40px] bg-[#2358ad] self-center">
                    <Text className="text-[#fff] font-bold">Activation De L'empreinte</Text>
                </StyledView>
            </OutsidePressHandler>
        </Modal>
    )
}

function Switch({ toggle, setToggle }) {
    return (
        <SwitchToggle
            switchOn={toggle}
            onPress={setToggle}
            containerStyle={{
                width: 106,
                height: 48,
                borderRadius: 25,
                padding: 5,
            }}
            circleStyle={{
                width: 40,
                height: 40,
                borderRadius: 20,
            }}
            backgroundColorOn='#09eb3a'
            backgroundColorOff='#eb0942'
        />
    )
}