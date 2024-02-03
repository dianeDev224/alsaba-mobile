import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import {
    Cell,
    Table,
    TableWrapper,
} from 'react-native-table-component';

import {
    AntDesign,
    Entypo,
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';

import {
    FavorisItems,
    UserFavorisItems,
} from '../../../app.data';
import AppBar from '../../components/common/drawerTopBar';
import { ButtonActionTableau } from '../../components/common/tableauAlsaba';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import FavoriteMenuPopup from '../../components/favoriteMenuPopup';
import MoreDetailsDerniereOperations
    from '../../components/popup/moreDetailsDerniereOperation';
import SearchOperationPopup from '../../components/popup/searchOperationPopup';

const StyledView = styled(View)

export default function HomeScreen(props) {


    const [showSearchCard, setShowSearchCard] = useState(false)
    const [showFavorisPopup, setShowFavorisPopup] = useState(false)
    const [digitNumber, setDigitNumber] = useState(6)
    const windowSize = useWindowDimensions();
    const [solde, setSolde] = useState({
        digiNumber: 9,
        value: ["123", "123", "123"],
        rest: ",23"
    })

    return (
        <ComponentSafeArea>
            <StyledView className="flex flex-col flex-1 ">
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView className="flex flex-row justify-center items-center w-full h-[160px] mt-7">
                    <LinearGradient
                        className='flex flex-row  w-[92%] h-full rounded-3xl '
                        colors={['#94FDBE', '#0d7030', '#6cb87a']}
                    >
                        <StyledView className={`flex flex-col items-center w-full h-full space-y-[10px] `}>
                            <Text className="text-[#305070] font-bold text-4xl text-center mt-[15px] uppercase">Solde</Text>
                            <StyledView className="flex flex-row items-center w-full justify-center">
                                <Text className={`flex flex-1 flex-row text-[#fff] font-bold   text-center ${getTextStyle(solde.digiNumber)}`}>{solde.value.join(" ").concat(solde.rest)} FGN</Text>
                                <Entypo name="eye" size={30} color="#e0b422" className="bg-[#115DA9]" />
                            </StyledView>
                        </StyledView>
                    </LinearGradient>
                </StyledView>
                <ConsutlerRecement />
                <Favoris showSearchCard={showSearchCard} setShowSearchCard={setShowSearchCard} showFavorisPopup={showFavorisPopup} setShowFavorisPopup={setShowFavorisPopup} />
                <SearchOperationPopup isModalVisible={showSearchCard} setModalVisible={setShowSearchCard} />
                <FavoriteMenuPopup isModalVisible={showFavorisPopup} setModalVisible={setShowFavorisPopup} />
            </StyledView>
        </ComponentSafeArea >
    )
}

function ConsutlerRecement() {
    return (
        <StyledView className="h-[120px] mt-7">
            <StyledView className="flex flex-row w-full  h-[30px] justify-center items-center">
                <StyledView className="mr-1" ><AntDesign name="arrowleft" size={22} color="#115DA9" /></StyledView>
                <Text className="text-[#115DA9] font-bold text-lg">Consultés Frequemment</Text>
                <StyledView className="ml-1" ><AntDesign name="arrowright" size={22} color="#115DA9" /></StyledView>
            </StyledView>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flex: 1, paddingHorizontal: 4, paddingVertical: 2 }}
                className={`flex  w-full`}
            >
                <StyledView className={`flex flex-row w-full items-center space-x-3`} >
                    {
                        FavorisItems.map((item) => {
                            return (
                                <StyledView key={item.id} className={`flex flex-col justify-center items-center w-[80px] h-full rounded-lg`} style={{ backgroundColor: item.ColorValue }}>
                                    <item.IconValue name={item.IconName} size={30} color={item.IconColor} />
                                    <Text className={` text-[#fff] font-bold`}>{item.Name}</Text>
                                </StyledView>
                            )

                        })
                    }
                </StyledView>
            </ScrollView>
        </StyledView>
    )
}



function Favoris({ showSearchCard, setShowSearchCard, showFavorisPopup, setShowFavorisPopup }) {

    return (
        <Pressable className={`flex-1 flex flex-row  justify-center items-center space-x-2 mt-7 p-3`}>
            <StyledView className="flex flex-col w-[80%] h-full ">
                <StyledView className="flex flex-row items-center justify-center w-full h-[40px]">
                    <Text className="text-[#115DA9] text-lg font-bold">Les Dernière Operations</Text>
                    <Pressable delayHoverIn={10} delayHoverOut={10} className="ml-2"><Feather name="search" size={24} color="#115DA9" onPress={() => setShowSearchCard(true)} /></Pressable>
                </StyledView>
                <DerniereOperation />
            </StyledView>
            <StyledView style="flex flex-col bg-[#abc] h-full w-[20%] relative ">
                <StyledView className={`flex flex-col justify-center items-center  w-full rounded-lg`}>
                    <Text className={`text-[#115DA9] text-lg font-bold`}>Favoris</Text>
                </StyledView>
                <StyledView className={`flex flex-col w-[100%] h-[92%]   items-center justify-around relative border-[3px] rounded-md border-[#3fa83f]`} >
                    <StyledView className={`flex flex-col items-center justify-evenly w-full rounded-lg space-y-2 px-1 `}>
                        {
                            UserFavorisItems.map((item) => {
                                return (
                                    <StyledView key={item.id} className={`flex flex-col justify-center items-center  w-[60px] h-[60px] rounded-lg ${item.ColorClass}`} style={{ backgroundColor: item.ColorValue }}>
                                        <item.IconValue name={item.IconName} size={24} color={item.IconColor} />
                                        <Text className={` text-[#fff] font-bold text-[10px]`}>{item.Name}</Text>
                                    </StyledView>
                                )
                            })
                        }
                        <Pressable onPress={() => setShowFavorisPopup(true)} className=" flex w-[50px] h-[50px] bg-[#7a1f5f] items-center justify-center "><MaterialCommunityIcons name="plus-thick" size={25} color="#fff" /></Pressable >
                    </StyledView>
                </StyledView>
            </StyledView>

        </Pressable >
    )
}



function DerniereOperation() {
    const tableHead = ['Date', 'Type', 'Montant', 'Action'];
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

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1
        },
        head: {
            height: 100, backgroundColor: "#c2d861", textAlign: 'center', fontWeight: 'bold'
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
            <StyledView className="flex  flex-col item-center justify-center  flex-1">
                <Table style={styles.head} borderStyle={{ borderWidth: 3, borderColor: '#fff' }}>
                    <TableWrapper className="flex flex-row bg-[#5aa0ba] h-[40px] rounded-lg flex-1">
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
                    <Text className={`font-bold text-[20px] bg-[#706f1e] text-[#fff]`}>{currentPage}</Text>
                    <MaterialIcons name="chevron-right" size={30} color="black" />
                </StyledView>
            </StyledView>
            <MoreDetailsDerniereOperations isModalVisible={showDetails} setModalVisible={setShowDetails} />
        </ScrollView>
    );
}




function getTextStyle(length) {
    console.log("lentg : ", length)
    switch (length) {
        case 3: {
            return "text-5xl";
        }
        case 6: {
            return "text-4xl";
        }
        case 9: {
            return "text-3xl";
        }
        case 12: {
            return "text-2xl";
        }
        case 15: {
            return "text-xl";
        }
        default: {
            return "text-lg";
        }
    }
}
