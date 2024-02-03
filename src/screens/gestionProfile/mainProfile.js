import { useRef } from 'react';

import * as Sharing from 'expo-sharing';
import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from 'react-native-view-shot';

import { FontAwesome } from '@expo/vector-icons';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)

export default function MainProfile(props) {

    const shareViewRef = useRef()

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
        <ComponentSafeArea>
            <StyledView className="flex-1">
                <TopNavbar title={"Mon Profile"} rest={{ ...props }} />
                <StyledView className="flex flex-1 flex-col">
                    <Text className="flex text-lg font-bold text-center m-5">Info Du Compte</Text>
                    <StyledView className="flex flex-col">
                        <Text className="flex text-base font-bold text-center m-3">Nom : </Text>
                        <Text className="flex text-base font-bold text-center m-3">Prenom : </Text>
                        <Text className="flex text-base font-bold text-center m-3">Nom : </Text>
                        <Text className="flex text-base font-bold text-center m-3">Tel : </Text>
                        <Text className="flex text-base font-bold text-center m-3">Photo : </Text>
                    </StyledView>
                    <StyledView className="flex flex-col space-y-5 items-center">
                        <StyledView
                            ref={shareViewRef}
                            className='flex flex-row w-[250] justify-around items-center h-[180px] border-[3px] border-[#115DA9] bg-[#fff]'
                            collapsable={false}
                        >
                            <QRCode
                                value={JSON.stringify("bonjour cette est censé contenir le contact et infos utilisateur mais l'implementation n'est pas finalisé")}
                                logoBorderRadius={120}
                                logoSize={50}
                                size={130}
                                logo={"https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg"}

                            />

                        </StyledView>
                        <StyledView className="flex flex-row w-full justify-around">
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
            </StyledView>
        </ComponentSafeArea>
    )
}

