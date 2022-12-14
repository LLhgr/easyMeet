import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import uuid from 'react-native-uuid';
import database from "../../config/config";

import styles from "./style";

import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc } from 'firebase/firestore'

export default function NewMeeting({ navigation }) {

    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");

    function callAPI(params) {
        fetch('https://easy-meeting.azurewebsites.net/send_email', {
            method: "POST",
            body: JSON.stringify(params),
            headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', "Accept": "*/*" }
        })
    }

    async function addMeeting() {
        if (!AllFieldsAreFilled()) {
            window.alert("Preencha todos os campos")
            return
        }
        else {

            let emailListObj = []

            let emailSplit = email.split(", ")
            let dataSplit = date.split(", ")
            let qtdParticipantes = emailSplit.length

            emailSplit.forEach(item => {
                let obj = {
                    email_user: item,
                    date: ""
                }
                emailListObj.push(obj)
            })

            addDoc(collection(database, "meetings"), {
                id: uuid.v4(),
                creator: creator,
                title: title,
                date: dataSplit,
                email: emailSplit,
                link: link,
                status: "Pendente",
                qtdParticipantes: qtdParticipantes,
                chooseDate: "--/--",
                email_date: emailListObj,
            })

            let params = {
                id: uuid.v4(),
                creator: creator,
                title: title,
                date: dataSplit,
                email: emailSplit,
                link: link,
                status: "Pendente",
                qtdParticipantes: qtdParticipantes,
                chooseDate: "--/--",
                email_date: emailListObj,
            }

            await callAPI(params)

            navigation.navigate("Reuni??es")
        }
    }

    function AllFieldsAreFilled() {
        let obj = {
            title: title,
            email: email,
            link: link,
            date: date,
        }
        for (let item in obj) {
            if (obj[item] == null || obj[item] == "" || obj[item] == undefined) {
                return false
            }
            else return true
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Criador da reuni??o</Text>
            <TextInput
                style={styles.input}
                placeholder="Vitor Lima"
                onChangeText={setCreator}
                value={creator}
            />
            <Text style={styles.label}>T??tulo</Text>
            <TextInput
                style={styles.input}
                placeholder="Reuni??o de planejamento de compras"
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
            <Text style={styles.label}>Datas dispon??veis</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 10/01, 11/01, 12/01"
                maxLength={20}
                onChangeText={setDate}
                value={date}
            />

            <TouchableOpacity style={styles.buttonSend} onPress={addMeeting}>
                <Text style={styles.buttonText}>MARCAR REUNI??O</Text>
            </TouchableOpacity>
        </View>
    )
}