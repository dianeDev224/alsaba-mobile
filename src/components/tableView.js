import React, { useState } from 'react';

import { styled } from 'nativewind';
import {
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import {
    Row,
    Rows,
    Table,
} from 'react-native-table-component';

import { MaterialIcons } from '@expo/vector-icons';

export default function TableView({ itemsColorClass, itemColorValue }) {

    const StyledView = styled(View)

    const windowSize = useWindowDimensions();

    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
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

    console.log("number of page : ", pages)
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff'
        },
        head: {
            height: 40, backgroundColor: itemColorValue, textAlign: 'center', fontWeight: 'bold'
        },
        headText: {
            textAlign: 'center',
            color: "#fff",
            fontWeight: 'bold'
        },
        text: {
            textAlign: 'center',
        }
    });

    console.log("color : ", itemsColorClass)


    return (
        <StyledView>
            <Table borderStyle={{ borderWidth: 3, borderColor: '#115DA9' }} style={styles.container}>
                <Row data={tableHead} textStyle={styles.headText} style={styles.head} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
            <StyledView className='flex flex-row w-full justify-center items-center h-[40px]'>
                <MaterialIcons name="chevron-left" size={30} color="black" />
                <Text className={`font-bold text-[20px] ${itemsColorClass}  text-[#fff]`}>{currentPage}</Text>
                <MaterialIcons name="chevron-right" size={30} color="black" />
            </StyledView>
        </StyledView>
    )
}

