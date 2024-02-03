import {
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import SelectDropdown from 'react-native-select-dropdown';

import { Ionicons } from '@expo/vector-icons';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)
export default function SimulationTransfertIntl(props) {

    const [avecFrais, setAvecFrais] = useState(false)
    const data = ["Guinnée", "Sénégal", "Mali"]
    const [paysSelctionner, setPaysSelectionner] = useState()
    const [showConfirm, setShowConfirm] = useState(false);
    const Pays = [
        { id: 1, name: "Guinnée" },
        { id: 2, name: "Mali" },
        { id: 3, name: "Sénégal" }
    ]
    const Villes = [
        { id: 1, name: "Conakry" },
        { id: 2, name: "Dakar" },
        { id: 3, name: "Kindia" }
    ]
    const MoyenRecption = [
        { id: 1, name: "Alsaba Cash" },
        { id: 2, name: "Orange Money" },
        { id: 3, name: "MoMo" }
    ]



    return (
        <ComponentSafeArea>
            <StyledView className="flex flex-col space-y-3 flex-1">
                <TopNavbar title={"Simulation De Transfert Nationnale"} rest={{ ...props }} classNamer={"bg-[#abc]"} />
                <Text className="flex w-full text-center font-bold text-lg text-[#626663]">Transfert Internationnal</Text>
                {/* <StyledView className='flex flex-row w-full h-[100px] items-center'>
                    <StyledView className='flex flex-col w-[100px] h-full border-[3px] border-[#87a346] items-center justify-center bg-[#23707a]'>
                        <Text className="text-[#fff]">Montant</Text>
                    </StyledView>

                    <StyledView className='flex-1 h-[5px] border-[3px]' />

                    <StyledView className='flex flex-col w-[100px] h-full border-[3px] border-[#87a346] items-center justify-center bg-[#23707a]'>
                        <Text className="text-[#fff]">Moyen Reception</Text>
                    </StyledView>
                    <StyledView className='flex-1 h-[5px] border-[3px]' />

                    <StyledView className='flex flex-col w-[100px] h-full border-[3px] border-[#87a346] items-center justify-center bg-[#23707a]'>
                        <Text className="text-[#fff]">Resultat</Text>
                    </StyledView>
                </StyledView> */}
                <ScrollView>
                    <StyledView className='flex flex-1 flex-col justify-center items-center space-y-6 '>
                        <StyledView className="flex flex-col w-[300px] h-[80px]">
                            <Text className="flex w-[100px] h-[30px] bg-[#4db42d] rounded-t-[10px] text-[#fff] text-center font-bold">Montant</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 1200dh"
                                multiline={true}
                            />
                        </StyledView>
                        <StyledView className='flex flex-row w-[200px] space-x-4'>
                            <Pressable className='flex flex-row space-x-1' onPress={() => setAvecFrais(!avecFrais)}>
                                {avecFrais && <Ionicons name="md-radio-button-on" size={24} color="black" />}
                                {!avecFrais && <Ionicons name="md-radio-button-off-sharp" size={24} color="black" />}
                                <Text>frais inclus</Text>
                            </Pressable>
                            <Pressable className='flex flex-row space-x-1' onPress={() => setAvecFrais(!avecFrais)}>
                                {!avecFrais && <Ionicons name="md-radio-button-on" size={24} color="black" />}
                                {avecFrais && <Ionicons name="md-radio-button-off-sharp" size={24} color="black" />}
                                <Text>frais non inclus</Text>
                            </Pressable>
                        </StyledView>
                        <DropDown data={Pays} label='pays De Destination' />
                        <DropDown data={Villes} label='Ville De Destination' />
                        <DropDown data={MoyenRecption} label='Moyen De Reception' />
                        <Pressable className='flex flex-row w-[200px] h-[50px] bg-[#a6d6a8] items-center justify-center rounded-lg' onPress={() => setShowConfirm(true)}>
                            <Text className="text-[#fff] font-bold text-lg ">Valider</Text>
                        </Pressable>
                    </StyledView>
                </ScrollView>
                <ValidationPopup show={showConfirm} toggleShow={setShowConfirm} />
            </StyledView>
        </ComponentSafeArea>
    )
}



function ValidationPopup({ show = false, toggleShow = () => { }, ref = useRef() }) {
    const StyledView = styled(View)
    return (
        <Modal isVisible={show} ref={ref} className={`flex flex-col b-[#ffa] self-center`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[300px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[230px] h-[40px] bg-[#2358ad] self-center">
                    <Text className="text-[#fff] font-bold">Confiramtion De la Simulation</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    <Text>Pour Cette Simulation </Text>
                    <Text>Montant :  </Text>
                    <Text>Frais Total Alsaba : </Text>
                    <Text>Frais Total Orange-Money: </Text>
                    <Text>Total : </Text>
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



function DropDown({ data, label = "pays De Destination" }) {
    return (
        <StyledView className='flex flex-col my-5'>
            <Text className="w-[200px] text-base font-bold text-[#88a6a1]">{label}</Text>
            <SelectDropdown
                defaultButtonText="selectionné un pays"
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
                data={data}

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
    )
}