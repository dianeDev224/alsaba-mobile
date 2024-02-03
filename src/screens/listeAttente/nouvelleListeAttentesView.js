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
import SelectDropdown from 'react-native-select-dropdown';

import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
    DateTimePickerAndroid,
} from '../../../node_modules/@react-native-community/datetimepicker/src/DateTimePickerAndroid';

const StyledView = styled(View)
function NouvelleListeAttente() {

    const [showConfirm, setShowConfirm] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        console.log("selection is : ", currentDate)
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const Prioriter = [
        { id: 1, name: "urgent" },
        { id: 2, name: "asser-urgent" },
        { id: 3, name: "pas-urgent" }
    ]

    return (
        <StyledView className="flex-1">
            <Text className={`w-full font-bold text-[20px] italic text-[#2358ad] text-center my-2`}>Nouvelle Réservation</Text>
            <ScrollView
                contentContainerStyle={{
                    flex: 1
                }}
            >
                <StyledView className="flex-1 flex-col justify-center items-center mt-2 space-y-[40px]">
                    <StyledView className="flex">
                        <StyledView className="flex  flex-col w-[300px] h-[80px] self-center">
                            <Text className="flex w-[150px] h-[30px] bg-[#4db42d] rounded-t-[10px] text-[#fff] text-center font-bold">Description</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : livraison"
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-row items-center">
                        <Pressable onPress={showDatepicker}><MaterialCommunityIcons name="calendar-clock" size={40} color="black" /></Pressable>
                        <StyledView className='flex flex-row w-[180px] h-[50px] border-[3px] border-[#1b685b] self-center items-center justify-center'>
                            <Text className="text-[#adaaaa]">{DateFormatter({ selectionDate: date })}</Text>
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-row items-center">
                        <Pressable onPress={showTimepicker}><MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /></Pressable>
                        <StyledView className='flex flex-row w-[120px] h-[50px] border-[3px] border-[#1b685b] self-center items-center justify-center'>
                            <Text className="text-[#adaaaa]"> {TimeFormatter({ selectionTime: date })}</Text>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex flex-col '>
                        <Text className="w-[80px] text-lg font-bold text-[#88a6a1]">prioritée</Text>
                        <SelectDropdown
                            defaultButtonText="selectionné un service"
                            defaultValueByIndex={0}
                            rowStyle={{
                                marginHorizontal: 10,
                                height: 100,

                            }}
                            buttonStyle={{
                                borderRadius: 10,
                                width: 150,
                                height: 70,
                                backgroundColor: "#88a6a1"
                            }}
                            renderDropdownIcon={() => <Ionicons name="md-chevron-down-sharp" size={24} color="#32a852" />}
                            renderSearchInputLeftIcon={() => <Ionicons name="md-search-outline" size={24} color="#32a852" />}
                            search
                            renderCustomizedRowChild={(item) => <Text>{item.name}</Text>}
                            searchPlaceHolder="recherche"
                            data={Prioriter}

                            onSelect={(selectedItem, index) => {

                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem.name
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </StyledView>

                    <Pressable className="flex flex-row h-[50px] w-[100px] bg-[#2358ad] self-center items-center justify-center " onPress={() => setShowConfirm(true)}>
                        <Text className="text-[#fff] font-bold">Valider</Text>
                    </Pressable>
                </StyledView>
            </ScrollView>
            <ValidationPopup show={showConfirm} toggleShow={setShowConfirm} />
        </StyledView>
    );
}

function DateFormatter({ selectionDate }) {
    function jourDate(Njour) {
        switch (Njour) {
            case 0:
                return "Dimanche"
            case 1:
                return "Lundi"
            case 2:
                return "Mardi"
            case 3:
                return "Mercredi"
            case 4:
                return "Jeudi"
            case 5:
                return "Vendredi"
            case 6:
                return "Samedi"

        }
    }
    const jour = jourDate(selectionDate.getDay());
    const date = selectionDate.getDate()
    const mois = selectionDate.getMonth() + 1;
    const annee = selectionDate.getFullYear();

    return `${jour} ${date}/${mois}/${annee} `
}

function TimeFormatter({ selectionTime }) {
    const heure = selectionTime.getHours();
    const minute = selectionTime.getMinutes();
    const second = selectionTime.getSeconds();
    return `${heure} h /${minute} mn/${second}s `
}

function ValidationPopup({ show = false, toggleShow = () => { }, ref = useRef() }) {
    const StyledView = styled(View)
    return (
        <Modal isVisible={show} ref={ref} className={`flex flex-col b-[#ffa] self-center flex-1`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[300px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[200px] h-[40px] bg-[#2358ad] self-center">
                    <Text className="text-[#fff] font-bold">Confiramtion De la Tâche</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    <Text>vous êtes d'accord de la creation de la Tâche suivante </Text>
                    <Text>Titre :  </Text>
                    <Text>Descripton : </Text>
                    <Text>Date Execution : </Text>
                    <Text>Priorité : </Text>
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

export default React.memo(NouvelleListeAttente)
