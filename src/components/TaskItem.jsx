import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TaskItem({ item, openForm, changeTaskState, openDelete }) {
    return (
        <View style={styles.item_container}>
            <TouchableOpacity style={styles.item_edit_container} onPress={() => openForm(item.id)}>
                <Icon style={[styles.item_edit_icon, { color: item.isDone ? "#228b41" : "#ffcc00" }]} name={item.isDone ? "check-circle" : "circle"} />
                <View style={{ flex: 1 }}>
                    <Text>{item.name}</Text>
                    <Text style={{ color: "#ccc" }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.item_buttons_container}>
                <TouchableOpacity style={styles.item_button_container} onPress={() => changeTaskState(item.id)}>
                    <Icon
                        style={[styles.item_button_icon, item.isDone ? styles.item_button_icon_done : styles.item_button_icon_undone]}
                        name={item.isDone ? "undo" : "check"}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_button_container} onPress={() => openDelete(item.id)}>
                    <Icon style={[styles.item_button_icon, styles.item_button_icon_trash]} name="trash" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item_container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    item_edit_container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 20,
    },
    item_edit_icon: {
        fontSize: 35,
    },
    item_buttons_container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    item_button_container: {
        padding: 10,
    },
    item_button_icon: {
        fontSize: 25,
    },
    item_button_icon_done: {
        color: "#ffcc00",
    },
    item_button_icon_undone: {
        color: "#228b41",
    },
    item_button_icon_trash: {
        color: "#ff0000",
    },
});
