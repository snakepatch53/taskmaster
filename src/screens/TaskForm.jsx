import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTaskForm } from "../hooks/useTaskForm";

export default function TaskForm({ ...props }) {
    const { name, setName, description, setDescription, message, handleSubmit, cancelOperation, descriptionRef } = useTaskForm({ ...props });
    return (
        <ScrollView>
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.keyboard_container}>
                    <Text style={styles.title}>TaskForm</Text>
                    <Text style={styles.input_label}>Name:</Text>
                    <TextInput
                        returnKeyType="next"
                        onSubmitEditing={() => descriptionRef.current.focus()}
                        style={styles.input}
                        placeholder="Do werever task.."
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={styles.input_label}>Description: </Text>
                    <TextInput
                        ref={descriptionRef}
                        style={[styles.input, styles.input_textarea]}
                        placeholder="Do werever task with whoever.."
                        multiline={true}
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.button_text}>Save</Text>
                        <Icon style={styles.button_icon} name="save" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.button_cancel]} onPress={cancelOperation}>
                        <Text style={styles.button_text}>Cancel</Text>
                        <Icon style={styles.button_icon} name="times" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    keyboard_container: {
        flex: 1,
        justifyContent: "center",
        gap: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input_label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    input_textarea: {
        height: 100,
        textAlignVertical: "top",
    },
    message: {
        fontSize: 16,
        color: "#ff0000",
        letterSpacing: 0.5,
        textAlign: "center",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#7298cc",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    button_cancel: {
        marginTop: 0,
        backgroundColor: "#d32f2f",
    },
    button_text: {
        color: "#fff",
        fontSize: 16,
    },
    button_icon: {
        fontSize: 16,
        color: "#fff",
        marginLeft: 10,
    },
});
