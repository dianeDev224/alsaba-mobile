import {
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    Modal,
    Pressable,
    Text,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';

import {
    Feather,
    Ionicons,
} from '@expo/vector-icons';

import SearchInput from '../../components/inputs/searchInput';

const StyledView = styled(View)

export default function ListeTache(props) {


    const [showConfirm, setShowConfirm] = useState(false);

    const prioriters = {
        URGENT: 1,
        PAS_URGENT: 2,
        ASSER_URGENT: 3,
    }

    const dummyData = [
        {
            id: 1,
            DateExecution: "12/11/2023 à 12:34:34",
            titre: "ma course de livraison",
            lieuExecution: "Temara",
            DateRappel: "30 min avant",
            priorité: 1
        },
        {
            id: 2,
            DateExecution: "12/11/2023 à 14:34:34",
            titre: "retrait Banque",
            lieuExecution: "Agdal",
            DateRappel: "30 min avant",
            priorité: 3
        }
    ]

    return (
        <StyledView className='flex flex-col flex-1'>
            <StyledView className="flex flex-row w-full h-[80px] items-center justify-center">
                <Text className="text-lg font-bold italic text-[#b5ae24]">Mes Tâches En Attentes</Text>
            </StyledView>
            <SearchInput placeholder={"chercher une tâche"} />
            <ScrollView contentContainerStyle={{ flex: 1 }} className="">
                <StyledView className='flex flex-col space-y-4 h-[80%]'>
                    {
                        dummyData.map((item) => {
                            return (

                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StyledView key={item.id} className="flex flex-row w-full bg-[#d1dbd9] space-y-3">
                                        <View className="items-center justify-center">
                                            <Feather name="square" size={40} color="#4a4e48" />
                                        </View>
                                        <View className="flex flex-col w-[64%] p-3 bg-[#d1dbd9] space-y-3">
                                            <StyledView className='flex flex-row space-x-4 items-center'>
                                                <Text className="text-lg font-bold">{item.titre}</Text>
                                            </StyledView>
                                            <StyledView className='flex flex-row space-x-2'>
                                                <Text>{item.DateExecution}</Text>
                                            </StyledView>
                                        </View>
                                        <View className="flex flex-col w-[85] items-center">
                                            <Ionicons name="md-location" size={30} color="#b0b316" />
                                            <View className="flex w-[81px] h-[40] border-[3px] rounded-3xl items-center border-[#b0b316] ">
                                                <Text className='font-bold'>{item.lieuExecution}</Text>
                                            </View>
                                            <View className="mt-2">
                                                <PrioriterTaches prioriter={item.priorité} />
                                            </View>
                                        </View>
                                    </StyledView>
                                </View>
                            )
                        })
                    }
                </StyledView>
            </ScrollView>
            {/* <ValidationPopup show={showConfirm} toggleShow={setShowConfirm} /> */}
        </StyledView>
    )

}

function PrioriterTaches({ prioriter }) {

    switch (prioriter) {
        case 1:
            console.log("priorité : ", prioriter)
            return <StyledView className="w-[80px] h-[30px] bg-[#c24d30] items-center justify-center rounded-md">
                <Text className="font-bold text-[#fff]">urgent</Text>
            </StyledView>
        case 2:
            return <StyledView className="w-[90px] h-[30px] bg-[#ce903f] items-center justify-center rounded-md">
                <Text className="font-bold text-[#fff]">asser urgent</Text>
            </StyledView>
        case 3:
            return <StyledView className="w-[90px] h-[30px] bg-[#2f9749] items-center justify-center rounded-md">
                <Text className="font-bold text-[#fff]">pas urgent</Text>
            </StyledView>
        default:
            return alert(`hello :${prioriter}`)
    }
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