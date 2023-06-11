import { StyleSheet, Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Navbar() {
    const location = useLocation();
    const active = location.pathname;
    return (
        <View style={styles.container}>
            <Link to="/home" style={styles.item} underlayColor="transparent">
                <View style={styles.item_container}>
                    <Icon style={[styles.item_icon, active.includes("/home") ? styles.item_active : styles.item_normal]} name="home" />
                    <Text style={[styles.item_text, active.includes("/home") ? styles.item_active : styles.item_normal]}>Home</Text>
                </View>
            </Link>
            <Link to="/tasks" style={styles.item} underlayColor="transparent">
                <View style={styles.item_container}>
                    <Icon style={[styles.item_icon, active.includes("tasks") ? styles.item_active : styles.item_normal]} name="tasks" />
                    <Text style={[styles.item_text, active.includes("tasks") ? styles.item_active : styles.item_normal]}>Tasks</Text>
                </View>
            </Link>
            <Link to="/profile" style={styles.item} underlayColor="transparent">
                <View style={styles.item_container}>
                    <Icon style={[styles.item_icon, active.includes("profile") ? styles.item_active : styles.item_normal]} name="user" />
                    <Text style={[styles.item_text, active.includes("profile") ? styles.item_active : styles.item_normal]}>Profile</Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        marginTop: "auto",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopColor: "#ccc",
        borderTopWidth: 0.2,
        backgroundColor: "#f6f6f6",
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    item: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        underlayColor: "#FFFFFF",
    },
    item_container: {
        alignItems: "center",
        justifyContent: "center",
    },
    item_icon: {
        fontSize: 25,
    },
    item_text: {
        fontSize: 10,
    },
    item_active: {
        color: "#0068bf",
    },
    item_normal: {
        color: "#6595ee",
    },
});
