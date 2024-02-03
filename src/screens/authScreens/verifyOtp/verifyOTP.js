import { styled } from "nativewind";
import ComponentSafeArea from "../components/componenteSafeArea";
import { Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function VerifyOTPCode() {
    const StyledView = styled(View)
    return (
        <ComponentSafeArea>
            <KeyboardAwareScrollView>
                <StyledView className='flex flex-col space-y-[80px] relative'>
                    <StyledView className='flex flex-row w-full'>
                        <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                    </StyledView>
                    <StyledView className='flex flex-row justify-center items-center'>
                        <Text className="font-semibold text-[#444444]  italic text-lg">Verification</Text>
                    </StyledView>
                    <StyledView className='flex flex-col items-center justify-center space-y-[20px]'>
                        <StyledView className='flex flex-row w-[250px]  h-[50px] rounded-3xl justify-between'>
                            <TextInput
                                className="font-medium text-base text-center rounded-full border-[2px] border-[#9b9797] w-[40px] h-[40px]"
                                placeholder='0'
                                keyboardType='numeric'
                            />
                            <TextInput
                                className="font-medium text-base text-center rounded-full border-[2px] border-[#9b9797] w-[40px] h-[40px]"
                                placeholder='0'
                                keyboardType='numeric'
                            />
                            <TextInput
                                className="font-medium text-base text-center rounded-full border-[2px] border-[#9b9797] w-[40px] h-[40px]"
                                placeholder='0'
                                keyboardType='numeric'
                            />
                            <TextInput
                                className="font-medium text-base text-center rounded-full border-[2px] border-[#9b9797] w-[40px] h-[40px]"
                                placeholder='0'
                                keyboardType='numeric'
                            />
                        </StyledView>
                        <StyledView className="flex flex-col space-y-[6px]">
                            <Text className="text-[#444444]">Code non réçu ? <Text className="font-bold text-[#E85C4D] italic">renvoyer</Text></Text>
                            <LinearGradient
                                className='flex flex-row  w-[250px] h-[50px] shadow-lg rounded-3xl sm:bg-[#813d3d] items-center justify-center'
                                colors={['#005505', '#94FDBE']}
                            >
                                <Text className="text-[#fff] font-bold text-base">Valider</Text>
                            </LinearGradient>
                        </StyledView>
                    </StyledView>
                    <StyledView className='flex flex-col justify-between items-center space-y-[5px] h-[100px] w-full '>
                        <Text>
                            Avez-vous un compte ?
                        </Text>
                        <LinearGradient
                            className='flex flex-row  w-[250px] h-[50px] shadow-lg rounded-3xl sm:bg-[#813d3d] items-center justify-center mb-[10px]'
                            colors={['#005505', '#94FDBE']}
                        >
                            <Text className="text-[#fff] font-bold text-base">Connectez-vous</Text>
                        </LinearGradient>
                    </StyledView>
                </StyledView>
            </KeyboardAwareScrollView>
        </ComponentSafeArea>
    )
}