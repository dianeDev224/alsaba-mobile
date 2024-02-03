import React, { useContext } from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import {
    FlatList,
    ScrollView,
} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';

import { QRcodeContext } from '../../hooks/qrcodeContext';

const StyledView = styled(View);
export default function QrcodeValider() {

    const { qrcodeData, addNewQrcodeData } = useContext(QRcodeContext)

    return (
        <ScrollView>
            <StyledView className='flex flex-col w-full justify-center items-start h-[100px] bg-[#2a2dbf]'>
                <FlatList
                    data={qrcodeData}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </StyledView>
        </ScrollView>
    );
}

function Item({ item }) {
    return (
        <StyledView className='flex flex-row w-full items-center'>
            <StyledView className='flex flex-col justify-between  border-r-[2px] h-[100px] border-r-[#fff] pl-1 pr-5'>
                <Text className="text-[#fff] text-start">Nom Expedietur : {item.nomDestinateur}</Text>
                <Text className="text-[#fff] text-start">Tel Expedietur : {item.telDestinateur}</Text>
                <Text className="text-[#fff] text-start">Montant : {item.montant}</Text>
                <Text className="text-[#fff]">Date : {new Date(Date.now()).toUTCString()}</Text>
            </StyledView>
            <StyledView className='flex flex-col h-[100px] ml-[30px] items-center justify-center relative'>
                <Pressable className="w-[40px] h-[20px]  bg-[#c54034] absolute top-[40px] bottom-[40px] z-50 rounded-full">
                    <Text className="text-[#fff] text-center font-bold">Voir</Text>
                </Pressable>
                <QRCode
                    value={JSON.stringify(item)}
                    size={50}
                />
            </StyledView>
        </StyledView>

    );
}

