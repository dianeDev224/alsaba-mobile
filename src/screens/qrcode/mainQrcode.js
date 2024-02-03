import {
    useEffect,
    useRef,
    useState,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';

import {
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';

import { QRcodetItem } from '../../../app.data';
import AppBar from '../../components/common/drawerTopBar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import NouveauCodeQR from './nouveauCodeQR';
import QrcodeScanner from './qrcodeScanner';
import QrcodeValider from './qrcodeValider';
import ScannerQrcode from './scannerQrcode';

export default function MainQrcode(props) {

    const StyledView = styled(View);
    const windowSize = useWindowDimensions();
    const styleSheet = styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width });
    const [currentItem, setCurrentItem] = useState({
        uuid: "#navQrcodeGenerer",
        scrollPosition: 0
    })
    let showScannerPopup = false;
    const scrollViewRef = useRef()
    let scrollPosition = 0;

    function handleScroll(event) {
        scrollPosition = event.nativeEvent.contentOffset.x;
    }

    useEffect(() => {
        scrollViewRef.current.scrollTo({ x: currentItem.scrollPosition, animated: false });
    }, [currentItem]);

    function toggleScannerPopup() {
        showScannerPopup = !showScannerPopup;
        setCurrentItem({
            uuid: "#navQrcodeGenerer",
            scrollPosition: 0
        })
    }

    return (
        <ComponentSafeArea>
            <StyledView className={`flex flex-col w-full h-full`}>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView className={`flex flex-col w-full h-[40px] px-4`}>
                    <StyledView className={`flex flex-row w-full space-x-2 items-center mt-2`}>
                        <Text className={`font-bold text-[#115DA9] text-2xl`}>QRcode Money</Text>
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="#115DA9" />
                    </StyledView>
                </StyledView>
                <StyledView className="flex flex-row w-full  h-[100px] items-center justify-center">
                    <ScrollView
                        horizontal
                        ref={scrollViewRef}
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                    >
                        <StyledView className={`flex flex-row w-full
                             ${styleSheet.navBarContainerHeight}
                             items-center justify-center
                             space-x-[8px]
                             h-[100px]
                            `
                        }
                        >
                            {QRcodetItem.map((item) => {
                                return (
                                    <StyledView key={item.id} className="flex flex-row  w-[220px]  justify-center items-center">
                                        <Pressable className={`flex flex-row  ${item.ColorClass}
                                                        ${styleSheet.navBarItemWidth}
                                                        ${styleSheet.navBarItemHeight}
                                                        items-center
                                                        justify-center
                                                        relative
                                                        h-[40px]
                                                        `
                                        }
                                            onPress={() => {
                                                setCurrentItem({
                                                    ...currentItem,
                                                    uuid: item.uuid,
                                                    scrollPosition: scrollPosition
                                                })

                                            }}
                                        >
                                            <StyledView className="absolute flex flex-row w-[30px] h-[30px] bg-[#fffefe] rotate-45 -left-[15px] z-50">

                                            </StyledView>
                                            <StyledView className={`absolute flex flex-row w-[30px] h-[30px] ${item.ColorClass} rotate-45 -right-[15px] z-50`}>

                                            </StyledView>
                                            <Text
                                                className={`text-[10px] font-bold  text-[#fff] w-[100px] text-center ${styleSheet.fontSize}`}
                                            >
                                                {item.Name}
                                            </Text>
                                            <StyledView className={`absolute  ${(currentItem.Name === item.Name && currentItem.id === item.id) ? 'flex flex-row' : 'hidden'} w-[23px] h-[23px] ${item.ColorClass} rotate-45 -bottom-[11px] -z-[1000]`}>

                                            </StyledView>

                                        </Pressable>
                                        <MaterialIcons name="double-arrow" size={65} color={item.ColorValue} />
                                    </StyledView>
                                )
                            })}
                        </StyledView>
                    </ScrollView>
                </StyledView>
                {(currentItem.uuid === "#navQrcodeGenerer") && <QrcodeScanner />}
                {(currentItem.uuid === "#navNouveauQrCode") && <NouveauCodeQR />}
                {(currentItem.uuid === "#navScannQRCode") && <ScannerQrcode isModalVisible={showScannerPopup} setModalVisible={toggleScannerPopup} />}
                {(currentItem.uuid === "#navQRCodeValider") && <QrcodeValider />}

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