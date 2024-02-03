import React, {
    useRef,
    useState,
} from 'react';

import * as Sharing from 'expo-sharing';
import { styled } from 'nativewind';
import {
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';
import {
    ScrollView,
    TextInput,
} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import { captureRef } from 'react-native-view-shot';

const StyledView = styled(View)
function NouveauCodeMoney() {

    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <StyledView className="flex-1 bg-[#c9d0dd]">
            <Text className={`w-full font-bold text-[20px] italic text-[#2358ad] text-center my-2`}>Nouveau CodeMoney</Text>
            <ScrollView
                contentContainerStyle={{
                    flex: 1
                }}
            >
                <StyledView className="flex-1 flex-col items-center justify-center space-y-[50px]">
                    <StyledView className="flex">
                        <StyledView className="flex  flex-col w-[300px] h-[100px] self-center">
                            <Text className="flex w-[150px] h-[30px] bg-[#2358ad] rounded-t-[10px] text-[#fff] text-center font-bold">Beneficiaire</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 0648529316"
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex">
                        <StyledView className="flex flex-col w-[300px] h-[100px] self-center">
                            <Text className="flex w-[100px] h-[30px] bg-[#2358ad] rounded-t-[10px] text-[#fff] text-center font-bold">Montant</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 300dh"
                            />
                        </StyledView>
                    </StyledView>
                    <Pressable className="flex flex-row h-[50px] w-[100px] bg-[#4db42d] self-center items-center justify-center " onPress={() => setShowConfirm(true)}>
                        <Text className="text-[#fff] font-bold">Valider</Text>
                    </Pressable>
                </StyledView>
            </ScrollView>
            <ValidationPopup show={showConfirm} toggleShow={setShowConfirm} />
        </StyledView>
    );
}

function ValidationPopup({ show = true, toggleShow = () => { }, ref = useRef() }) {

    const StyledView = styled(View)
    const confirmationRef = useRef()


    function shareRecapTicket() {
        captureRef(confirmationRef, {
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
        <Modal isVisible={show} ref={ref} className={`flex flex-col b-[#ffa] self-center flex-1`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[450px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[250px] h-[40px] bg-[#2358ad] self-center">
                    <Text className="text-[#fff] font-bold">Confiramtion Du codeMoney #ff4</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    <View className="flex flex-col w-full  bg-[#fff] p-6 relative space-y-1 border-[3px] border-[#115DA9]" ref={confirmationRef} collapsable={false}>
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
                        <Text>vous venez d'effectuer une mise à disposition d'un codeMoney : </Text>
                        <Text className="font-semibold">Montant : </Text>
                        <Text>en faveur de : </Text>
                        <Text className="font-semibold">destinateur du codeMoney : </Text>
                        <Text className="font-semibold">Code Emetteur : </Text>
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
                        }}

                            collapsable={false}
                        >

                        </StyledView>
                    </View>
                </StyledView>
                <StyledView className="flex flex-row justify-around">
                    <Pressable className="bg-[#b63232] w-[100px] h-[30px] items-center justify-center" onPress={() => toggleShow(false)}>
                        <Text className="text-[#fff] font-bold">Quitter</Text>
                    </Pressable>
                    <Pressable className="bg-[#44b835] w-[100px] h-[30px] items-center justify-center" onPress={() => {
                        shareRecapTicket()
                    }}>
                        <Text className="text-[#fff] font-bold">Partager</Text>
                    </Pressable>
                </StyledView>
            </OutsidePressHandler>
        </Modal>
    )
}

export default React.memo(NouveauCodeMoney)
