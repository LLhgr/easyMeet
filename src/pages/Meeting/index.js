
import React from "react";
import { useEffect } from "react"
import { useState } from "react"
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, Button } from "react-native";

import styles from "./style";

import { getFirestore, collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'
import database from "../../config/config";

import { FontAwesome } from "@expo/vector-icons";


export default function Meeting({ navigation }) {
    const [meeting, setMeeting] = useState([])

    function deleteMeeting(id) {
        console.log("ID", id)
        const docRef = doc(database, "Meetings", id);

        getDoc(docRef).then((snap) => {
            console.log(snap)
        })
    }

    async function getDados() {
        const collecRef = collection(database, 'meetings');
        let lista = [];
        await getDocs(collecRef).then((snapshot) => {
            for (let i = 0; i < snapshot.docs.length; i++) {
                let obj = {
                    title: snapshot.docs[i].data().title,
                    date: snapshot.docs[i].data().date,
                    link: snapshot.docs[i].data().link,
                    email: snapshot.docs[i].data().email,
                    id: snapshot.docs[i].id,
                }
                lista.push(obj)
            }
            console.log("lista:::", lista)
            setMeeting(lista)
        })
    }

    useEffect(() => {
        getDados()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={meeting}
                renderItem={(item) => {
                    return (
                        <View style={styles.meetings}>
                            <TouchableOpacity
                                style={styles.deleteMeeting}
                                onPress={() => {
                                    deleteMeeting(item.item.id)
                                }}
                            >
                                <FontAwesome
                                    name="info"
                                    size={20}
                                    color="#F92E6A"
                                ></FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionMeeting}
                                onPress={() => navigation.navigate("Details", {
                                    id: item.item.id,
                                    title: item.item.title,
                                    date: item.item.date,
                                    link: item.item.link,
                                    email: item.item.email,
                                })}
                            >
                                {item.item.title}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewMeeting}
                onPress={() => navigation.navigate("New Meeting")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}