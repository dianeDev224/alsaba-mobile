import React, { useState } from 'react';

import { styled } from 'nativewind';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Cell,
  Row,
  Table,
  TableWrapper,
} from 'react-native-table-component';

import { MaterialIcons } from '@expo/vector-icons';

import SearchInput from '../../components/inputs/searchInput';
import MoreDetailsTransfertValider
  from '../../components/popup/transfertConofirmation/moreDetailsTransfertValider';

export default function TransfertValider({ itemName = "Transfert Valider" }) {

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })
    const tableHead = ['Date', 'Code', 'Type', 'Action'];
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
    const { width: SCREEN_WIDTH } = useWindowDimensions()

    return (
        <StyledView style={{ width: SCREEN_WIDTH, backgroundColor: "#d8e7e2", flex: 1 }}>
            <StyledView className="flex flex-col item-center justify-center w-full">
                <Text className={`w-full font-bold text-[15px] italic text-[#298361] text-center my-2`}>{itemName}</Text>
                <SearchInput placeholder={"chercher un transfert"} width={"w-[60%]"} />
                <StyledView>
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
                        <Text className={`font-bold text-[20px] bg-[#298361] text-[#fff]`}>{currentPage}</Text>
                        <MaterialIcons name="chevron-right" size={30} color="black" />
                    </StyledView>
                </StyledView>
            </StyledView>
            <MoreDetailsTransfertValider isModalVisible={showDetails} setModalVisible={setShowDetails} />
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    head: {
        height: 40, backgroundColor: "#298361", textAlign: 'center', fontWeight: 'bold'
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

