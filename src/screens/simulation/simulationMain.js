import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
    AntDesign,
    Entypo,
    Feather,
    Ionicons,
} from '@expo/vector-icons';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)

export default function SimulationMain(props) {


    return (
        <ComponentSafeArea>
            <View
                className="flex-1"
            >
                <TopNavbar title={"Simulation"} rest={{ ...props }} leftIcon={<Ionicons name="ios-home-outline" size={24} color="#a71717" />} handleLeftIconPres={() => props.navigation.navigate("Accueil")} classNamer={"bg-[#abc]"} />
                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: '#fff'
                    }}
                >
                    <Item
                        title={"Transfert"}
                        leftLogo={<Feather name="arrow-down-left" size={24} color="black" />}
                        subItems={
                            <>
                                <SubItem title={"Transfert Nationnale"} classNamed='bg-[#d5c7da]' handlePress={() => props.navigation.navigate('SimulationNavigator', { screen: 'simulationNationnale' })} />
                                <SubItem title={"Transfert Internationnale"} classNamed='bg-[#90bfc5]' handlePress={() => props.navigation.navigate('SimulationNavigator', { screen: 'simulationInternationnale' })} />
                            </>
                        } />
                </ScrollView>
            </View>
        </ComponentSafeArea>
    )
}


function Item({ title, subItems = <SubItem title={"Profile"} />, leftLogo = <AntDesign name="qrcode" size={24} color="black" /> }) {
    return (
        <StyledView className="flex flex-col w-full bg-[#fff] px-4  mt-[30px]">
            <StyledView className="flex flex-row items-center justify-between  ">
                <StyledView className="flex flex-row items-center space-x-2">
                    {leftLogo}
                    <Text className="text-3xl font-bold">{title}</Text>
                </StyledView>
                <Entypo name="chevron-small-right" size={35} color="black" />
            </StyledView>
            {
                subItems
            }
        </StyledView>
    )
}



function SubItem({ title, handlePress, classNamed = "" }) {
    return (
        <Pressable className={`flex flex-row h-[60px] ml-[30px] ${classNamed} p-[5px] my-1 items-center rounded-full`} onPress={handlePress}>
            <Text className="flex underline text-base font-bold text-[#444343]">{title}</Text>
        </Pressable>
    )
}

