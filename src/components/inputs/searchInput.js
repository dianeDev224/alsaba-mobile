import React from 'react';

import { styled } from 'nativewind';
import {
    useWindowDimensions,
    View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

export default function SearchInput({ placeholder, width, leftIconwidth = 24, className = "self-end" }) {

    const StyledView = styled(View)

    const windowSize = useWindowDimensions();
    return (
        <StyledView className={`flex flex-row ${width}  border-[3px] border-[#115DA9] rounded-xl my-4 items-center justify-center ${className}`}>
            <Feather name="search" size={leftIconwidth} color="#115DA9" className="mr-2 bg-[#115DA9]" />
            <TextInput
                className="  w-[90%]  h-[40px] p-1"
                placeholder={`${placeholder}`}
                editable
            // multiline
            // numberOfLines={4}
            // maxLength={40}
            // onChangeText={text => onChangeText(text)}
            // value={value}
            // style={{ padding: 10 }}
            // textContentType='newPassword'
            />
        </StyledView>
    )
}
