import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';

const StyledView = styled(View)

const popAction = StackActions.pop(1);

export default function TopNavbar({ title, rest, leftIcon = <AntDesign name="arrowleft" size={24} color="#a71717" />, handleLeftIconPres = () => rest.navigation.dispatch(popAction), classNamer = "bg-[#abc]" }) {

    return (
        <StyledView className={`flex flex-row relative justify-center items-center h-[40px] ${classNamer}`}>
            <Text className="flex font-bold text-xl text-[#792828]">{title}</Text>
            <Pressable className="absolute left-0 " onPress={handleLeftIconPres}>
                {leftIcon}
            </Pressable>
        </StyledView>
    )

}