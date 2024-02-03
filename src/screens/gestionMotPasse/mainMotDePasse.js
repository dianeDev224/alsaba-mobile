import { styled } from 'nativewind';
import {
    Text,
    TextInput,
    View,
} from 'react-native';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)

export default function MainMotDePasse(props) {
    return (
        <ComponentSafeArea>
            <StyledView className="flex-1">
                <TopNavbar title={"Changement De Mot De Passe"} rest={{ ...props }} classNamer={"bg-[#abc]"} />
                <StyledView className="flex-1 flex flex-col items-center justify-center">
                    <Input
                        label={<Text className="flex w-[250px] h-[30px] bg-[#af8834] rounded-t-[10px] text-[#fff] text-center font-bold">Ancien Mot De Passe</Text>}
                        placeholder="ex : akdejden"
                    />
                    <Input
                        label={<Text className="flex w-[250px] h-[30px] bg-[#af8834] rounded-t-[10px] text-[#fff] text-center font-bold">Nouveau Mot De Passe</Text>}
                        placeholder="ex : akdejden"
                    />
                    <Input
                        label={<Text className="flex w-[250px] h-[30px] bg-[#af8834] rounded-t-[10px] text-[#fff] text-center font-bold">Confirmation</Text>}
                        placeholder="ex : akdejden"
                    />
                    <StyledView className="flex flex-row w-[150px] h-[30px] bg-[#af8834] items-center justify-center rounded-lg">
                        <Text className="font-semibold text-[#fff]">Valider</Text>
                    </StyledView>
                </StyledView>
            </StyledView>
        </ComponentSafeArea>
    )
}

function Input({ label = null, placeholder = "ex : ", className = "m-5" }) {
    return (
        <StyledView className={`flex flex-col w-[300px] h-[100px] ${className}`}>
            {label}
            <TextInput
                className="flex-1 items-center border-[3px] rounded-r-md rounded-b-md p-4"
                placeholder={placeholder}

            />
        </StyledView>
    )
}
