import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import DetailSolde from '../common/soldeDetail';
import ComponentSafeArea from '../common/wrappers/componenteSafeArea';

export default function WithScreenSwippe({ Navbar = () => { }, screenData = () => { }, TitleBar = () => { }, flatListRef, soldeTitle = "solde" }) {

    return (
        <ComponentSafeArea>
            <View style={{ flexDirection: 'column', position: 'relative' }} >
                {TitleBar}
                <DetailSolde title={soldeTitle} />
                {Navbar}
                <Animated.FlatList
                    ref={flatListRef}
                    data={screenData}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }) => <item.screen />}
                    keyExtractor={item => item.id}
                />
            </View>
        </ComponentSafeArea>
    )
}
