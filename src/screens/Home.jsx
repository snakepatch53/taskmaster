import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SessionContext } from "../context/session";

export default function Home() {
    const { logout, session } = useContext(SessionContext);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                padding: 30,
                backgroundColor: "#E9EEEE",
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginBottom: 30,
                }}
            >
                Home. Hola {session.name}, bienvenido.
            </Text>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
