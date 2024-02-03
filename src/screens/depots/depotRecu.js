import React, { useState } from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import {
    Cell,
    Row,
    Table,
    TableWrapper,
} from 'react-native-table-component';

import { MaterialIcons } from '@expo/vector-icons';

import SearchInput from '../../components/inputs/searchInput';

export default function DepotRecus({ itemName = "Transfert Annulés" }) {

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })
    const tableHead = ['Date', 'Destinateur', 'Montant', 'Action'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
    ];

    let result;
    const numberOfItem = 5;
    const numberOfPage = (parseInt(tableData.length / numberOfItem) + ((tableData.length % numberOfItem) == 0 ? 0 : 1))
    const pages = new Array(numberOfPage).fill(true).map((e, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    //         < Text className = {`w-full font-bold text-[20px] italic text-[#5a2983] text-center my-2`
    // }> Nouveau Reçus</Text >

    return (
        <StyledView className='flex-1 bg-[#dfd5e7]'>
            <StyledView className="flex flex-col item-center justify-center w-full">
                <Text className={`w-full font-bold text-[15px] italic text-[#5a2983] text-center my-2`}>Depôts Reçus</Text>
                <SearchInput placeholder={"chercher un transfert"} width={"w-[60%]"} />
                <ScrollView>
                    <Table borderStyle={{ borderWidth: 3, borderColor: '#115DA9' }} style={styles.container}>
                        <Row data={tableHead} textStyle={styles.headText} style={styles.head} />
                        {
                            tableData.map((item, index) => {
                                return <TableWrapper key={index} style={styles.row}>
                                    {
                                        item.map((cellData, cellIndex) => {
                                            return <Cell key={cellIndex} textStyle={styles.text} data={cellIndex === 3 ? actionButton(cellData, index, setShowDetails) : cellData} />
                                        })
                                    }
                                </TableWrapper>
                            })

                        }
                    </Table>
                    <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                        <MaterialIcons name="chevron-left" size={30} color="black" />
                        <Text className={`font-bold text-[20px] bg-[#5a2983] text-[#fff]`}>{currentPage}</Text>
                        <MaterialIcons name="chevron-right" size={30} color="black" />
                    </StyledView>
                </ScrollView>
            </StyledView>
            <ValidationPopup show={showDetails} toggleShow={setShowDetails} />
        </StyledView>
    );
}

function actionButton(cellData, index, handleClick) {
    const StyledView = styled(View)
    return (

        <Pressable className="flex flex-row items-center justify-center" onPress={handleClick}>
            <StyledView className="flex w-2 h-2 bg-[#3cc94f] rounded-full"></StyledView>
            <StyledView className="flex w-2 h-2 bg-[#d43939] rounded-full"></StyledView>
            <StyledView className="flex w-2 h-2 bg-[#4b3cd4] rounded-full"></StyledView>
        </Pressable>
    )
}

function ValidationPopup({ show = true, toggleShow = () => { } }) {
    const StyledView = styled(View)
    return (
        <Modal isVisible={show} className={`flex flex-col b-[#ffa] self-center flex-1`}>
            <OutsidePressHandler className="bg-[#fff] flex flex-col basis-[250px] w-[300px] space-y-5 p-4" onOutsidePress={() => toggleShow(false)}>
                <StyledView className="flex flex-row items-center justify-center w-[200px] h-[40px] bg-[#5a2983] self-center">
                    <Text className="text-[#fff] font-bold">Details Du Depôt #ff4</Text>
                </StyledView>
                <StyledView className="flex flex-col flex-1 space-y-2">
                    <Text className="font-semibold">Montant: 200DH</Text>
                    <Text className="font-semibold">Destinateur : </Text>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    head: {
        height: 40, backgroundColor: "#5a2983", textAlign: 'center', fontWeight: 'bold'
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



function styleGenerator({ windowHeight, windowWidth }) {
    console.log("la data : ", windowWidth)
    if (windowWidth > 320 && windowWidth < 400) {
        return {
            popupContainerWidth: "w-[320px]"
        }
    } else {
        return {
            popupContainerWidth: "w-[350px]"
        }
    }
}




