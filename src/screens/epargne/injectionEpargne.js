import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    TextInput,
    useWindowDimensions,
    View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { Ionicons } from '@expo/vector-icons';

import WithNavbarSwippe from '../../components/highOrder/withNavbarSwippe';

const StyledView = styled(View)
const caveaux = [
    { id: 1, name: "Banque" },
    { id: 2, name: "Caisse" },
    { id: 3, name: "Orange Money" }
]
export default function InjectionEpargne() {


    const { width: SCREEN_WIDTH } = useWindowDimensions()

    return (
        <WithNavbarSwippe
            ScreenSwippe={
                <StyledView style={{ width: SCREEN_WIDTH, backgroundColor: "#e0f1e0" }} className="flex  mt-5">
                    <StyledView className="flex h-[100%] space-y-6">
                        <Text className="flex w-full text-center font-bold text-lg text-[#626663]">Injection D'Epargne</Text>
                        <StyledView className="flex flex-col flex-1 items-center space-y-[20px]">
                            <StyledView className="flex flex-col w-[300px] h-[80px]">
                                <Text className="flex w-[100px] h-[30px] bg-[#73af72] rounded-t-[10px] text-[#fff] text-center font-bold">Montant</Text>
                                <TextInput
                                    className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                    placeholder="ex : 1200dh"
                                    multiline={true}

                                />
                            </StyledView>
                            <StyledView className="flex flex-col w-[300px] h-[80px]">
                                <Text className="flex w-[100px] h-[30px] bg-[#73af72] rounded-t-[10px] text-[#fff] text-center font-bold">Motif</Text>
                                <TextInput
                                    className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                    placeholder="ex : pour la liquidité"
                                    multiline={true}
                                />
                            </StyledView>
                            <StyledView className='flex flex-row w-full p-4 justify-between items-center'>
                                <DropDown data={caveaux} label='caveaux source' />
                                <DropDown data={caveaux} label='caveaux  destination' />
                            </StyledView>
                            <Pressable className='flex flex-row w-[200px] h-[50px] bg-[#73af72] items-center justify-center rounded-lg'>
                                <Text className="text-[#fff] font-bold text-lg ">Valider</Text>
                            </Pressable>
                        </StyledView>
                    </StyledView>
                </StyledView>
            }
            appendStyle={{ parent: { left: '35%', width: '30%' }, child: { borderTopColor: '#73af72' } }}
        />

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

