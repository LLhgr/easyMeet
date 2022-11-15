import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090909",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#fff"
    },
    input: {
        backgroundColor: "#171717",
        width: "80%",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
        marginBottom: 40,
    },
    buttonSend: {
        backgroundColor: "#B7FF60",
        padding: 20,
        borderRadius: 30,
    },
    buttonText: {
        color: "#171717",
        fontWeight: "bold"
    },
});

export default styles