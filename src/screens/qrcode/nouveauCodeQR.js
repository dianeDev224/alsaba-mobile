import React, {
    useContext,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import DropDown from '../../components/inputs/dropDown';
import InputField from '../../components/inputs/InputField';
import QrcodeGeneratePopup
    from '../../components/popup/qrcode/qrcodeGeneratePopup';
import { QRcodeContext } from '../../hooks/qrcodeContext';

const caveaux = ["Alsaba Cash", "MoMo", "Orange Money"]

function NouveauCodeQR({ }) {

    const [showValidationModal, setShowValidationModal] = useState(false)
    const [montant, setMontant] = useState()
    const [destinateur, setDestinateur] = useState()
    const { qrcodeInfo, updateQrcodeInfo } = useContext(QRcodeContext)
    const StyledView = styled(View);


    function handleDestinateur(newDestinateur) {
        setDestinateur(newDestinateur)
        updateQrcodeInfo({
            ...qrcodeInfo,
            nomDestinateur: newDestinateur
        })
    }

    function handleMontant(newMontant) {
        setMontant(newMontant)
        updateQrcodeInfo({
            ...qrcodeInfo,
            montant: newMontant
        })
    }
    const data = ["alama", "amadou", "mamadi", "ibrahim"]

    console.log("parent rerendered : ")
    return (
        <KeyboardAwareScrollView className={`flex flex-col w-full `}>
            <StyledView className='flex flex-col w-full space-y-[30px] justify-center items-center '>
                <Text className={`w-full text-center text-[#5a2983] font-bold text-[23px] italic`}>Nouveau QRcode</Text>
                <StyledView className=' flex-1  flex flex-col w-full justify-center items-center space-y-[50px]'>
                    <InputField value={montant} setValue={handleMontant} keyboardType={'numeric'} headerText={"Montant"} headerColorClass={'bg-[#5a2983]'} placeholder={"ex : 3000"} key={"abc"} />
                    <StyledView className='flex flex-col w-full items-center justify-center'>
                        <Text className="w-[100px] h-[30px] bg-[#5a2983] text-center text-[#fff]">contact</Text>
                        <StyledView className="flex flex-row w-full justify-center items-center mb-3">
                            <DropDown item={data} popupContainerWidth={"w-[100px]"} color={"#5a2983"} setValue={handleDestinateur} value={destinateur} defaultButtonText="destinateur" width={200} />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-col  space-y-3 items-center justify-between my-2">
                        <DropDown item={caveaux} popupContainerWidth={"w-[40px]"} color={"#5a2983"} defaultButtonText="Caveaux Source" width={230} key={"&ss"} />
                    </StyledView>
                </StyledView>
                <Pressable className={`flex flex-row w-[120px] h-[40px] rounded-full bg-[#5a2983] justify-center items-center`} onPress={() => setShowValidationModal(true)}>
                    <Text className={`text-[#fff]`}>Generer</Text>
                </Pressable>
            </StyledView>
            <QrcodeGeneratePopup isModalVisible={showValidationModal} setModalVisible={setShowValidationModal} />
        </KeyboardAwareScrollView>
    )
}

export default NouveauCodeQR

