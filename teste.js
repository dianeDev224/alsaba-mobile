import { View } from 'react-native';

export default function Test() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>hello</Text> */}
            <View
                style={{
                    width: 0,
                    height: 0,
                    borderLeftWidth: 30,
                    borderLeftColor: "#FFFFFF00",
                    borderTopWidth: 15,
                    borderTopColor: "#ff5",
                    borderBottomWidth: 15,
                    borderBottomColor: "#ff5"
                }}

            />
            <View
                style={{
                    width: 100,
                    height: 30,
                    backgroundColor: "#ff5"
                }}

            />
            <View
                style={{
                    width: 0,
                    height: 0,
                    borderLeftWidth: 30,
                    borderLeftColor: "#ff5",
                    borderTopWidth: 15,
                    borderTopColor: "#FFFFFF00",
                    borderBottomWidth: 15,
                    borderBottomColor: "#FFFFFF00"
                }}

            />
        </View>
    )
}

