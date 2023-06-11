import { useContext, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SessionContext } from "../context/session";
import { updateUser } from "../api/user";

export default function Profile() {
    const { session } = useContext(SessionContext);
    const [name, setName] = useState(session.name);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});

    const handleSave = () => {
        if (name === "") {
            setError(styles.error);
            setMessage("El nombre es requerido!");
            return;
        }
        setLoading(true);
        setMessage("");
        setError({});
        updateUser(session.id, { name }).then((response) => {
            session.name = name;
            setMessage("Usuario actualizado!");
            setError({});
            setTimeout(() => {
                setMessage("");
            }, 2000);
        });
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.input_label}>Name:</Text>
                <TextInput style={styles.input} placeholder="Pedro Virginio.." value={name} onChangeText={setName} />
                <Text style={[styles.message, error]}>{message}</Text>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.button_text}>Save</Text>
                    <Icon style={styles.button_icon} name="save" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 50,
        textAlign: "center",
    },
    input_label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        // info color
        color: "#2ca5f5",
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7298cc",
        padding: 15,
        borderRadius: 5,
    },
    button_text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        marginRight: 10,
    },
    button_icon: {
        fontSize: 16,
        color: "#ffffff",
    },
    error: {
        color: "#ff0000",
    },
});
