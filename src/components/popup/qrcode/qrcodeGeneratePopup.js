import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";
import React, { memo, useContext, useState } from "react";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import OutsidePressHandler from "react-native-outside-press";
import QRCode from "react-native-qrcode-svg";
import { QRcodeContext } from "../../../hooks/qrcodeContext";

function QrcodeGeneratePopup({ isModalVisible, setModalVisible }) {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const { qrcodeInfo, updateQrcodeInfo, resetQrcodeInfo } = useContext(QRcodeContext)

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })
    console.log(windowSize)

    return (
        <StyledView className="flex flex-col item-center justify-center w-full h-full">
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">
                <OutsidePressHandler
                    onOutsidePress={() => {
                        console.log('Pressed outside the box!');
                        setModalVisible(false)
                    }}
                >
                    <StyledView className={`flex flex-col w-[95%] ${styleSheet.popupContainerWidth} h-[80%] bg-[#fff] rounded-lg p-2`}>
                        <StyledView className='flex flex-col w-full space-y-[50px] justify-center items-center '>
                            <Pressable onPress={(event) => {
                                setModalVisible(false)
                            }}>
                                <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                    <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Generation de QRcode</Text>
                                    <StyledView className='flex flex-row w-full items-center justify-center'>
                                        <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                    </StyledView>
                                </StyledView>
                            </Pressable>
                            <QRCode
                                value={JSON.stringify(qrcodeInfo)}
                            />
                            <StyledView className="flex flex-row w-full justify-around">
                                <Pressable className="flex flex-row w-[100px] h-[50px] bg-[#553737] justify-center items-center rounded-lg" onPress={() => {
                                    resetQrcodeInfo()
                                    setModalVisible(false)
                                }}>
                                    <Text className="text-[#fff]">Annuler</Text>
                                </Pressable>
                                <Pressable className="flex flex-row w-[100px] h-[50px] bg-[#4a9932] justify-center items-center rounded-lg" onPress={() => {
                                    resetQrcodeInfo()
                                    setModalVisible(false)
                                }}>
                                    <Text className="text-[#fff]">Valider</Text>
                                </Pressable>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </OutsidePressHandler>
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


export default React.memo(QrcodeGeneratePopup)