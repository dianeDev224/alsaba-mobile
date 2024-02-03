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
    Ionicons,
    MaterialIcons,
} from '@expo/vector-icons';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)

export default function ParametreMain(props) {


    return (
        <ComponentSafeArea>
            <View className="flex flex-1">
                <TopNavbar title={"Paramètres"} rest={{ ...props }} leftIcon={<Ionicons name="ios-home-outline" size={24} color="#792828" />} handleLeftIconPres={() => props.navigation.navigate("Accueil")} classNamer={"bg-[#abc]"} />
                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: '#fff'
                    }}
                >
                    <Item
                        title={"Sécurité"}
                        leftLogo={<MaterialIcons name="security" size={24} color="black" />}
                        subItems={
                            <>
                                <SubItem title={"Empreinte Digitale"} classNamed='bg-[#d5c7da]' handlePress={() => props.navigation.navigate('ParametreNavigator', { screen: 'EmpreinteDigital' })} />
                                <SubItem title={"Mon Code Secret"} classNamed='bg-[#90bfc5]' handlePress={() => props.navigation.navigate('ParametreNavigator', { screen: 'CodeSecret' })} />
                                <SubItem title={"Gestion De Mot De Passe"} classNamed='bg-[#d6a3d2]' handlePress={() => props.navigation.navigate('ParametreNavigator', { screen: 'MotDePasse' })} />
                            </>
                        } />
                    <Item
                        title={"Profile"}
                        leftLogo={<MaterialIcons name="account-circle" size={24} color="black" />}
                        subItems={
                            <>
                                <SubItem title={"MonCompte"} classNamed='bg-[#b5d8bb]' handlePress={() => props.navigation.navigate('ParametreNavigator', { screen: 'Profile' })} />
                                <SubItem title={"Contact"} classNamed='bg-[#f1d2c0]' handlePress={() => props.navigation.navigate('ParametreNavigator', { screen: 'Contact' })} />
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
            <Text className="flex underline text-lg font-bold">{title}</Text>
        </Pressable>
    )
}

