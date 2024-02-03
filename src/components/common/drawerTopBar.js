import React from 'react';

import { styled } from 'nativewind';
import {
    Image,
    Pressable,
    View,
} from 'react-native';

import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function AppBar({ handleDrawerOpen }) {
    const StyledView = styled(View)
    return (
        <StyledView className='flex flex-row w-full mt-[10px] justify-between items-center'>
            <Pressable onPress={() => handleDrawerOpen()}>
                <MaterialCommunityIcons name="view-dashboard-outline" size={35} color="#0e964d" />
            </Pressable>
            <StyledView className='flex flex-row w-[30px] h-[30px]'>
                <Image
                    src={'https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg'}
                    alt='logo-alsaba'
                    className="w-full h-full rounded-full"
                />
            </StyledView>
            <StyledView className="flex flex-row  w-[70px] h-[30px] mr-[5px] space-x-1">
                <Ionicons name="ios-notifications-circle" size={30} color="#0e964d" />
                <MaterialCommunityIcons name="power-standby" size={30} color="#0e964d" />
            </StyledView>
        </StyledView>
    )
}


