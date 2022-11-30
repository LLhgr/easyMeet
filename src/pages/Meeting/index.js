
import React, {useEffect, useState} from "react";
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, Button, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./style";

import { getFirestore, collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'
import database from "../../config/config";

import { FontAwesome } from "@expo/vector-icons";


export default function Meeting({ navigation }) {
    const [meeting, setMeeting] = useState([]);
    const [loading, setLoading] = useState(false);

    function deleteMeeting(id) {
        const docRef = doc(database, "meetings", id);
        console.log(docRef)

        getDoc(docRef).then((snap) => {
            if (!snap.exists()) {
                console.log("not found")
            } else {
                deleteDoc(docRef).then(console.log("Deletado"))
            }
        })
    }

    async function getDados() {
        setLoading(true)
        setMeeting([]);
        const collecRef = collection(database, 'meetings');
        let lista = [];
        await getDocs(collecRef).then((snapshot) => {
            for (let i = 0; i < snapshot.docs.length; i++) {
                let obj = {
                    id: snapshot.docs[i].id,
                    title: snapshot.docs[i].data().title,
                    date: snapshot.docs[i].data().date,
                    link: snapshot.docs[i].data().link,
                    email: snapshot.docs[i].data().email,
                    status: snapshot.docs[i].data().status,
                }
                lista.push(obj)
            }
            console.log("lista:::", lista)
            setMeeting(lista)
            setLoading(false)
        })
    }

    useEffect(() => {
        getDados()
    },[])

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>

                <View style={styles.logo}>
                    <Text style={styles.logo_primaryName}>Easy</Text>
                    <Text style={styles.logo_secondName}>Meet</Text>
                </View>
                    
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={meeting}
                    renderItem={(item) => {
                        return (
                            <View style={styles.meetings}>
                                <TouchableOpacity style={styles.infoContent} onPress={() => navigation.navigate("Detalhes", {
                                    id: item.item.id,
                                    title: item.item.title,
                                    date: item.item.date,
                                    link: item.item.link,
                                    email: item.item.email,
                                })}>
                                    <Text
                                        style={styles.descriptionTitle}
                                    >
                                        {item.item.title}
                                    </Text>
                                    <Text
                                        style={styles.descriptionDate}
                                    >
                                        <FontAwesome
                                            name="calendar"
                                            size={12}
                                            color="#fff"
                                            style={styles.icon}
                                        ></FontAwesome>
                                        {item.item.date}
                                    </Text>
                                    <Text
                                        style={styles.descriptionEmail}
                                    >
                                        <FontAwesome
                                            name="envelope"
                                            size={12}
                                            color="#fff"
                                            style={styles.icon}
                                        ></FontAwesome>
                                        {item.item.email}
                                    </Text>
                                    <Text
                                        style={styles.descriptionStatus}
                                    >
                                        <FontAwesome
                                            name="circle"
                                            size={12}
                                            color={item.item.status == "Pendente" ? "orange" : "#B7FF60"}
                                            style={styles.icon}
                                        ></FontAwesome>
                                        {item.item.status}
                                    </Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {

                                            deleteMeeting(item.item.id)
                                        }}
                                    >
                                        <FontAwesome
                                            name="trash"
                                            size={20}
                                            color="#FF6060"
                                        ></FontAwesome>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
                <TouchableOpacity
                    style={styles.buttonNewMeeting}
                    onPress={() => navigation.navigate("Nova reunião")}
                >
                    <Text style={styles.iconButton}>+</Text>
                </TouchableOpacity>          
            </View>
        )
    }
}