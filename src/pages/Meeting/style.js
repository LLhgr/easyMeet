import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 20,
    },
    meetings: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    infoContent: {
        width: "75%",
        alignContent: 'flex-start',
        backgroundColor: "#f0f0f0",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginBottom: 5,
        marginLeft: 15,
    },
    descriptionTitle: {
        fontSize: 15,
        color: "#303030",
        fontWeight: "bold",
        marginBottom: 10,
    },
    descriptionDate: {
        fontSize: 12,
        color: "#303030",
        fontWeight: "bold",
        marginBottom: 5,
    },
    descriptionEmail: {
        fontSize: 12,
        color: "#303030",
        fontWeight: "500",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    icon: {
        marginRight: 5,
    },
    deleteMeeting: {
        justifyContent: "center",
        paddingRight: 25,
    },
    buttonNewMeeting: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#F92E6A",
        borderRadius: 50,
        alignItems: "center",
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold"
    },

});

export default styles