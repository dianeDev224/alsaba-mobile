import React, {
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
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

import DropDown from '../../components/inputs/dropDown';

const StyledView = styled(View)
const caveaux = ["Alsaba Cash", "MoMo", "Orange Money"]

function EncaisserCodeMoney() {

    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <StyledView className="flex-1 bg-[#e2f7ed]">
            <Text className={`w-full font-bold text-[20px] italic text-[#16945b] text-center my-2`}>Encaisser un CodeMoney</Text>
            <ScrollView

            >
                <StyledView className="flex-1 flex-col items-center justify-center space-y-[50px]">
                    <StyledView className="flex">
                        <StyledView className="flex  flex-col w-[300px] h-[100px] self-center">
                            <Text className="flex w-[150px] h-[30px] bg-[#16945b] rounded-t-[10px] text-[#fff] text-center font-bold">Tel Desniteur</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 0648529316"
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex">
                        <StyledView className="flex flex-col w-[300px] h-[100px] self-center">
                            <Text className="flex w-[180px] h-[30px] bg-[#16945b] rounded-t-[10px] text-[#fff] text-center font-bold">Code Emetteur</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 300dh"
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex">
                        <StyledView className="flex flex-col w-[300px] h-[100px] self-center">
                            <Text className="flex w-[180px] h-[30px] bg-[#16945b] rounded-t-[10px] text-[#fff] text-center font-bold">Code Receveur

                            </Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 300dh"
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-col  space-y-3 items-center justify-between my-2">
                        <DropDown item={caveaux} popupContainerWidth={"w-[40px]"} color={"#16945b"} defaultButtonText="Caveaux Destination" width={230} key={"&ss"} />
                    </StyledView>
                    <Pressable className="flex flex-row h-[50px] w-[100px] bg-[#4db42d] self-center items-center justify-center mb-3 " onPress={() => setShowConfirm(true)}>
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
    return (
        <Modal isVisible={show} ref={ref} className={`flex flex-col b-[#ffa] self-center flex-1`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[300px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[200px] h-[40px] bg-[#16945b] self-center">
                    <Text className="text-[#fff] font-bold">Confiramtion Du Depôt #ff4</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    <Text>vous êtes sur le point d'encaisser un codeMoney : </Text>
                    <Text className="font-semibold">Montant : </Text>
                    <Text>provenant de : </Text>
                    <Text className="font-semibold">expediteur du Code : </Text>
                </StyledView>
                <StyledView className="flex flex-row justify-around">
                    <Pressable className="bg-[#b63232] w-[100px] h-[30px] items-center justify-center" onPress={() => toggleShow(false)}>
                        <Text className="text-[#fff] font-bold">Quitter</Text>
                    </Pressable>
                    <Pressable className="bg-[#44b835] w-[100px] h-[30px] items-center justify-center" onPress={() => toggleShow(false)}>
                        <Text className="text-[#fff] font-bold">Confirmer</Text>
                    </Pressable>
                </StyledView>
            </OutsidePressHandler>
        </Modal>
    )
}

export default React.memo(EncaisserCodeMoney)
