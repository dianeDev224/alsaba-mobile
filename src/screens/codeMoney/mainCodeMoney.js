import {
    useEffect,
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import { CodeMoneyItems } from '../../../app.data';
import AppBar from '../../components/common/drawerTopBar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import CodeMoneyAnnulers from './codeMoneyAnnulers';
import CodeMoneyEmis from './codeMoneyEmis';
import EncaisserCodeMoney from './encaisserCodeMoney';
import NouveauCodeMoney from './nouveauCodeMoney';

const StyledView = styled(View)

export default function MainCodeMoney(props) {

    const scrollViewRef = useRef();
    const windowSize = useWindowDimensions();

    const [currentItem, setCurrentItem] = useState({
        id: 1,
        Name: "Nouveau CodeMoney",
        color: "bg-[#2358ad]",
        scrollPosition: 0
    })
    let scrollPosition = 0;
    function handleScroll(event) {
        scrollPosition = event.nativeEvent.contentOffset.x;
    }

    useEffect(() => {
        scrollViewRef.current.scrollTo({ x: currentItem.scrollPosition, animated: false });
    }, [currentItem]);

    return (
        <ComponentSafeArea>
            <StyledView className="w-full h-full">
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView className="flex flex-row w-full  h-[100px] items-center justify-center">
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
                            {CodeMoneyItems.map((item) => {
                                return (
                                    <Pressable key={item.id} className="flex flex-row  w-[220px]  justify-center items-center"
                                        onPress={() => {
                                            setCurrentItem({
                                                id: item.id,
                                                Name: item.Name,
                                                color: item.ColorClass,
                                                scrollPosition: scrollPosition
                                            })

                                        }}

                                    >
                                        <StyledView className={`flex flex-row  ${item.ColorClass}
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
                                            <StyledView className={`absolute flex flex-row w-[30px] h-[30px] ${item.ColorClass} rotate-45 -right-[15px] z-50`}>

                                            </StyledView>
                                            <Text
                                                className={`text-[10px] font-bold  text-[#fff] w-[100px] text-center ${styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width }).fontSize}`}
                                            >
                                                {item.Name}
                                            </Text>
                                            <StyledView className={`absolute  ${(currentItem.Name === item.Name && currentItem.id === item.id) ? 'flex flex-row' : 'hidden'} w-[23px] h-[23px] ${item.ColorClass} rotate-45 -bottom-[11px] -z-[1000]`}>

                                            </StyledView>
                                            <StyledView className={` flex absolute w-[20px] h-[20px] -bottom-[40px] rotate-45 ${item.ColorClass} -z-[10000] ${(currentItem.Name === item.Name && currentItem.id === item.id) ? 'flex flex-row' : 'hidden'}`}></StyledView>
                                        </StyledView>
                                        <MaterialIcons name="double-arrow" size={65} color={item.ColorValue} />
                                    </Pressable>
                                )
                            })}
                        </StyledView>
                    </ScrollView>
                </StyledView>
                <StyledView className={`flex flex-row h-[5px] ${currentItem.color}  w-full`}>
                </StyledView>
                {(currentItem.id === 1 && currentItem.Name === "Nouveau CodeMoney") && <NouveauCodeMoney />}
                {(currentItem.id === 2 && currentItem.Name === "CodeMoeny Emis") && <CodeMoneyEmis />}
                {(currentItem.id === 3 && currentItem.Name === "Encaisser un CodeMoney") && <EncaisserCodeMoney />}
                {(currentItem.id === 4 && currentItem.Name === "CodeMoney Annulés") && <CodeMoneyAnnulers />}
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