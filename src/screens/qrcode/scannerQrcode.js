import React, {
    useEffect,
    useState,
} from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as ImagePicker from 'expo-image-picker';
import { styled } from 'nativewind';
import {
    Modal,
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';

import { Ionicons } from '@expo/vector-icons';

import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import QrcodeScannDataPopup
    from '../../components/popup/qrcode/qrcodeScannDataPopup';

const StyledView = styled(View)

function ScannerQrcode({ isModalVisible, setModalVisible }) {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isScannDataPopupVisible, setScannDataVisible] = useState(false);
    const [scannedDdata, setScannedData] = useState();
    const [image, setImage] = useState(null);

    const windowSize = useWindowDimensions();

    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        setScannedData(JSON.parse(data))
        console.log("the data : ", data[0].data)
        setScannDataVisible(true)
        setScanned(true);
    };

    const readQrcodeFromImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            try {
                console.log("url : ", result.assets[0].uri)
                const scannedResults = await BarCodeScanner.scanFromURLAsync(
                    result.assets[0].uri
                );

                handleBarCodeScanned({ data: scannedResults })

            } catch (error) {
                alert("aucun qr code trouvé : ", error)
            }
        }
    };

    if (hasPermission === null) {
        return (
            <StyledView className='flex flex-col w-full h-[300px]  justify-center items-center'>
                <Text className="text-center font-bold text-[20px] text-[#888585]">Demande De Permission à la camera</Text>
            </StyledView>
        );
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ComponentSafeArea>
            <StyledView className="flex flex-col item-center justify-center w-full h-full my-[10px]">
                <Modal isVisible={isModalVisible} className="flex items-center justify-center">
                    <OutsidePressHandler
                        onOutsidePress={() => {
                            console.log('Pressed outside the box!');
                            setModalVisible(false)
                        }}
                    >
                        <StyledView className={`flex flex-col w-full h-[500px] rounded-lg p-2`}>
                            <StyledView className='flex flex-col w-full space-y-[50px] justify-center items-center '>
                                <Pressable onPress={(event) => {
                                    setModalVisible(false)
                                }}>
                                    <StyledView className='flex flex-col items-center'>
                                        <Text className="uppercase text-md font-bold w-full text-center text-[#115DA9]">Nouveau QRcode</Text>
                                        <StyledView className='flex flex-row w-full items-center justify-center'>
                                            <Ionicons name="ios-chevron-down-circle-outline" size={40} color="#115DA9" />
                                        </StyledView>
                                    </StyledView>
                                </Pressable>
                                <BarCodeScanner
                                    className="flex absolute top-[20px] right-0 bottom-0 left-0 bg-[#298361] h-[400px]"
                                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}


                                />
                                {scanned && <Pressable className='flex flex-row ' onPress={() => setScanned(false)}>
                                    <Ionicons name="refresh-circle" size={40} color="#fff" />
                                </Pressable>}
                                <StyledView className='flex flex-row'>
                                    <StyledView className=''>
                                        <Ionicons name="flashlight" size={24} color="#fff" />
                                    </StyledView>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                        <StyledView className="flex flex-col h-[200px] items-center justify-center">
                            <Pressable className="flex w-[150px] h-[40px] bg-[#67d367] justify-center items-center rounded-md " onPress={() => readQrcodeFromImage()}>
                                <Text className="text-[#fff] font-bold">Importer le QRcode</Text>
                            </Pressable>
                        </StyledView>
                        <QrcodeScannDataPopup isModalVisible={isScannDataPopupVisible} setModalVisible={setScannDataVisible} data={scannedDdata} />
                    </OutsidePressHandler>
                </Modal>
            </StyledView>
        </ComponentSafeArea>
    );
};


function styleGenerator({ windowHeight, windowWidth }) {
    console.log("la data : ", windowWidth)
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


export default React.memo(ScannerQrcode)
