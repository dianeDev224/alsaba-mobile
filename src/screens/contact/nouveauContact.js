import { useState } from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as ImagePicker from 'expo-image-picker';
import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { Ionicons } from '@expo/vector-icons';

const StyledView = styled(View)


const caveaux = [
    { id: 1, name: "Banque" },
    { id: 2, name: "Caisse" },
    { id: 3, name: "Orange Money" }
]

export default function NouveauContact() {



    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isScannDataPopupVisible, setScannDataVisible] = useState(false);
    const [scannedDdata, setScannedData] = useState();




    const handleBarCodeScanned = ({ type, data }) => {
        setScannedData(JSON.parse(data[0].data))
        console.log("the data : ", data[0].data)
        setScannDataVisible(true)
        setScanned(true);
    };

    const readQrcodeFromImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            try {
                console.log("url : ", result.assets[0].uri)
                const scannedResults = await BarCodeScanner.scanFromURLAsync(
                    result.assets[0].uri
                );

                handleBarCodeScanned({ data: scannedResults })

            } catch (error) {
                alert("aucun qr code trouvé : ", error)
            }
        }
    };

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            className="flex  space-y-6">
            <Text className="flex w-full text-center font-bold text-lg text-[#626663]">Nouveau Contact</Text>
            <StyledView className="flex flex-col flex-1 items-center space-y-[50px]">
                <StyledView className="flex flex-col w-[300px] h-[100px]">
                    <Text className="flex w-[100px] h-[40px] bg-[#8ad389] rounded-t-[10px] text-[#fff] text-center font-bold">Nom & Prenom</Text>
                    <TextInput
                        className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                        placeholder="ex : Amdou camra"
                        multiline={true}

                    />
                </StyledView>
                <StyledView className="flex flex-col w-[300px] h-[80px]">
                    <Text className="flex w-[100px] h-[30px] bg-[#8ad389] rounded-t-[10px] text-[#fff] text-center font-bold">Tel</Text>
                    <TextInput
                        className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                        placeholder="ex : pour la liquidité"
                        multiline={true}
                    />
                </StyledView>
                <StyledView className='flex flex-col w-[300px] h-[100px] bg-[#8ad389] p-1 rounded-lg shadow-xl'>
                    <Text className="text-center w-full font-bold text-[#fff]">autres mouyen ?</Text>
                    <StyledView className="flex flex-row w-full space-x-2 items-center justify-center mt-2">
                        <Pressable className="flex flex-row w-[120px] h-[50px] bg-[#fff] items-center justify-center rounded-lg" onPress={() => readQrcodeFromImage()}>
                            <Text>importez un QrCode</Text>
                        </Pressable>
                        <Pressable className="flex flex-row w-[120px] h-[50px] bg-[#fff] items-center justify-center rounded-lg">
                            <Text>Scanner un QrCode</Text>
                        </Pressable>
                    </StyledView>

                </StyledView>
                <Pressable className='flex flex-row w-[200px] h-[50px] bg-[#8ad389] items-center justify-center rounded-lg'>
                    <Text className="text-[#fff] font-bold text-lg ">Valider</Text>
                </Pressable>
            </StyledView>
        </ScrollView>
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


