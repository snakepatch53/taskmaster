import { Text, View } from "react-native";

export default function Header() {
    return (
        <>
            <View
                style={{
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 30,
                    backgroundColor: "#E9EEEE",
                }}
            >
                <Text>Header</Text>
            </View>
        </>
    );
}
