import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_primaryName: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    logo_secondName: {
        color: '#B7FF60',
        fontSize: 25,
        fontWeight: 'bold'
    },
    meetings: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        marginTop: 25,
    },
    infoContent: {
        width: "75%",
        alignContent: 'flex-start',
        backgroundColor: "#1B1B1B",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginBottom: 5,
    },
    descriptionTitle: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10,
    },
    descriptionDate: {
        fontSize: 12,
        color: "#C1C1C1",
        fontWeight: "bold",
        marginBottom: 5,
    },
    descriptionEmail: {
        fontSize: 12,
        color: "#C1C1C1",
        fontWeight: "500",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        marginBottom: 5,
    },
    descriptionStatus: {
        fontSize: 12,
        color: "#C1C1C1",
        fontWeight: "500",
    },
    icon: {
        marginRight: 5,
    },
    iconAction: {
        marginBottom: 20,
    },
    buttonNewMeeting: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#B7FF60",
        borderRadius: 50,
        alignItems: "center",
    },
    iconButton: {
        color: "#171717",
        fontSize: 40,
        fontWeight: "bold"
    },

});

export default styles