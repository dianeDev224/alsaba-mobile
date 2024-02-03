import {
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';

import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import ComponentSafeArea
  from '../components/common/wrappers/componenteSafeArea';
import HomeScreen from '../screens/accueil/homeScreen';
import BilanMainMain from '../screens/bilan/bilanMain';
import MainCodeMoney from '../screens/codeMoney/mainCodeMoney';
import MainDepot from '../screens/depots/mainDepot';
import HoraireTravail from '../screens/horaireTravail/horaireTravailView';
import ListeAnnonce from '../screens/listeAnnonces/listeAnnoncesView';
import ListeAttentes from '../screens/listeAttente/listeAttenteView';
import ListeCaveaux from '../screens/listeCaveaux/listeCaveauxView';
import PlannificationTaches
  from '../screens/listeTaches/plannificationTacheController';
import ListMessages from '../screens/messagerie/mainMessages';
import MouvementMain from '../screens/mouvementMain/mouvementMain';
import ParametreMain from '../screens/parametreMain/parametreMain';
import MainRetrait from '../screens/retraits/mainRetrait';
import SimulationMain from '../screens/simulation/simulationMain';
import { TableauBord } from '../screens/tableauBord/tableauBordView';
import MainTransfert from '../screens/transfert/mainTransfert';
import MainVirement from '../screens/virements/mainVirement';
import { Styles } from './styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator screenOptions={{
            // drawerActiveBackgroundColor: '#208a19',
            // drawerActiveTintColor: 'white',
            headerShown: false,
            drawerStatusBarAnimation: "none",
            lazy: true,

        }}

            drawerContent={CustomDrawerContent}

        >
            <Drawer.Screen name="Accueil" component={HomeScreen} options={{
                color: '#115DA9',
                Icon: <FontAwesome5 name="home" size={24} color={"#115DA9"} />,
                drawerLabel: 'Accueil',
                // Section/Group Name
                groupName: 'Généralités',
                activeTintColor: "#a3ceb7"
            }} />
            <Drawer.Screen name="TableauBord" component={TableauBord} options={{
                color: '#115DA9',
                Icon: < FontAwesome name="dashboard" size={24} color="#115DA9" />,
                drawerLabel: 'Tableau De Bord',
                // Section/Group Name
                groupName: 'Généralités',
                activeTintColor: "#a3ceb7"
            }} />
            <Drawer.Screen name="Paramètres" component={ParametreMain}
                options={{
                    color: '#115DA9',
                    Icon: <Ionicons name="settings" size={24} color="#115DA9" />,
                    drawerLabel: 'Paramètres',
                    groupName: 'Généralités',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Transferts" component={MainTransfert}
                options={{
                    color: '#115DA9',
                    Icon: <FontAwesome5 name="sync" size={24} color="#115DA9" />,
                    drawerLabel: 'Transferts',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Virements" component={MainVirement}
                options={{
                    color: '#115DA9',
                    Icon: < Feather name="arrow-up-right" size={29} color="#115DA9" />,
                    drawerLabel: 'Virements',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Depôts" component={MainDepot}
                options={{
                    color: '#115DA9',
                    Icon: <FontAwesome name="money" size={29} color="#115DA9" />,
                    drawerLabel: 'Depôts',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Retraits" component={MainRetrait}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialCommunityIcons name="account-cash-outline" size={29} color="#115DA9" />,
                    drawerLabel: 'Retraits',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            />
            {/* <Drawer.Screen name="QRcode Money" component={MainQrcode}
                options={{
                    color: '#115DA9',
                    Icon: <AntDesign name="qrcode" size={29} color="#115DA9" />,
                    drawerLabel: 'QRcode Money',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            /> */}
            <Drawer.Screen name="Code Money" component={MainCodeMoney}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialCommunityIcons name="sort-numeric-variant" size={24} color="#115DA9" />,
                    drawerLabel: 'Code Money',
                    // Section/Group Name
                    groupName: 'Operations',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Mouvements" component={MouvementMain}
                options={{
                    color: '#115DA9',
                    Icon: <Feather name="move" size={24} color="#115DA9" />,
                    drawerLabel: 'Mouvements',
                    groupName: 'Caisse',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Cavaux" component={ListeCaveaux}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialCommunityIcons name="treasure-chest" size={24} color="#115DA9" />,
                    drawerLabel: 'Caveaux',
                    // Section/Group Name
                    groupName: 'Comptabilités',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Bilans" component={BilanMainMain}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialIcons name="account-tree" size={24} color="#115DA9" />,
                    drawerLabel: 'Bilans',
                    // Section/Group Name
                    groupName: 'Comptabilités',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="ListeTâches" component={PlannificationTaches}
                options={{
                    color: '#115DA9',
                    Icon: <Octicons name="tasklist" size={24} color="#115DA9" />,
                    drawerLabel: "Mes Tâches",
                    // Section/Group Name
                    groupName: 'Planning',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Horaire" component={HoraireTravail}
                options={{
                    color: '#115DA9',
                    Icon: <FontAwesome name="bank" size={24} color="#115DA9" />,
                    drawerLabel: "Horaire De Travail",
                    // Section/Group Name
                    groupName: 'Planning',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="ListeAttentes" component={ListeAttentes}
                options={{
                    color: '#115DA9',
                    Icon: <FontAwesome5 name="tasks" size={24} color="#115DA9" />,
                    drawerLabel: "Reservations",
                    // Section/Group Name
                    groupName: 'Planning',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="messagerie" component={ListMessages}
                options={{
                    color: '#115DA9',
                    Icon: <AntDesign name="wechat" size={24} color="#115DA9" />,
                    drawerLabel: 'AlChat',
                    // Section/Group Name
                    groupName: 'Mes Services',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="simutlation" component={SimulationMain}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialCommunityIcons name="waveform" size={24} color="#115DA9" />,
                    drawerLabel: 'Simulations',
                    // Section/Group Name
                    groupName: 'Mes Services',
                    activeTintColor: "#a3ceb7"
                }}
            />
            <Drawer.Screen name="Annonces" component={ListeAnnonce}
                options={{
                    color: '#115DA9',
                    Icon: <MaterialIcons name="campaign" size={24} color="#115DA9" />,
                    drawerLabel: 'Annonces',
                    // Section/Group Name
                    groupName: 'Alvoyage',
                    activeTintColor: "#a3ceb7"
                }}
            />
        </Drawer.Navigator>

    )
}

function CustomDrawerContent(props) {
    const { state, descriptors, navigation } = props;
    let lastGroupName = '';
    let newGroup = true;
    return (

        <ComponentSafeArea>
            <View style={Styles.navbarLogoConatiner}>
                <Image
                    src={'https://i.postimg.cc/yY7yhzn4/logo-alsaba.jpg'}
                    alt='logo-alsaba'
                    className="w-full h-full rounded-full"
                    style={Styles.logo}
                />
            </View>
            <DrawerContentScrollView {...props}>
                {state.routes.map((route) => {
                    const {
                        color,
                        Icon,
                        drawerLabel,
                        activeTintColor,
                        groupName
                    } = descriptors[route.key].options;
                    if (lastGroupName !== groupName) {
                        newGroup = true;
                        lastGroupName = groupName;
                    } else newGroup = false;

                    return (
                        <>
                            {(newGroup && groupName !== "Main") ? (
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: "#e0e0e0"
                                }} >
                                    <Text key={groupName} style={{ fontSize: 19 * Dimensions.get('screen').fontScale, color: "#9e1515", fontWeight: 'bold', fontStyle: 'italic' }} className="ml-2  text-[#115DA9] font-bold text-lg">
                                        {groupName}
                                    </Text>
                                </View>
                            ) : null}
                            {groupName === "Main" ?
                                (<DrawerItem
                                    key={route.key}
                                    label={
                                        () =>
                                            <View style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                marginLeft: 20,
                                                // backgroundColor: (state.routes.findIndex((e) => e.name === route.name) === state.index) ? '' : 'e2e2e2',
                                                width: '98%',
                                                height: 50,
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                borderRadius: 10,
                                                padding: 2,
                                            }}>
                                                {Icon}
                                                <Text style={{
                                                    color: color,
                                                    fontWeight: 'bold',
                                                    fontStyle: 'italic',
                                                    marginLeft: 2,
                                                    fontSize: 17 * Dimensions.get('screen').fontScale
                                                }} className="text-[#115DA9] font-bold text-lg">
                                                    {drawerLabel}
                                                </Text>
                                            </View>
                                    }
                                    focused={
                                        state.routes.findIndex(
                                            (e) => e.name === route.name
                                        ) === state.index
                                    }
                                    activeBackgroundColor={activeTintColor}
                                    onPress={() => navigation.navigate(route.name)}
                                />) : (
                                    <DrawerItem
                                        style={{ margin: 100 }}
                                        key={route.key}
                                        label={
                                            () =>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    // marginLeft: 20,
                                                    // backgroundColor: (state.routes.findIndex((e) => e.name === route.name) === state.index) ? '' : 'e2e2e2',
                                                    width: '98%',
                                                    height: 28,
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start',
                                                    borderRadius: 10,
                                                    padding: 2
                                                }}>
                                                    {Icon}
                                                    <Text style={{
                                                        color: color,
                                                        fontWeight: 'bold',
                                                        fontStyle: 'italic',
                                                        marginLeft: 6,
                                                        fontSize: 17 * Dimensions.get('screen').fontScale
                                                    }} className="text-[#115DA9] font-bold text-lg">
                                                        {drawerLabel}
                                                    </Text>
                                                </View>
                                        }
                                        focused={
                                            state.routes.findIndex(
                                                (e) => e.name === route.name
                                            ) === state.index
                                        }
                                        activeBackgroundColor={activeTintColor}
                                        onPress={() => navigation.navigate(route.name)}
                                    />
                                )

                            }
                        </>
                    );
                })}

            </DrawerContentScrollView>
        </ComponentSafeArea>
    );
}