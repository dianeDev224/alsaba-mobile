import {
    FlatList,
    Text,
    View,
} from 'react-native';

import { ButtonAjouter } from '../../components/buttonAjouter/buttonAjouter';
import { CaveauxCard } from '../../components/caveauxCard/caveauxCard';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import DrawerMenu from '../../components/drawerMenu/drawerMEnu';
import {
    InputTextStyled,
} from '../../components/inputTextStyled/inputTextStyled';
import listCaveauxController from './listeCaveauxController';
import { Styles } from './styles';

const data = [
    {
        id: 1,
        name: "Momo",
        solde: "12000",
        monnaie: 'FGN',
        color: "#e0e9e9"
    },
    {
        id: 2,
        name: "Orange Money",
        solde: "12300",
        monnaie: 'DH',
        color: "#e2e2c6"
    },
    {
        id: 3,
        name: "Poche",
        solde: "14300",
        monnaie: 'FGN',
        color: "#ddd5e6"
    },
    {
        id: 4,
        name: "Banque",
        solde: "12330",
        monnaie: 'FGN',
        color: "#e2e4e4"
    },
]

export default function ListeCaveaux(props) {
    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                {/* <BackArrowNavigator rightText={"Caveaux"} /> */}
                <DrawerMenu handleClick={() => listCaveauxController.handleDrawerMenuClick({ navigator: props.navigation.openDrawer })} />
                <ButtonAjouter extraStyle={{
                    container: {
                        position: 'absolute',
                        right: 10,
                    }
                }}
                    handlePress={() => listCaveauxController.handleAjouterBtnPress({ navigator: props.navigation })}

                />
                <Text style={Styles.title}>Caveaux</Text>
                <InputTextStyled extraStyle={{ container: Styles.inputText, IconColor: "#0e964d" }} placeholder="chercher un caveaux" />
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CaveauxCard key={item.id} extraStyles={{ container: { ...Styles.annonCardConatiner, backgroundColor: "#e0e9e9", borderWidth: 3, margingVertical: 3 } }} item={item} handleClick={() => listAnnonceController.handleCardClick({ navigator: props.navigation })} />}
                    rowWrapperStyle={{
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