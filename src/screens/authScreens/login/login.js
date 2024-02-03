import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, Image, Pressable, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import { styled } from "nativewind";
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BlurView } from 'expo-blur';
import ComponentSafeArea from '../components/common/customSafeAre/componenteSafeArea';
import { useNavigation } from '@react-navigation/native';
import ServiceMenuPopup from '../components/popup/servicePopup';

function LoginScreen(props) {

    const [showServicesPopup, setShowServicesPopup] = useState(false);
    const StyledView = styled(View)
    const dimentions = useWindowDimensions()
    const styleSheet = styleGeneretor({ windowHeigth: dimentions.height, windowWidth: dimentions.width })


    return (
        <ComponentSafeArea>
            <KeyboardAwareScrollView extraHeight={120}>
                <SafeAreaView className="flex flex-col w-screen h-screen bg-[#fff] justify-center items-center">
                    <StyledView className={`flex flex-row relative w-full ${styleSheet.headerHeigh} bg-[#966565] `}>
                        <LinearGradient
                            className={`flex flex-row absolute -top-[2%] -right-[29%] ${styleSheet.roundedBox} shadow-lg rounded-full`}
                            colors={['#005505', '#3c9f6d', '#94FDBE', '#0e4d24']}
                        />
                        <LinearGradient
                            className={`flex flex-row absolute -top-[1%] -right-[30%] ${styleSheet.roundedBox} shadow-lg rounded-full`}
                            colors={['#005505', '#94FDBE']}
                        />
                        <StyledView className={`absolute left-2 bottom-[2%] `}>
                            <Image
                                src={'https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg'}
                                alt='logo-alsaba'
                                className={`${styleSheet.logoSize} rounded-full`}
                            />
                        </StyledView>
                    </StyledView>

                    <StyledView className={`flex flex-col w-full justify-center items-center`}>

                        <StyledView className='flex flex-row  w-full h-[50px] justify-center items-center'>
                            <Text className={`font-bold ${styleSheet.fontSize} text-[#115DA9]`}>Connexion</Text>
                        </StyledView>

                        <StyledView className='flex flex-col  w-[300px] h-[50px] mt-2'>
                            <Text className="ml-1 text-[#115DA9] font-bold text-xl">Telephone</Text>
                            <TextInput
                                className="border-b-[2px] border-b-[#c9c4c4ec] ml-1 w-[90%]"
                                placeholder='ex:+2244569606'
                            // editable
                            // multiline
                            // numberOfLines={4}
                            // maxLength={40}
                            // onChangeText={text => onChangeText(text)}
                            // value={value}
                            // style={{ padding: 10 }}
                            />
                        </StyledView>
                        <StyledView className='flex flex-col  w-[300px] h-[50px] m-6'>
                            <Text className="ml-1 text-[#115DA9] font-bold text-xl">Mot De Passe</Text>
                            <StyledView className='flex flex-row justify-between border-b-[2px] border-b-[#c9c4c4ec] ml-1 '>
                                <TextInput
                                    className="  w-[90%]"
                                    placeholder="*******"
                                // editable
                                // multiline
                                // numberOfLines={4}
                                // maxLength={40}
                                // onChangeText={text => onChangeText(text)}
                                // value={value}
                                // style={{ padding: 10 }}
                                // textContentType='newPassword'
                                />
                                <Entypo name="eye" size={24} color="#115DA9" className="mr-2 bg-[#115DA9]" />
                            </StyledView>
                            <StyledView className='flex flex-row  h-[30px] w-full justify-end mb-[40px]'>
                                <Text className="text-[#773c2b] font-bold text-base ">Mot de passe oublié?</Text>
                            </StyledView>
                        </StyledView>
                        <StyledView className='absolute flex flex-col  top-[355px] w-[200px] h-[100px] m-4 '>
                            <Pressable onPress={() => props.navigation.navigate("DrawerNavigator")}>
                                <LinearGradient
                                    className='flex flex-row rounded-full bg-[#995e5e] w-full h-[40px] items-center justify-center'
                                    colors={['#94FDBE', '#005505']}
                                >
                                    <Text className="w-full  text-center text-[#fff] font-bold text-xl">Connexion</Text>
                                </LinearGradient>
                            </Pressable>
                            <StyledView className='flex flex-row justify-center mt-2 rounded-full'>
                                <StyledView className='w-[50px] h-[50px] rounded-full border-[4px] border-[#348339]'>
                                    <Ionicons className="" name="md-finger-print" size={40} color="black" />
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex flex-row absolute bottom-0 left-0 right-0 w-full h-[180px] '>
                        <StyledView className='flex relative w-full h-full overflow-hidden perspective-5'>
                            <LinearGradient
                                className='flex flex-row absolute -bottom-[48%] -left-[32%] w-[220px] h-[200px] shadow-lg rounded-full'
                                colors={['#005505', '#3c9f6d', '#94FDBE', '#179c46']}
                            />
                            <LinearGradient
                                className='flex flex-row absolute -bottom-[54%] -left-[30%] w-[220px] h-[200px] shadow-lg rounded-full'
                                colors={['#94FDBE', '#005505',]}
                            />
                        </StyledView>
                        <LinearGradient
                            className='flex flex-row absolute bottom-1 left-[50%] -translate-x-[50px] w-[100px] h-[10px]'
                            colors={['#94FDBE', '#005505',]}
                        />
                        <StyledView className='flex flex-row absolute bottom-[20px] left-[50%] -translate-x-[20px]'>
                            <Entypo name="chevron-with-circle-up" size={40} color="#115DA9" className="" onPress={(e) => setShowServicesPopup(true)} />
                        </StyledView>

                        <StyledView className='absolute flex flex-col w-[200px] h-[70px] bottom-[100px] right-1'>
                            <Text className="w-full text-center text-[#695d5d] font-bold text-md">Vous n'avez pas de compte ?</Text>
                            <LinearGradient
                                className='flex flex-row rounded-full bg-[#995e5e] w-full h-[40px] justify-center items-center'
                                colors={['#94FDBE', '#005505']}
                            >
                                <Text className="w-full text-center text-[#fff] font-bold text-lg">Creer un Compte</Text>
                            </LinearGradient>
                        </StyledView>
                    </StyledView>
                    <ServiceMenuPopup isModalVisible={showServicesPopup} setModalVisible={setShowServicesPopup} />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </ComponentSafeArea>

    )
}

function styleGeneretor({ windowHeigth, windowWidth }) {

    if (windowHeigth > 700 && windowHeigth < 850) {
        return {
            fontSize: "text-4xl",
            headerHeigh: "h-[200px]",
            roundedBox: "w-[180px] h-[200px]",
            logoSize: "w-[100px] h-[100px]",
            bottomLayoutTop: "top-[70px]",
            favoriteSpaceY: "space-y-[10px]"

        }
    } else {
        return {
            fontSize: "text-2xl",
            headerHeigh: "h-[180px]",
            roundedBox: "w-[220px] h-[180px]",
            logoSize: "w-[80px] h-[80px]",
            bottomLayoutTop: "top-[60px]",
            favoriteSpaceY: "space-y-[2px]"
        }

    }
}



export default LoginScreen