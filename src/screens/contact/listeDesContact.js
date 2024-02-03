import {
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Modal } from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';

import { MaterialIcons } from '@expo/vector-icons';

const StyledView = styled(View)
const tableHead = ['Date', 'Montant', 'Motif', 'Action'];
const tableData = [
    ['1', '2', 'sortie', '4'],
    ['a', 'b', 'entré', 'd'],
    ['1', '2', 'sortie', '456\n789'],
    ['a', 'b', 'sortie', 'd'],
    ['a', 'b', 'sortie', 'd'],
];
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    head: {
        height: 100, backgroundColor: "#0fa340", textAlign: 'center', fontWeight: 'bold'
    },
    headText: {
        textAlign: 'center',
        color: "#fff",
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'center',
    },
    row: { flexDirection: 'row', backgroundColor: '#fff' },
});


export default function ListeContacts() {
    const numberOfItem = 5;
    const numberOfPage = (parseInt(tableData.length / numberOfItem) + ((tableData.length % numberOfItem) == 0 ? 0 : 1))
    const pages = new Array(numberOfPage).fill(true).map((e, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [showDetails, setShowDetails] = useState(false)

    const dummyData = [
        {
            id: 1,
            nom: "oumar",
            prenom: "diane",
            tel: "+212648529316"
        },
        {
            id: 2,
            nom: "amdou",
            prenom: "camara",
            tel: "+212648529316"
        },
        {
            id: 3,
            nom: "abdoul",
            prenom: "diallo",
            tel: "+212648529316"
        },
    ]

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StyledView className="flex  flex-col item-center justify-center flex-1 p-2 space-y-7">
                <StyledView className='flex flex-row items-center justify-center'>
                    <Text className="font-bold text-[#626663]">
                        Liste Des Contacts
                    </Text>
                </StyledView>

                <ScrollView contentContainerStyle={{ flex: 1 }} className="">
                    <StyledView className='flex flex-col space-y-4 h-[80%]'>
                        {
                            dummyData.map((item) => {
                                return (
                                    <StyledView key={item.id} className="flex flex-col w-full p-3 bg-[#d1dbd9] space-y-3">
                                        <StyledView className='flex flex-row space-x-4 items-center'>
                                            <Text className="text-xl font-bold">{item.nom}</Text>
                                            <Text className="text-xl font-bold">{item.prenom}</Text>
                                        </StyledView>
                                        <StyledView className='flex flex-row space-x-2'>
                                            <Text className="text-lg">{item.tel}</Text>
                                        </StyledView>
                                    </StyledView>
                                )
                            })
                        }
                    </StyledView>
                    <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                        <MaterialIcons name="chevron-left" size={30} color="black" />
                        <Text className={`font-bold text-[20px] bg-[#c07889] text-[#fff]`}>{currentPage}</Text>
                        <MaterialIcons name="chevron-right" size={30} color="black" />
                    </StyledView>
                </ScrollView>
            </StyledView>
        </ScrollView>
    )

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

