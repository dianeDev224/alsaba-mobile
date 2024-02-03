import React, { memo } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import OutsidePressHandler from 'react-native-outside-press';
import SelectDropdown from 'react-native-select-dropdown';

import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
    FavorisItems,
    UserFavorisItems,
} from '../../app.data';

export default function FavoriteMenuPopup({ isModalVisible, setModalVisible }) {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const StyledView = styled(View)
    const windowSize = useWindowDimensions();

    return (
        <StyledView className={`item-center justify-center w-full h-full ${isModalVisible ? 'flex flex-col' : 'hidden'}`}>
            <Modal isVisible={isModalVisible} className="flex items-center justify-center">
                <OutsidePressHandler
                    onOutsidePress={() => {
                        setModalVisible(false)
                    }}

                    className={`flex flex-col w-[95%] h-[50%] bg-[#fff] rounded-lg p-2`}
                >
                    <Pressable className={`flex flex-col justify-center h-[50px]`} onPress={toggleModal}>
                        <Text className="w-full text-center font-bold text-[#115DA9]">Personnalisation du favoris</Text>
                        <StyledView className="flex w-full items-center justify-center"><MaterialCommunityIcons name="chevron-double-down" size={24} color="#115DA9" /></StyledView>
                    </Pressable>
                    <StyledView className="flex flex-row justify-between my-2">
                        <Text className={`font-bold text-[#115DA9]`}>Favoris</Text>
                        <Text className={`font-bold text-[#115DA9]`}>Services Alsaba</Text>
                    </StyledView>
                    <StyledView className="flex flex-col w-full space-y-5">
                        {
                            UserFavorisItems.map((item) => {
                                return (
                                    <StyledView key={item.id} className="flex flex-row w-[80px]">
                                        <ServiceItem item={item} />
                                    </StyledView>
                                )
                            })
                        }
                    </StyledView>
                </OutsidePressHandler>
            </Modal>
        </StyledView>
    );
}

const FavroisItem = memo(function ({ item }) {
    const StyledView = styled(View)
    if (!item) {
        return (
            <></>
        )
    }
    return (
        <StyledView className={`flex flex-col justify-center items-center h-[70px] w-[80px] rounded-lg`} style={{ backgroundColor: item.ColorValue }}>
            <item.IconValue name={item.IconName} size={20} color={item.IconColor} />
            <Text className={`text-[#fff] font-bold text-[10px]`}>{item.Name}</Text>
        </StyledView>
    )
});


const ServiceItem = memo(function ServiceItem({ item }) {
    const StyledView = styled(View)

    return (
        <StyledView className={`flex flex-row w-[320px] items-center justify-end`}>
            <FavroisItem item={item} />
            <LinearGradient
                className={`flex flex-1 flex-row w-[100px] h-[50px] items-center`}
                colors={['#94FDBE', '#005505']}
            >
                <Text className={`flex text-center h-full w-full mt-[20px] font-semibold text-[#fff]`}>Remplacer Par</Text>
            </LinearGradient>
            <SelectDropdown
                defaultButtonText="selectionné un service"
                defaultValueByIndex={0}
                rowStyle={{
                    marginHorizontal: 10,
                    height: 100,

                }}
                buttonStyle={{
                    borderRadius: 10,
                    width: 100,
                    height: 70,
                    backgroundColor: "#88a6a1"
                }}
                renderCustomizedRowChild={(item, index) => {
                    return <FavroisItem item={item} />
                }}
                renderDropdownIcon={() => <Ionicons name="md-chevron-down-sharp" size={24} color="#32a852" />}
                renderSearchInputLeftIcon={() => <Ionicons name="md-search-outline" size={24} color="#32a852" />}
                renderCustomizedButtonChild={(item, index) => {
                    return <FavroisItem item={item} />
                }}
                search
                searchPlaceHolder="recherche"
                data={FavorisItems}

                onSelect={(selectedItem, index) => {
                    const result = UserFavorisItems.filter((currentItem) => currentItem.range != item.range)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

        </StyledView>
    )
});

