import { styled } from "nativewind"
import ComponentSafeArea from "../../common/customSafeAre/componenteSafeArea"
import { Text, View } from "react-native"
import TopNavbar from "../../common/sreenTopBar/topAppNavbar"


const StyledView = styled(View)

export default function ContactSreen(props) {
    return (
        <ComponentSafeArea>
            <StyledView className="flex-1">
                <TopNavbar title={"Initiale Depart"} rest={{ ...props }} />
                <Text>En Cours Developpement</Text>

            </StyledView>
        </ComponentSafeArea>
    )
}