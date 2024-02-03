import { styled } from 'nativewind';
import {
    Text,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';

import AppBar from '../../components/common/drawerTopBar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';

const StyledView = styled(View)


export default function ListMessages(props) {


    const dummyData = [
        {
            id: 1,
            expediteur: "Agence Rabat",
            estLu: false,
            nbreNouveauMessage: 2,
            nouveauMessage: [
                {
                    date: "12/12/2022",
                    contenu: "salut",
                    reception: true
                },
                {
                    date: "12/13/2022",
                    contenu: "Bonsoir",
                    reception: true
                },
            ],
            ancienMessages: [
                {
                    date: "12/12/2022",
                    contenu: "ça va ",
                    reception: true
                }
            ]
        },
        {
            id: 2,
            expediteur: "Agence Mohammedia",
            nbreNouveauMessage: 1,
            nouveauMessage: [
                {
                    date: "12/12/2022",
                    contenu: "tu as réçu un dépôt",
                    reception: true
                }
            ],
            ancienMessages: [
                {
                    date: "12/12/2022",
                    contenu: "ça va ",
                    reception: true
                }
            ]
        },
    ]


    return (
        <ComponentSafeArea>
            <StyledView className='flex flex-1'>
                <AppBar handleDrawerOpen={props.navigation.openDrawer} />
                <StyledView className='flex flex-col bg-[#305f44] w-full h-[120px] justify-between'>
                    <StyledView className="flex flex-row justify-between items-center p-2">
                        <Text className="font-bold text-2xl text-[#fff]">AlChat Message</Text>
                        <StyledView className="flex flex-row space-x-3 ">
                            <MaterialCommunityIcons name="camera-outline" size={28} color="#fff" />
                            <Ionicons name="ios-search-outline" size={28} color="#fff" />
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-row justify-around">
                        <StyledView className="flex flex-row w-[100px] h-[30px] border-b-[3px] border-b-[#fff] items-center justify-center">
                            <Text className="font-semibold text-[#fff]">Disc</Text>
                        </StyledView>
                        <StyledView className="flex flex-row w-[100px] h-[30px]  border-b-[#fff] items-center justify-center">
                            <Text className="font-semibold text-[#fff]">Status</Text>
                        </StyledView>
                        <StyledView className="flex flex-row w-[100px] h-[30px]  border-b-[#fff] items-center justify-center">
                            <Text className="font-semibold text-[#fff]">Appels</Text>
                            <MaterialIcons name="phone-callback" size={24} color="#fff" />
                        </StyledView>
                    </StyledView>
                </StyledView>
                <ScrollView contentContainerStyle={{ flex: 1 }}>

                    {
                        dummyData.map((item) => {
                            return (
                                <StyledView key={item.id} className="flex flex-row w-full h-[60px] relative m-2">

                                    <StyledView className="flex flex-row absolute left-1 w-[60px] h-[60px] rounded-full bg-[#b3adad] ">

                                    </StyledView>

                                    <StyledView className="flex flex-col absolute left-[80px] top-1 w-[50%] h-[30px]">
                                        <Text className="font-bold text-base">{item.expediteur}</Text>
                                        <Text className="text-sm">{item.nouveauMessage[0].contenu}</Text>
                                    </StyledView>

                                    <StyledView className="flex flex-col justify-between absolute right-2 w-[90px]">
                                        <Text className={"text-[#73c040]"}>{item.nouveauMessage[0].date}</Text>
                                    </StyledView>
                                    <StyledView className="flex absolute bottom-1 right-4 rounded-full  w-[20px] h-[20px] bg-[#66b65f] items-center justify-center">
                                        <Text className="text-[#fff]">{item.nbreNouveauMessage}</Text>
                                    </StyledView>

                                </StyledView>
                            )
                        })
                    }


                </ScrollView>
            </StyledView>
        </ComponentSafeArea>
    )
}