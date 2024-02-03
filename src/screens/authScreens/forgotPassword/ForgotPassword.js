import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import ComponentSafeArea from "../components/componenteSafeArea"
import { Text, TextInput, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styled } from "nativewind"
import { Ionicons } from "@expo/vector-icons"

export default function ForgotPassword() {

    const StyledView = styled(View)
    return (
        <ComponentSafeArea>
            <KeyboardAwareScrollView className="flex w-full h-full">
                <StyledView className='flex flex-col space-y-[80px] relative'>
                    <StyledView className='flex flex-row w-full'>
                        <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                    </StyledView>
                    <StyledView className='flex flex-row justify-center items-center'>
                        <Text className="font-semibold text-[#444444]  italic text-lg">Mot De Passe Oublié</Text>
                    </StyledView>
                    <StyledView className='flex flex-col items-center justify-center space-y-[20px]'>
                        <Text className="text-[#444444] font-medium italic">Entrer Votre Numero de Telephone</Text>
                        <StyledView className='flex flex-row w-[250px] border-[2px] border-[#9b9797] h-[50px] rounded-3xl'>
                            <TextInput
                                className="font-medium text-base px-[10px]"
                                placeholder='ex : +212648529316'
                                keyboardType='numeric'
                            />
                        </StyledView>
                        <LinearGradient
                            className='flex flex-row  w-[250px] h-[50px] shadow-lg rounded-3xl sm:bg-[#813d3d] items-center justify-center'
                            colors={['#005505', '#94FDBE']}
                        >
                            <Text className="text-[#fff] font-bold text-base">Valider</Text>
                        </LinearGradient>
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