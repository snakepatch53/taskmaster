import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
    const { inputPass, message, email, password, setEmail, setPassword, handleSubmit, loading } = useLogin();

    return (
        <KeyboardAvoidingView style={styles.keyboardAdapterContainer}>
            <View style={styles.container}>
                <Image style={styles.imageLogo} source={require("../../assets/app_icon.png")} />
                <Text style={styles.title}>TaskMaster</Text>
                <Text style={styles.labelInput}>Email:</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email.."
                    returnKeyType="next"
                    onSubmitEditing={() => inputPass.current.focus()}
                    onChangeText={setEmail}
                    value={email}
                />
                <Text style={styles.labelInput}>Contraseña:</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    ref={inputPass}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                    onChangeText={setPassword}
                    value={password}
                />
                <Text style={styles.labelMessage}>{message}</Text>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={[styles.inputSubmit, loading ? { backgroundColor: "#999" } : { backgroundColor: "#000" }]}
                    disabled={loading}
                >
                    <Text style={styles.inputSubmitText}>{loading ? "Cargando.." : "Ingresar"}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardAdapterContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        height: "100%",
    },
    imageLogo: {
        height: 200,
        aspectRatio: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },
    labelInput: {
        width: "100%",
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        color: "#000",
    },
    inputText: {
        width: "100%",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#000",
    },
    labelMessage: {
        width: "100%",
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        color: "red",
        textAlign: "center",
    },
    inputSubmit: {
        width: "100%",
        marginTop: 30,
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 5,
    },
    inputSubmitText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
    },
});
