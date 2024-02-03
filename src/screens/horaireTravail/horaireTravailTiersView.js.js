import { useState } from 'react';

import { styled } from 'nativewind';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Cell,
    Table,
    TableWrapper,
} from 'react-native-table-component';

import {
    Ionicons,
    MaterialIcons,
} from '@expo/vector-icons';

import { ButtonActionTableau } from '../../components/common/tableauAlsaba';

const StyledView = styled(View)

export default function HoraireTravailTiers(props) {


    const tableHead = ['Date', 'Agence', 'status actuel', 'Action'];
    const tableData = [
        ['11:20 à 12:30', '2', '0', '4'],
        ['13:20 à 14:30', 'b', '1', 'd'],
        ['17:20 à 19:30', '2', '1', '456\n789'],
        ['19:50 à 23:30', 'b', '0', 'd'],
    ];

    const numberOfItem = 5;
    const numberOfPage = (parseInt(tableData.length / numberOfItem) + ((tableData.length % numberOfItem) == 0 ? 0 : 1))
    const pages = new Array(numberOfPage).fill(true).map((e, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [showDetails, setShowDetails] = useState(false)

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

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StyledView className="flex  flex-col item-center justify-center flex-1 p-2 space-y-7">
                <StyledView className='flex flex-row items-center justify-center'>
                    <Text className="font-bold text-[#6960b3]">
                        Horaire D'ouverture Des Agences
                    </Text>
                </StyledView>

                <Table style={{ ...styles.head, backgroundColor: "#6960b3" }} borderStyle={{ borderWidth: 3, borderColor: '#fff' }}>
                    <TableWrapper className="flex flex-row bg-[##6960b3] h-[40px] rounded-lg flex-1">
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
                                            return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, setShowDetails) : RadioButton({ cellData: cellData })} />
                                        })
                                    }
                                </TableWrapper>
                            }
                            return <TableWrapper className="flex-1" key={index} style={styles.row}>
                                {
                                    item.map((cellData, cellIndex) => {
                                        return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? ButtonActionTableau(cellData, index, setShowDetails) : RadioButton({ cellData: cellData })} />
                                    })
                                }
                            </TableWrapper>
                        })

                    }
                </Table>
                <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                    <MaterialIcons name="chevron-left" size={30} color="black" />
                    <Text className={`font-bold text-[20px] bg-[#6960b3] text-[#fff]`}>{currentPage}</Text>
                    <MaterialIcons name="chevron-right" size={30} color="black" />
                </StyledView>
            </StyledView>
        </ScrollView>
    )

}


function RadioButton({ cellData }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {(cellData == 1) && <Ionicons name="radio-button-on" size={24} color="#339c1d" />}
            {(cellData == 0) && <Ionicons name="radio-button-on" size={24} color="#9b2c18" />}
            {(cellData != 0 && cellData != 1) && <Text style={{ fontWeight: 'bold' }}>{cellData}</Text>}
        </View>
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