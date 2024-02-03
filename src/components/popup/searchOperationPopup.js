import React from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';

import { Ionicons } from '@expo/vector-icons';

import SearchInput from '../inputs/searchInput';

function SearchOperationPopu({ isModalVisible, setModalVisible }) {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })
    console.log(windowSize)

    return (
        <StyledView className={`${isModalVisible ? 'flex flex-col' : 'hidden'} item-center justify-center w-full h-full`}>
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">

                <OutsidePressHandler className={`flex flex-col w-[95%] ${styleSheet.popupContainerWidth} h-[80%] bg-[#fff] rounded-lg p-2`} onOutsidePress={() => {
                    console.log('Pressed outside the box!');
                    setModalVisible(false)
                }}>
                    <StyledView className='flex flex-col w-full space-y-[20px] justify-center items-center '>
                        <Pressable onPress={(event) => {
                            setModalVisible(false)
                        }}>
                            <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Services ET Aides Clients</Text>
                                <StyledView className='flex flex-row w-full items-center justify-center'>
                                    <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                </StyledView>
                            </StyledView>
                        </Pressable>
                        <SearchInput placeholder={"cherhcher une operation"} width={50} leftIconwidth={24} />

                    </StyledView>
                </OutsidePressHandler>
            </Modal>
        </StyledView>
    );
};


function styleGenerator({ windowHeight, windowWidth }) {
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


export default React.memo(SearchOperationPopu)