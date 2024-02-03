import { styled } from 'nativewind';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import TopNavbar from '../../components/common/topAppNavbar';
import ComponentSafeArea
    from '../../components/common/wrappers/componenteSafeArea';
import { UseNavigation } from '../../hooks/useNavigation';
import ListeContacts from './listeDesContact';
import NouveauContact from './nouveauContact';
import { Styles } from './styles';

const StyledView = styled(View)

const contactRoutes = {
    NOUVEAU_CONTACT: "nouveau contact",
    LISTE_CONTACT: "liste contact",
}

export default function MainContact(props) {

    const { currentRoute, navigateTo } = UseNavigation(contactRoutes.LISTE_CONTACT);

    return (
        <ComponentSafeArea>
            <View style={Styles.container} >
                <TopNavbar title={"Gestion De Mes Contacts"} rest={{ ...props }} classNamer={"bg-[#abc]"} />
                <View
                    style={Styles.navigationBar}
                >
                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#b5ae24' }]}
                        onPress={() => navigateTo(contactRoutes.LISTE_CONTACT)}
                    >
                        <Text style={Styles.textStyle}>Liste De Mes Contacts</Text>
                        {currentRoute == contactRoutes.LISTE_CONTACT && <View style={[Styles.navigationBarCurrentItem, { borderTopColor: '#b5ae24' }]} />}
                    </Pressable>

                    <Pressable
                        style={[Styles.navigationBarItem, { backgroundColor: '#8ad389' }]}
                        onPress={() => navigateTo(contactRoutes.NOUVEAU_CONTACT)}

                    >
                        <Text style={Styles.textStyle}>Nouveau Contact</Text>
                        {currentRoute == contactRoutes.NOUVEAU_CONTACT && <View style={[Styles.navigationBarCurrentItem, { borderTopColor: '#8ad389' }]} />}
                    </Pressable>
                </View>
                <SwitcherNav currentRoute={currentRoute} navigateTo={navigateTo} />
            </View>
        </ComponentSafeArea>
    )
}

function SwitcherNav({ currentRoute, navigateTo }) {

    switch (currentRoute) {
        case contactRoutes.LISTE_CONTACT:
            return <ListeContacts navigateTo={navigateTo} />;
        case contactRoutes.NOUVEAU_CONTACT:
            return <NouveauContact navigateTo={navigateTo} />;
        default:
            return alert("erreur de route");
    }
}