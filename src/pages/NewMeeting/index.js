import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/config";

import styles from "./style";

import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc } from 'firebase/firestore'

import DatePicker from 'react-native-datepicker';

export default function NewMeeting({ navigation }) {

    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");

    function addMeeting() {

        addDoc(collection(database, "meetings"), {
            title: title,
            date: date,
            email: email,
            link: link,
        })
        navigation.navigate("Meeting")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Reunião de planejamento de compras"
                onChangeText={setTitle}
                value={title}
            />
            <Text style={styles.label}>E-mails</Text>
            <TextInput
                style={styles.input}
                placeholder="luiz@gmail.com, vitor@hotmail.com, ..."
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.label}>Link</Text>
            <TextInput
                style={styles.input}
                placeholder="www.zoom/meeting.com"
                onChangeText={setLink}
                value={link}
            />
            <Text style={styles.label}>Datas disponíveis</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 10/01, 11/01, 12/01"
                onChangeText={setDate}
                value={date}
            />

            <TouchableOpacity style={styles.buttonSend} onPress={addMeeting}>
                <Text style={styles.buttonText}>MARCAR REUNIÃO</Text>
            </TouchableOpacity>
        </View>
    )
}