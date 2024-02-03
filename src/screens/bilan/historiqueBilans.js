import {
    useRef,
    useState,
    useTransition,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import {
    Cell,
    Table,
    TableWrapper,
} from 'react-native-table-component';

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonActionTableau } from '../../components/common/tableauAlsaba';
import SearchInput from '../../components/inputs/searchInput';

const StyledView = styled(View)

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

export default function HistoriqueBilan() {

    const tableHead = ['Date', 'reference', 'Solde', 'Action'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
    ];
    const numberOfItem = 5;
    const numberOfPage = (parseInt(tableData.length / numberOfItem) + ((tableData.length % numberOfItem) == 0 ? 0 : 1))
    const pages = new Array(numberOfPage).fill(true).map((e, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    const [isPending, startTransition] = useTransition();
    // const [showConfirm, setShowConfirm] = useState(false);

    function handleClick() {
        startTransition(() => {
            setShowDetails(true)
        })
    }




    return (
        <StyledView className="flex flex-1">
            <SearchInput placeholder={"chercher un bilan"} />
            <Table style={styles.head} borderStyle={{ borderWidth: 3, borderColor: '#fff' }}>
                <TableWrapper className="flex flex-row bg-[#b5ae24] h-[40px] rounded-lg flex-1">
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
                                backgroundColor: '#cccaa0'
                            }}>
                                {
                                    item.map((cellData, cellIndex) => {
                                        return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, handleClick) : cellData} />
                                    })
                                }
                            </TableWrapper>
                        }
                        return <TableWrapper className="flex-1" key={index} style={styles.row}>
                            {
                                item.map((cellData, cellIndex) => {
                                    return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, handleClick) : cellData} />
                                })
                            }
                        </TableWrapper>
                    })

                }
            </Table>
            <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                <MaterialIcons name="chevron-left" size={30} color="black" />
                <Text className={`font-bold text-[20px] bg-[#752f3f] text-[#fff]`}>{currentPage}</Text>
                <MaterialIcons name="chevron-right" size={30} color="black" />
            </StyledView>
            <ValidationPopup show={showDetails} toggleShow={setShowDetails} />
        </StyledView>
    )
}

function ValidationPopup({ show = false, toggleShow = () => { }, ref = useRef() }) {
    const StyledView = styled(View)
    return (
        <Modal isVisible={show} ref={ref} className={`flex flex-col b-[#ffa] self-center flex-1`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[550px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[200px] h-[40px] bg-[#2358ad] self-center">
                    <Text className="text-[#fff] font-bold">Détails Du Bilan</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    {/* <Text>vous êtes d'accord de la creation de la Tâche suivante </Text> */}
                    <Text>Reference :  </Text>
                    <Text>Date : </Text>
                    <Text>Benefices: </Text>
                    <Text>Charge Fictives : </Text>
                    <Text>Charge Réelles : </Text>
                    <Text>Dettes : </Text>
                    <Text>Disponibilités : </Text>
                    <Text>Entrés : </Text>
                    <Text>Sorties : </Text>
                    <Text>Epargnes : </Text>
                    <Text>Initiales : </Text>
                    <Text>Injections : </Text>
                    <Text>Prêts : </Text>
                    <Text>Soldes : </Text>
                </StyledView>
                <StyledView className="flex flex-row justify-around">
                    <Pressable className="bg-[#b63232] w-[100px] h-[30px] items-center justify-center" onPress={() => toggleShow(false)}>
                        <Text className="text-[#fff] font-bold">Retour</Text>
                    </Pressable>

                </StyledView>
            </OutsidePressHandler>
        </Modal>
    )
}


