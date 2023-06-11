import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SessionContext } from "../context/session";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header() {
    const { logout, session } = useContext(SessionContext);
    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#7298cc",
                    paddingHorizontal: 20,
                    paddingTop: 40,
                    paddingBottom: 20,
                    zIndex: 1,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        fontSize: 17,
                        color: "#fff",
                    }}
                >
                    {session.name}
                </Text>
                <TouchableOpacity onPress={logout}>
                    <Icon
                        style={{
                            fontSize: 20,
                            color: "#fff",
                        }}
                        name="sign-out-alt"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
