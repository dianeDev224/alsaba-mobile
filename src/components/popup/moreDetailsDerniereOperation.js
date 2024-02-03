import React from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';

import { Ionicons } from '@expo/vector-icons';

function MoreDetailsDerniereOperations({ isModalVisible, setModalVisible }) {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })

    const infoGen = ["Date", "Type", "Code", `Moyen De Reception`]
    const infoExp = ["Nom Exp", "Prenom Exp", "Tel Exp", "Agence Exp"]
    const infoDest = ["Nom Dest", "Prenom Dest", "Tel Dest", "Pays Dest", "Ville Dest"]
    const infoMontFrais = ["Montant", "Frais Alsaba", "Frais Partenaire"]

    return (
        <StyledView className={`${isModalVisible ? 'flex flex-col' : 'hidden'} item-center justify-center w-full h-full`}>
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">
                <OutsidePressHandler
                    onOutsidePress={() => {
                        console.log('Pressed outside the box!');
                        setModalVisible(false)
                    }}
                >
                    <StyledView className={`flex flex-col w-[95%] ${styleSheet.popupContainerWidth} h-[90%] bg-[#fff] rounded-lg p-2`}>
                        <StyledView className='flex flex-col w-full space-y-[20px] justify-center items-center '>
                            <Pressable onPress={(event) => {
                                setModalVisible(false)
                            }}>
                                <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                    <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Details de l'operation 204KF</Text>
                                    <StyledView className='flex flex-row w-full items-center justify-center'>
                                        <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                    </StyledView>
                                </StyledView>
                            </Pressable>
                            <StyledView className="flex flex-col w-full">
                                <StyledView className="flex flex-row">
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        className="flex flex-col w-[30%] h-[200px] border-[2px] border-[#539228] flex-grow space-y-3">
                                        <Text className="text-center font-bold underline ">Infos Générales</Text>
                                        {
                                            infoGen.map((item, index) => {
                                                return (index % 2) ? (
                                                    < StyledView key={index} className="flex flex-row bg-[#b5e9a8]" >
                                                        <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff] ">{item}:</Text>
                                                    </StyledView>
                                                ) :
                                                    (
                                                        < StyledView key={index} className="flex flex-row bg-[#bdc6e4]" >
                                                            <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff]">{item}:</Text>
                                                        </StyledView>
                                                    )
                                            }

                                            )
                                        }

                                    </ScrollView>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        className="flex flex-col w-[30%] h-[200px] border-[2px] border-[#539228] flex-grow space-y-3">
                                        <Text className="text-center font-bold underline ">Infos Expediteur</Text>
                                        {
                                            infoExp.map((item, index) => {
                                                return (index % 2) ? (
                                                    < StyledView key={index} className="flex flex-row bg-[#b5e9a8]" >
                                                        <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff] ">{item}:</Text>
                                                    </StyledView>
                                                ) :
                                                    (
                                                        < StyledView key={index} className="flex flex-row bg-[#bdc6e4]" >
                                                            <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff]">{item}:</Text>
                                                        </StyledView>
                                                    )
                                            }

                                            )
                                        }
                                    </ScrollView>
                                </StyledView>
                                <StyledView className="flex flex-row">
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        className="flex flex-col w-[30%] h-[200px] border-[2px] border-[#539228] flex-grow space-y-3">
                                        <Text className="text-center font-bold underline ">Infos Destinataire</Text>
                                        {
                                            infoDest.map((item, index) => {
                                                return (index % 2) ? (
                                                    < StyledView key={index} className="flex flex-row bg-[#b5e9a8]" >
                                                        <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff] ">{item}:</Text>
                                                    </StyledView>
                                                ) :
                                                    (
                                                        < StyledView key={index} className="flex flex-row bg-[#bdc6e4]" >
                                                            <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff]">{item}:</Text>
                                                        </StyledView>
                                                    )
                                            }

                                            )
                                        }
                                    </ScrollView>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        className="flex flex-col w-[30%] h-[200px] border-[2px] border-[#539228] flex-grow space-y-3">
                                        <Text className="text-center font-bold underline ">Infos Montant & Frais</Text>
                                        {
                                            infoMontFrais.map((item, index) => {
                                                return (index % 2) ? (
                                                    < StyledView key={index} className="flex flex-row bg-[#b5e9a8]" >
                                                        <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff] ">{item}:</Text>
                                                        <Text className=" w-[70px]">sdkjjkjdhskfhsdjkfhskjdlsdjlkjdklqjdklqsjkfjfkdfjkdfjdkfjdkfjdkfjdkfj</Text>
                                                    </StyledView>
                                                ) :
                                                    (
                                                        < StyledView key={index} className="flex flex-row bg-[#bdc6e4]" >
                                                            <Text className="w-[70px] font-bold border-r-[2px] border-r-[#fff]">{item}:</Text>
                                                        </StyledView>
                                                    )
                                            }

                                            )
                                        }
                                    </ScrollView>
                                </StyledView>
                            </StyledView>
                            <StyledView className="flex flex-row w-full justify-center items-center space-x-2 ">
                                <Pressable className="flex flex-row w-[100px] h-[30px] items-center justify-center bg-[#df9b43] rounded-lg" onPress={() => setModalVisible(false)}>
                                    <Text className="font-bold text-lg ">
                                        Retour
                                    </Text>
                                </Pressable>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </OutsidePressHandler>
            </Modal>
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


export default React.memo(MoreDetailsDerniereOperations)