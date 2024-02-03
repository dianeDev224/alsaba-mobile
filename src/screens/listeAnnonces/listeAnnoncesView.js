import React from 'react';

import {
    FlatList,
    Pressable,
    Text,
    View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AnnonceCard from '../../components/annonceCard/annonceCardView';
import { ButtonAjouter } from '../../components/buttonAjouter/buttonAjouter';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import {
    InputTextStyled,
} from '../../components/inputTextStyled/inputTextStyled';
import listAnnonceController from './listeAnnoncesControllers';
import { Styles } from './styles';

const data = [
    {
        id: 1,
        depart: "Guinée",
        codeDepart: "gn",
        arrivee: "Maroc",
        codeArrivee: "ma",
        nbreKilo: "2Kg",
        date: "ven 22/22/2022",
        heure: "11h/18:40",
        color: "#e0e9e9"
    },
    {
        id: 2,
        depart: "Algerie",
        codeDepart: "dz",
        arrivee: "Maroc",
        codeArrivee: "ma",
        nbreKilo: "2Kg",
        date: "ven 22/22/2022",
        heure: "11h/18:40",
        color: "#e2e2c6"
    },
    {
        id: 3,
        depart: "Guinée",
        codeDepart: "gn",
        arrivee: "Sénegal",
        codeArrivee: "sn",
        nbreKilo: "2Kg",
        date: "ven 22/22/2022",
        heure: "11h/18:40",
        color: "#ddd5e6"
    },
    {
        id: 4,
        depart: "Mali",
        codeDepart: "ml",
        arrivee: "Maroc",
        codeArrivee: "ma",
        nbreKilo: "2Kg",
        date: "ven 22/22/2022",
        heure: "11h/18:40",
        color: "#e2e4e4"
    },
]

export default function ListeAnnonce(props) {

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <Pressable onPress={() => listAnnonceController.handleDrawerMenuClick({ navigator: props.navigation.openDrawer })}>
                    <MaterialCommunityIcons name="view-dashboard-outline" size={35} color="#0e964d" />
                </Pressable>
                <ButtonAjouter extraStyle={{
                    container: {
                        position: 'absolute',
                        right: 10,
                    }
                }}
                    handlePress={() => listAnnonceController.handleAjouterBtnPress({ navigator: props.navigation })}

                />
                <Text style={Styles.title}>Annonces</Text>
                <InputTextStyled extraStyle={{ container: Styles.inputText, IconColor: "#0e964d" }} />
                <FlatList
                    horizontal={false}
                    data={data}
                    renderItem={({ item }) => <AnnonceCard key={item.id} extraStyles={{ container: { ...Styles.annonCardConatiner, backgroundColor: "#e0e9e9", borderWidth: 3, margingVertical: 3 } }} item={item} handleClick={() => listAnnonceController.handleCardClick({ navigator: props.navigation })} />}
                    numColumns={2}
                    columnWrapperStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        columnGap: 3,
                        rowGap: 4
                    }}
                />
            </View>
        </ComponentSafeArea>
    )
}
