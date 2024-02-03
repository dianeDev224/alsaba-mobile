import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { styled } from 'nativewind';
import {
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  AntDesign,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

import { TransfertItem } from '../../../app.data';
import AppBar from '../../components/common/drawerTopBar';
import ComponentSafeArea
  from '../../components/common/wrappers/componenteSafeArea';
import NouveauTransfert from './nouveauTransfert';
import TransfertEmis from './transfertEmis';
import TransfertEnAttente from './transfertEnAttente';
import TransfertSupprimer from './transfertSupprimer';
import TransfertValider from './transfertValider';

export default function MainTransfert(props) {


    const [showSearchCard, setShowSearchCard] = useState(true)
    const [digitNumber, setDigitNumber] = useState(6)
    const windowSize = useWindowDimensions();
    let scrollPosition = 0;
    const scrollViewRef = useRef();
    const [solde, setSolde] = useState({
        digiNumber: 9,
        value: ["123", "123", "123"],
        rest: ",23"
    })

    const [currentItem, setCurrentItem] = useState({
        id: 1,
        Name: "Transferts En Attentes",
        color: "bg-[#706f1e]",
        colorValue: "#706f1e",
        scrollPosition: 0
    })

    function handleScroll(event) {
        scrollPosition = event.nativeEvent.contentOffset.x;
    }

    useEffect(() => {
        scrollViewRef.current.scrollTo({ x: currentItem.scrollPosition, animated: true });
    }, [currentItem]);

    const StyledView = styled(View)
    return (
        <ComponentSafeArea styleColor={'light'} backgroundColor={'#0e964d'}>
            <StyledView className="flex w-full h-full flex-col space-y-3">
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView className="flex flex-col w-full h-[40px] px-4">
                    <StyledView className="flex flex-row w-full">
                        <Text className="font-bold text-[#115DA9] text-2xl">Tansfert </Text>
                        <StyledView className="flex justify-center items-center  rounded-fullS -rotate-45"><Ionicons name="ios-arrow-forward-circle-outline" size={30} color="#115DA9" /></StyledView>
                    </StyledView>
                    <StyledView className="flex flex-row w-full justify-center items-center">
                        <StyledView className="mr-1" ><AntDesign name="arrowleft" size={22} color="#115DA9" /></StyledView>
                        <StyledView className="ml-1" ><AntDesign name="arrowright" size={22} color="#115DA9" /></StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className="flex flex-col w-full  h-[100px] items-center justify-center">
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}

                    >
                        <StyledView className={`flex flex-row w-full
                             ${styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width }).navBarContainerHeight}
                             items-center justify-center
                             space-x-[8px]
                             h-[100px]
                            `
                        }
                        >
                            {TransfertItem.map((item) => {
                                return (
                                    <Pressable key={item.id} className="flex flex-row  w-[220px]  justify-center items-center"
                                        onPress={() => {
                                            setCurrentItem({
                                                id: item.id,
                                                Name: item.Name,
                                                color: item.ColorClass,
                                                colorValue: item.ColorValue,
                                                scrollPosition: scrollPosition
                                            })

                                        }}
                                    >
                                        <StyledView

                                            style={{ backgroundColor: item.ColorValue }}
                                            key={item.id + "djsdkjsdj"} className={`flex flex-row  
                                                        ${item.ColorClass}
                                                        ${styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width }).navBarItemWidth}
                                                        ${styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width }).navBarItemHeight}
                                                        items-center
                                                        justify-center
                                                        relative
                                                        h-[40px]
                                                        `
                                            }
                                        >
                                            <StyledView className="absolute flex flex-row w-[30px] h-[30px] bg-[#fffefe] rotate-45 -left-[15px] z-50">

                                            </StyledView>
                                            <StyledView
                                                style={{ backgroundColor: item.ColorValue }}
                                                className={`absolute flex flex-row w-[30px] h-[30px] ${item.ColorClass} rotate-45 -right-[15px] z-50`} />

                                            <Text
                                                className={`text-[10px] font-bold  text-[#fff] w-[100px] text-center ${styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width }).fontSize}`}
                                            >
                                                {item.Name}
                                            </Text>
                                            <StyledView
                                                style={{ backgroundColor: item.ColorValue }}
                                                className={`absolute  ${(currentItem.Name === item.Name && currentItem.id === item.id) ? 'flex flex-row' : 'hidden'} w-[23px] h-[23px] ${item.ColorClass} rotate-45 -bottom-[11px] -z-[1000]`} />
                                            <StyledView
                                                style={{ backgroundColor: item.ColorValue }}
                                                className={` flex absolute w-[20px] h-[20px] -bottom-[40px] rotate-45 -z-[10000] ${(currentItem.Name === item.Name && currentItem.id === item.id) ? 'flex flex-row' : 'hidden'}`} />

                                        </StyledView>
                                        <MaterialIcons name="double-arrow" size={65} color={item.ColorValue} />
                                    </Pressable>
                                )
                            })}
                        </StyledView>
                    </ScrollView>
                    <StyledView
                        style={{ backgroundColor: currentItem.colorValue }}
                        className={`flex flex-row h-[5px] ${currentItem.color}  w-full`}>
                    </StyledView>
                </StyledView>
                {(currentItem.id === 1 && currentItem.Name === "Transferts En Attentes") &&

                    <TransfertEnAttente />

                }
                {(currentItem.id === 2 && currentItem.Name === "Nouveau Transfert") &&

                    <NouveauTransfert />


                }
                {(currentItem.id === 3 && currentItem.Name === "Transferts Emis") &&

                    <TransfertEmis />


                }
                {(currentItem.id === 4 && currentItem.Name === "Transferts Validés") &&

                    <TransfertValider />

                }
                {(currentItem.id === 5 && currentItem.Name === "Transferts Annulés") &&

                    <TransfertSupprimer />
                }
            </StyledView>
        </ComponentSafeArea>
    )
}

function styleGeneretor({ windowHeigth, windowWidth }) {

    if (windowHeigth > 700 && windowHeigth < 850) {
        return {
            fontSize: "text-[15px]",
            navBarContainerHeight: "h-[50px]",
            navBarItemWidth: "w-[150px]",
            navBarItemHeight: "h-[30px]"
        }
    } else {
        return {
            fontSize: "text-[13px]",
            navBarContainerHeight: "h-[50px]",
            navBarItemWidth: "w-[150px]",
            navBarItemHeight: "h-[30px]",

        }

    }
}

