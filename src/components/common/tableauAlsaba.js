import { styled } from 'nativewind';
import {
    Pressable,
    View,
} from 'react-native';

const StyledView = styled(View)

export function ButtonActionTableau(cellData, index, handleClick) {
    return (

        <Pressable className="flex flex-row w-full h-full items-center justify-center" onPress={handleClick}>
            <StyledView className="flex w-2 h-2 bg-[#3cc94f] rounded-full"></StyledView>
            <StyledView className="flex w-2 h-2 bg-[#d43939] rounded-full"></StyledView>
            <StyledView className="flex w-2 h-2 bg-[#4b3cd4] rounded-full"></StyledView>
        </Pressable>
    )
}