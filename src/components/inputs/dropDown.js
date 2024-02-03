import React, { useRef } from 'react';

import { styled } from 'nativewind';
import {
    useWindowDimensions,
    View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { Ionicons } from '@expo/vector-icons';

function Dropdown({ item, popupContainerWidth, color, value, setValue = () => null, className, defaultButtonText = "selectionner", width = 100, componentRef = useRef() }) {
    const StyledView = styled(View)
    const windowSize = useWindowDimensions();

    return (
        <StyledView className={`flex flex-row  items-center justify-center ${className}`}>
            <SelectDropdown
                ref={componentRef}
                defaultButtonText={defaultButtonText}
                buttonTextStyle={{
                    color: "#fff"
                }}
                rowTextStyle={{
                    color: color
                }}
                rowStyle={{
                    justifyContent: 'center',
                    // marginHorizontal: 10,
                    // height: 50,
                    width: '100%'
                }}
                buttonStyle={{
                    borderRadius: 10,
                    width: width,
                    height: (windowSize.width > 400 && windowSize.width < 500) ? 70 : 40,
                    backgroundColor: color
                }}

                renderDropdownIcon={() => <Ionicons name="md-chevron-down-sharp" size={30} color="#32a852" />}
                renderSearchInputLeftIcon={() => <Ionicons name="md-search-outline" size={24} color={color} />}
                search
                searchPlaceHolder="recherche"
                data={item}
                defaultValue={value}
                onSelect={(selectedItem, index) => {
                    componentRef.current.value = selectedItem
                    setValue(selectedItem)
                    console.log("selection : ", componentRef.current.value)
                    return componentRef.current.value
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
};

export default React.memo(Dropdown)