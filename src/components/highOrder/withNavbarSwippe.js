import { styled } from 'nativewind';
import { View } from 'react-native';

const StyledView = styled(View)


export default function WithNavbarSwippe({ ScreenSwippe, appendStyle }) {

    return (
        <>
            <View style={[{ flexDirection: 'row', justifyContent: 'center', position: 'absolute' }, appendStyle.parent]}>
                <View style={[
                    {
                        // position: 'absolute',
                        zIndex: 10000,
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderLeftWidth: 10,
                        borderRightWidth: 10,
                        borderTopWidth: 10,
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent'
                    },
                    appendStyle.child
                ]} />
            </View>
            {
                ScreenSwippe
            }
        </>
    )
}



