import React, { useState } from 'react';

import { styled } from 'nativewind';
import {
    ActivityIndicator,
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Modal from 'react-native-modal';

import { Ionicons } from '@expo/vector-icons';

import DropDown from '../../inputs/dropDown';

const caveaux = ["Alsaba Cash", "MoMo", "Orange Money"]

function QrcodeScannDataPopup({ isModalVisible, setModalVisible, data }) {

    console.log("data qrcode : ", data)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [activityIndicator, setActivityIncator] = useState(false);

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })

    return (
        <StyledView className="flex flex-col item-center justify-center w-full h-full">
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">

                <StyledView className={`flex flex-col w-[95%] ${styleSheet.popupContainerWidth} h-[70%] bg-[#fff] rounded-lg p-2`}>
                    <StyledView className='flex flex-col w-full space-y-[50px] justify-center items-center '>
                        <Pressable onPress={(event) => {
                            setModalVisible(false)
                        }}>
                            <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Validation de QRcode</Text>
                                <StyledView className='flex flex-row w-full items-center justify-center'>
                                    <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                </StyledView>
                            </StyledView>
                        </Pressable>
                        {!activityIndicator && <Text>Validez-vous cette transaction ? </Text>}
                        {(data?.montant && !activityIndicator) && <Text>montant dont vous recevrai : {data.montant}</Text>}
                        {(data?.nomDestinateur && !activityIndicator) && <Text>expediteur : {data.nomDestinateur}</Text>}
                        {activityIndicator && <ActivityIndicator size={40} color="#00ff00" />}
                        <StyledView className="flex flex-col  space-y-3 items-center justify-between my-2">
                            <DropDown item={caveaux} popupContainerWidth={"w-[40px]"} color={"#2358ad"} defaultButtonText="Caveaux Destination" width={230} key={"&ss"} />
                        </StyledView>
                        {!activityIndicator && <StyledView className="flex flex-row w-full justify-around">
                            <Pressable className="flex flex-row w-[100px] h-[50px] bg-[#553737] justify-center items-center rounded-lg" onPress={() => {
                                setModalVisible(false)
                            }}>
                                <Text className="text-[#fff]">Annuler</Text>
                            </Pressable>
                            <Pressable className="flex flex-row w-[100px] h-[50px] bg-[#4a9932] justify-center items-center rounded-lg" onPress={(e) => {
                                e.stopPropagation()
                                setActivityIncator(true)
                                setTimeout(() => {
                                    setModalVisible(false)
                                    setActivityIncator(false)
                                }, 2000)
                            }}>
                                <Text className="text-[#fff]">Valider</Text>
                            </Pressable>
                        </StyledView>}
                    </StyledView>
                </StyledView>
            </Modal>
        </StyledView>
    );
};


function styleGenerator({ windowHeight, windowWidth }) {
    console.log("la data : ", windowWidth)
    if (windowWidth > 320 && windowWidth < 400) {
        return {
            popupContainerWidth: "w-[320px]"
        }
    } else {
        return {
            popupContainerWidth: "w-[350px]"
        }
    }
}


export default React.memo(QrcodeScannDataPopup)