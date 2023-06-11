import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import TaskItem from "../components/TaskItem";

export default function TaskData({ tasks, openForm, changeTaskState, openDelete }) {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list_container}
                data={tasks}
                renderItem={({ item }) => <TaskItem key={item.id} item={item} openForm={openForm} changeTaskState={changeTaskState} openDelete={openDelete} />}
            />
            <TouchableOpacity style={styles.float_button} onPress={openForm}>
                <Icon style={styles.float_button_icon} name="plus" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    list_container: {
        flex: 1,
        padding: 10,
    },
    float_button: {
        position: "absolute",
        bottom: 20,
        right: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        backgroundColor: "#7298cc",
        borderRadius: 50,
        padding: 10,
    },
    float_button_icon: {
        color: "#fff",
        fontSize: 20,
    },
});
