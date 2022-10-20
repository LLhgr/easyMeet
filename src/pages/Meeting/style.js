import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,

    },
    meetings: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteMeeting: {
        justifyContent: "center",
        paddingLeft: 15,

    },
    descriptionMeeting: {
        width: "75%",
        alignContent: 'flex-start',
        backgroundColor: "#c7c7c7",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#fff",
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