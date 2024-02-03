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

export default function RemboursementEmprunt() {

    const { width: SCREEN_WIDTH } = useWindowDimensions()

    return (
        <WithNavbarSwippe
            ScreenSwippe={

                <StyledView
                    style={{ width: SCREEN_WIDTH, backgroundColor: "#a5c7a4" }}
                    className="flex flex-col space-y-6 mt-5">

                    <Text className="flex w-full text-center font-bold text-lg text-[#626663]">Remboursement D'Emprûnt</Text>
                    <StyledView className="flex flex-col items-center space-y-[50px]">
                        <StyledView className="flex flex-col w-[300px] h-[80px]">
                            <Text className="flex w-[100px] h-[30px] bg-[#399137] rounded-t-[10px] text-[#fff] text-center font-bold">Montant</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : 1200dh"
                                multiline={true}

                            />
                        </StyledView>
                        <StyledView className="flex flex-col w-[300px] h-[80px]">
                            <Text className="flex w-[100px] h-[30px] bg-[#399137] rounded-t-[10px] text-[#fff] text-center font-bold">Motif</Text>
                            <TextInput
                                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                                placeholder="ex : pour la liquidité"
                                multiline={true}
                            />
                        </StyledView>
                        <DropDown data={caveaux} label='caveaux source' />
                        <Pressable className='flex flex-row w-[200px] h-[50px] bg-[#399137] items-center justify-center rounded-lg'>
                            <Text className="text-[#fff] font-bold text-lg ">Valider</Text>
                        </Pressable>
                    </StyledView>
                </StyledView>
            }

            appendStyle={{ parent: { left: '35%', width: '30%' }, child: { borderTopColor: '#399137' } }}


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


