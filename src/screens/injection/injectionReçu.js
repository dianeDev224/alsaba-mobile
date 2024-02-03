import {
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { Modal } from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import {
    Cell,
    Table,
    TableWrapper,
} from 'react-native-table-component';

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonActionTableau } from '../../components/common/tableauAlsaba';
import WithNavbarSwippe from '../../components/highOrder/withNavbarSwippe';

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
    row: { flexDirection: 'row', backgroundColor: '#fff', height: 45 },
});


export default function InjectionReçu({ navigateTo }) {


    const numberOfItem = 5;
    const numberOfPage = (parseInt(tableData.length / numberOfItem) + ((tableData.length % numberOfItem) == 0 ? 0 : 1))
    const pages = new Array(numberOfPage).fill(true).map((e, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    const { width: SCREEN_WIDTH } = useWindowDimensions()

    return (

        <WithNavbarSwippe
            ScreenSwippe={
                <StyledView style={{ width: SCREEN_WIDTH, backgroundColor: "#cef1cd" }} className="flex mt-5">
                    <StyledView className="flex  flex-col item-center justify-center h-[100%] p-2 space-y-7">
                        <StyledView className='flex flex-row items-center justify-center'>
                            <Text className="font-bold text-[#626663]">
                                Injections Réçues
                            </Text>
                        </StyledView>

                        <ScrollView>
                            <Table style={styles.head} borderStyle={{ borderWidth: 3, borderColor: '#fff' }}>
                                <TableWrapper className="flex flex-row bg-[#5daa5c] h-[40px] rounded-lg flex-1">
                                    {
                                        tableHead.map((cellData, cellIndex) => {
                                            return <Cell key={cellIndex} textStyle={{
                                                textAlign: 'center',
                                                color: '#fff',
                                                fontWeight: "bold",
                                                fontSize: 15
                                            }} data={cellData} />
                                        })
                                    }
                                </TableWrapper>
                            </Table>

                            <Table style={styles.container} borderStyle={{ borderWidth: 3, borderColor: '#fff' }}>
                                {
                                    tableData.map((item, index) => {
                                        if (index % 2) {
                                            return <TableWrapper className="flex-1" key={index} style={{
                                                flexDirection: 'row',
                                                backgroundColor: '#cccaa0',
                                                height: 45
                                            }}>
                                                {
                                                    item.map((cellData, cellIndex) => {
                                                        return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, setShowDetails) : cellData} />
                                                    })
                                                }
                                            </TableWrapper>
                                        }
                                        return <TableWrapper className="flex-1" key={index} style={styles.row}>
                                            {
                                                item.map((cellData, cellIndex) => {
                                                    return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, setShowDetails) : cellData} />
                                                })
                                            }
                                        </TableWrapper>
                                    })

                                }
                            </Table>
                            <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                                <MaterialIcons name="chevron-left" size={30} color="black" />
                                <Text className={`font-bold text-[20px] bg-[#5daa5c] text-[#fff]`}>{currentPage}</Text>
                                <MaterialIcons name="chevron-right" size={30} color="black" />
                            </StyledView>
                        </ScrollView>
                    </StyledView>
                </StyledView>
            }
            appendStyle={{ parent: { left: '20%', width: '20 %' }, child: { borderTopColor: '#5daa5c' } }}
        />
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

