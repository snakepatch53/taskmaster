import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ConfirmModal({ title, message, pressCancel, pressYes }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={pressYes}>
                <Text style={styles.button_text}>Delete</Text>
                <Icon style={styles.button_icon} name="trash" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.button_cancel]} onPress={pressCancel}>
                <Text style={styles.button_text}>Cancel</Text>
                <Icon style={styles.button_icon} name="times" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    desc: {
        fontSize: 20,
        textAlign: "center",
        color: "#9aa0a6",
        marginBottom: 30,
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7298cc",
        width: "100%",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    button_cancel: {
        backgroundColor: "#ff0000",
    },
    button_text: {
        color: "#fff",
        fontSize: 16,
        marginRight: 10,
    },
    button_icon: {
        color: "#fff",
        fontSize: 16,
    },
});
