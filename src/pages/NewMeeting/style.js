import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: 15
    },
    input: {
        backgroundColor: "none",
        width: "80%",
        padding: 10,
        borderRadius: 10,
        color: "#c7c7c7",
        marginBottom: 40,
        borderColor: "#c7c7c7",
        borderWidth: 2,
    },
    buttonSend: {
        backgroundColor: "#F92E6A",
        padding: 20,
        borderRadius: 30,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },
});

export default styles