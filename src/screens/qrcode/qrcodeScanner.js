import React, {
    useContext,
    useRef,
    useState,
} from 'react';

import * as Sharing from 'expo-sharing';
import { styled } from 'nativewind';
import {
    Modal,
    Pressable,
    Text,
    View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from 'react-native-view-shot';

import {
    FontAwesome,
    Ionicons,
} from '@expo/vector-icons';

import { QRcodeContext } from '../../hooks/qrcodeContext';

const StyledView = styled(View);
export default function QrcodeScanner() {

    const { qrcodeData, addNewQrcodeData } = useContext(QRcodeContext)

    return (
        <StyledView className='flex flex-col w-full justify-center items-start h-[100px] bg-[#706f1e]'>
            <FlatList
                data={qrcodeData}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </StyledView>
    );
}

function Item({ item }) {

    const [isModalVisible, setModalVisible] = useState(false)

    return (
        <>
            <StyledView className='flex flex-row w-full justify-around items-center h-[100px] relative'>
                <StyledView className='flex flex-col justify-center items-center p-4 border-r-[3px] border-r-[#fff] '>
                    <Text className="text-[#fff] text-start">Nom Destinateur : {item.nomDestinateur}</Text>
                    <Text className="text-[#fff] text-start">Tel Destinateur : {item.telDestinateur}</Text>
                    <Text className="text-[#fff] text-start">Montant : {item.montant}</Text>
                    <Text className="text-[#fff]">Date : {new Date(Date.now()).toUTCString()}</Text>

                </StyledView>
                <Pressable className='flex items-center justify-center relative m-1' onPress={() => setModalVisible(true)}>
                    <QRCode
                        value={JSON.stringify(item)}
                        logoBorderRadius={10}
                        size={70}

                    />
                    <StyledView className='absolute top-[20] left-[20px]'>
                        <Ionicons name="md-eye" size={32} color="#fff" />
                    </StyledView>
                </Pressable>

            </StyledView>
            {isModalVisible && <QrcodeViewPopup item={item} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />}
        </>

    );
}

function QrcodeViewPopup({ item, isModalVisible, setModalVisible }) {

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const { qrcodeInfo, updateQrcodeInfo, resetQrcodeInfo } = useContext(QRcodeContext)
    const shareViewRef = useRef()
    const StyledView = styled(View)


    function shareRecapTicket() {
        captureRef(shareViewRef, {
            format: "png",
            quality: 1,
        }).then(
            async (uri) => {
                console.log("uri : ", uri)
                Sharing.isAvailableAsync().then((available) => {
                    if (available) {
                        Sharing.shareAsync(uri)
                            .then((data) => {
                                console.log("content shared")
                            })
                            .catch((err) => {
                                console.log(JSON.stringify(err));
                            });
                    } else {
                        console.log('Sharing is NOT available');
                    }
                });
            },
            (error) => console.error("Oops, snapshot failed", error)
        );
    }

    return (
        <Modal isVisible={isModalVisible} className="flex items-center justify-center">
            <OutsidePressHandler
                onOutsidePress={() => {
                    setModalVisible(false)
                }}
            >
                <StyledView className={`flex flex-col  bg-[#fff] rounded-lg p-2`}>
                    <StyledView className='flex flex-col w-full space-y-[50px] justify-center items-center '>
                        <Pressable onPress={(event) => {
                            setModalVisible(false)
                        }}>
                            <StyledView className='flex flex-col items-center w-[200px] h-[60px]'>
                                <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">QRcode</Text>
                                <StyledView className='flex flex-row w-full items-center justify-center'>
                                    <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                </StyledView>
                            </StyledView>
                        </Pressable>
                        <StyledView
                            ref={shareViewRef}
                            className='flex flex-row w-[250] justify-around items-center h-[180px] border-[3px] border-[#115DA9] bg-[#fff]'
                            collapsable={false}
                        >
                            <QRCode
                                value={JSON.stringify(item)}
                                logoBorderRadius={120}
                                logoSize={50}
                                size={130}
                                logo={"https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg"}

                            />

                        </StyledView>
                        <StyledView className="flex flex-row w-full justify-around">
                            <Pressable className="flex flex-row w-[100px] h-[50px] bg-[#553737] justify-center items-center rounded-lg" onPress={() => {
                                resetQrcodeInfo()
                                setModalVisible(false)
                            }}>
                                <Text className="text-[#fff] font-bold">Retour</Text>
                            </Pressable>
                            <Pressable className="flex flex-row w-[100px] h-[50px] items-center justify-center space-x-2 bg-[#38b849] rounded-lg" onPress={async () => {
                                shareRecapTicket()
                                // resetQrcodeInfo()
                                // setModalVisible(false)

                            }}>
                                <Text className="text-[#fff] font-bold">Partager</Text>
                                <FontAwesome name="share-alt" size={24} color="#fff" />
                            </Pressable>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </OutsidePressHandler>
        </Modal >
    )
}

