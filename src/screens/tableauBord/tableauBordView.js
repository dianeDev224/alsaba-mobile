import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';

import {
    AntDesign,
    FontAwesome,
    FontAwesome5,
} from '@expo/vector-icons';

import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import DrawerMenu from '../../components/drawerMenu/drawerMEnu';
import { Styles } from './styles';
import tableauBordController from './tableauBordController';

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

export function TableauBord(props) {

    return (
        <ComponentSafeArea>
            <View style={Styles.container}>
                <DrawerMenu handleClick={() => tableauBordController.handleDrawerMenuClick({ navigator: props.navigation.openDrawer })} />
                <Text style={Styles.title}>Tableau de bord</Text>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Row>
                            <TableauBordWrapper>
                                <View style={{ backgroundColor: "#b1daa7", flex: 1, borderRadius: 6 }}>
                                    <Text style={Styles.cardTitle}>Liquidité</Text>
                                    <View style={Styles.cardContent}>
                                        <Text style={[{ textAlign: 'center' }]}>Disponibilité : </Text>
                                        <Text style={{}}>12000 FGN</Text>
                                        <Text style={[{ textAlign: 'center' }]}>Solde : </Text>
                                        <Text style={{}}>1200FNG</Text>
                                    </View>
                                </View>
                            </TableauBordWrapper>
                            <TableauBordWrapper>
                                <View style={{ backgroundColor: "#c0bfe9", flex: 1, borderRadius: 6 }}>
                                    <Caisse />
                                </View>
                            </TableauBordWrapper>
                        </Row>
                        <Row>
                            <TableauBordWrapper>
                                <View style={{ backgroundColor: "#f1efca", flex: 1, borderRadius: 6 }}>
                                    <Bilan />
                                </View>
                            </TableauBordWrapper>
                            <TableauBordWrapper>
                                <View style={{ backgroundColor: "#ecc5cb", flex: 1, borderRadius: 6 }}>
                                    <Caveaux />
                                </View>
                            </TableauBordWrapper>
                        </Row>
                        <Flux />
                    </View>
                    {/* <Row>
                        <Col numRows={3}>
                            <TableauBordWrapper>
                                <TacheEnCours />
                            </TableauBordWrapper>
                        </Col>
                        <Col numRows={3}>
                            <TableauBordWrapper>
                                <Notifications />
                            </TableauBordWrapper>
                        </Col>

                    </Row> */}
                    {/* <Row>
                        <Col numRows={3}>
                            <TableauBordWrapper></TableauBordWrapper>
                        </Col>
                        <Col numRows={3}>
                            <TableauBordWrapper></TableauBordWrapper>
                        </Col>
                        <Col numRows={3}>
                            <TableauBordWrapper></TableauBordWrapper>
                        </Col>
                    </Row> */}
                </ScrollView>
            </View >
        </ComponentSafeArea >
    )
}



const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        backgroundColor: "#cbdbd4",
        borderWidth: 3,
        borderRadius: 10,
        shadowRadius: 20
    },
})




const Col = ({ children }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{children}</View>
    )
}

const Row = ({ children }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 10 }}>{children}</View>
)

function TableauBordWrapper({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_SCALE = Dimensions.get('screen').fontScale

const styles2 = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'col',
    },
    title: {
        flex: 3,
        fontSize: 13 * SCREEN_SCALE,
        minHeight: 30,
    },
    header: {
        flex: 3,
        fontSize: 13 * SCREEN_SCALE,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dateContainer: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: "#abc"

    },
    description: {

    }
})

function TacheEnCours() {
    return (
        <View style={styles2.wrapper}>
            <Text style={styles2.header}  >Tâche En Cours</Text>
            <Text style={styles2.title}>Titre:{"livraison de colis"}</Text>
            <View style={styles2.dateContainer}>
                <FontAwesome name="calendar" size={20} color="black" />
                <Text>{"12/01/2023"}</Text>
            </View>
            <View style={styles2.dateContainer}>
                <FontAwesome5 name="clock" size={20} color="black" />
                <Text>{"12:23"}</Text>
            </View>
            <Text style={styles2.description}>Description : {"je dois aller à marjane"} </Text>
        </View>
    )
}

const styles3 = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContent: {
        flex: 2,
    },
    spaceBetwee: {
        marginTop: 3,
        marginBottom: 3,
    },
    entree: {
        flex: 2
    },
    entree: {
        flex: 2
    },
    cardTitle: {
        fontWeight: 'bold'
    }
})

function Caisse() {
    return (
        <View style={styles3.container}>
            <Text style={styles3.cardTitle}>Caisse</Text>
            <View style={styles3.cardContent}>
                <Text style={[{ textAlign: 'center' }, styles3.cardContent]}>Entré : </Text>
                <Text style={[styles3.cardContent]}>12000 FGN</Text>
                <Text style={[styles3.text, { textAlign: 'center' }, styles3.cardContent]}>Sortie : </Text>
                <Text style={styles3.text}>1200FNG</Text>
            </View>
        </View>
    )
}
const styles4 = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContent: {
        flex: 2,
    },
    spaceBetwee: {
        marginTop: 1,
        marginBottom: 1,
    },

})

function Bilan() {
    return (
        <View style={styles3.container}>
            <Text style={styles3.cardTitle}>Bilan</Text>
            <View style={styles3.cardContent}>
                <Text style={[{ textAlign: 'center' }, styles3.cardContent]}>Bénéfice : </Text>
                <Text style={[styles3.cardContent]}>12000 FGN</Text>
                <Text style={[{ textAlign: 'center' }, styles3.cardContent]}>Capital Propre : </Text>
                <Text style={styles3.text}>1200FNG</Text>
            </View>
        </View>
    )
}
const styles5 = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContent: {
        flex: 2,
    },
    spaceBetwee: {
        marginTop: 1,
        marginBottom: 1,
    },
    cardTitle: {
        fontWeight: 'bold'
    }

})

function Caveaux() {
    return (
        <View style={styles5.container}>
            <Text style={styles5.cardTitle}>Caveaux</Text>
            <View style={styles5.cardContent}>
                <Text style={[{ textAlign: 'center' }, styles5.cardContent]}>Solde : </Text>
                <Text style={[styles5.cardContent]}>12000 FGN</Text>
            </View>
        </View>
    )
}


const styles6 = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContent: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        fontWeight: 'bold'
    },
    spaceBetwee: {
        marginTop: 1,
        marginBottom: 1,
    },

})

function Notifications() {
    return (
        <View style={styles6.container}>
            <Text style={styles6.cardTitle}>Notifications</Text>
            <View style={styles6.cardContent}>
                <AntDesign name="message1" size={44} color="black" />
            </View>
        </View>
    )
}


const styles7 = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'

    },

    cardTitle: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    spaceBetwee: {
        marginTop: 1,
        marginBottom: 1,
    },

})

function Flux() {
    return (
        <View style={styles7.container}>
            <Text style={styles7.cardTitle}>Flux</Text>
            <LineChart
                data={{
                    labels: ["08h-10h", "10-14h", "14h-16h", "16h-18h", "18h-20h", "20h-22h"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={SCREEN_WIDTH - 5}
                height={180}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                    // backgroundColor: "#e26a00",
                    // backgroundGradientFrom: "#fb8c00",
                    // backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    width: '98%',
                    backgroundColor: '#ff4'
                }}
                withShadow={true}

            />

        </View>
    )
}