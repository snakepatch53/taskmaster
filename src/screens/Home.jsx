import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { SessionContext } from "../context/session";

export default function Home() {
    const { session } = useContext(SessionContext);
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
                    textAlign: "center",
                }}
            >
                Hola {session.name}, bienvenido.
            </Text>
            <Image
                source={require("../../assets/waving.png")}
                style={{
                    height: 600,
                    objectFit: "contain",
                }}
            />
        </View>
    );
}
