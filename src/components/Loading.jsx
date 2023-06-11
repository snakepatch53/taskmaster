import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useLoading } from "../hooks/useLoading";

export default function Loading() {
    const { AnimatedView, animatedStyles } = useLoading();
    return (
        <View style={styles.container}>
            <AnimatedView style={animatedStyles}>
                <Icon style={styles.icon} name="spinner" />
            </AnimatedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: "#fff",
    },
    icon: {
        color: "#0378c0",
        fontSize: 25,
    },
    text: {
        color: "#0378c0",
        fontSize: 15,
    },
});
