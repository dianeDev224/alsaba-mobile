import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { memo, useRef, useState } from "react";
import { Image, Pressable, Share, Text, View, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import { captureRef } from "react-native-view-shot";
import * as Sharing from 'expo-sharing'
import { LinearGradient } from "expo-linear-gradient";

function TransfertEmisSuccessMessage({ isModalVisible, setModalVisible }) {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const recapTicketRef = useRef();

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })

    function shareRecapTicket() {
        captureRef(recapTicketRef, {
            format: "png",
            quality: 1,
        }).then(
            async (uri) => {
                console.log("uri : ", uri)
                Sharing.isAvailableAsync().then((available) => {
                    if (available) {
                        Sharing.shareAsync(uri)
                            .then((data) => {
                                console.log("content shared")
                            })
                            .catch((err) => {
                                console.log(JSON.stringify(err));
                            });
                    } else {
                        setState('Sharing is NOT available');
                    }
                });
            },
            (error) => console.error("Oops, snapshot failed", error)
        );
    }

    return (
        <StyledView className="flex flex-col item-center justify-center w-full h-full">
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">
                <StyledView className={`flex flex-col w-[95%] ${styleSheet.popupContainerWidth} h-[80%] bg-[#fff] rounded-lg p-2`}>
                    <StyledView className='flex flex-col w-full space-y-[20px] justify-center items-center '>
                        <Pressable onPress={(event) => {
                            setModalVisible(false)
                        }}>
                            <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Operation Reussie</Text>
                                <StyledView className='flex flex-row w-full items-center justify-center'>
                                    <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                </StyledView>
                            </StyledView>
                        </Pressable>
                        <View className="flex flex-col w-full  bg-[#fff] p-6 relative space-y-1 border-[3px] border-[#115DA9]" ref={recapTicketRef} collapsable={false}>
                            <StyledView style={{
                                width: 0,
                                height: 0,
                                position: "absolute",
                                right: 0,
                                top: 0,
                                borderLeftWidth: 80,
                                borderTopWidth: 80,
                                borderLeftColor: 'green',
                                borderTopColor: 'green',
                                borderBottomLeftRadius: 80
                            }}>

                            </StyledView>
                            <StyledView className="flex flex-row justify-between items-center" collapsable={false}>
                                <Image
                                    src={'https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg'}
                                    alt='logo-alsaba'
                                    className={`w-14 h-14 rounded-full`}
                                />
                            </StyledView>
                            <Text>
                                Bonjour ! Vous venez d'effectuer un transfert d'argent chez ALSABA CASH en faveur de
                            </Text>
                            <Text className="font-bold">
                                Mr/Mme : NOM ET PRENOM DEST.
                            </Text>
                            <Text>
                                Veuillez lui communiquer les informations suivantes :
                            </Text>
                            <Text className="font-bold">
                                Contact Agence :
                            </Text>
                            <Text className="font-bold">
                                Code :
                            </Text>
                            <Text className="font-bold">
                                Montant :
                            </Text>
                            <Text className="font-bold">
                                Merci pour votre fidélité !!!
                            </Text>
                            <StyledView style={{
                                width: 0,
                                height: 0,
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                borderRightWidth: 30,
                                borderBottomWidth: 30,
                                borderRightColor: '#df9b43',
                                borderBottomColor: '#df9b43',
                                borderTopRightRadius: 30
                            }}>

                            </StyledView>
                        </View>
                        <StyledView className="flex flex-row w-full justify-center items-center space-x-2 ">
                            <Pressable className="flex flex-row w-[100px] h-[30px] items-center justify-center bg-[#df9b43] rounded-lg" onPress={() => setModalVisible(false)}>
                                <Text className="font-bold text-lg ">
                                    Retour
                                </Text>
                            </Pressable>
                            <Pressable className="flex flex-row w-[120px] h-[30px] items-center justify-center bg-[#38b849] rounded-lg" onPress={async () => {
                                shareRecapTicket()
                            }}>
                                <Text className="text-[#fff] font-bold mr-1 text-lg">Partager</Text>
                                <FontAwesome name="share-alt" size={24} color="#fff" />
                            </Pressable>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </Modal >
        </StyledView >
    );
}


function styleGenerator({ windowHeight, windowWidth }) {
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


export default React.memo(TransfertEmisSuccessMessage)