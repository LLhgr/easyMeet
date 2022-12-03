import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";


import styles from "./style";

export default function Details({ navigation, route }) {

    console.log(route.params)


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Criador</Text>
            <TextInput
                style={styles.input}
                value={route.params.creator}
                editable={false} selectTextOnFocus={false}
            />
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                value={route.params.title}
                editable={false} selectTextOnFocus={false}
            />
            <Text style={styles.label}>E-mails</Text>
            <TextInput
                style={styles.input}
                value={route.params.email.join(", ")}
                editable={false} selectTextOnFocus={false}
            />
            <Text style={styles.label}>Link da reunião</Text>
            <TextInput
                style={styles.input}
                value={route.params.link}
                editable={false} selectTextOnFocus={false}
            />
            <Text style={styles.label}>Datas disponíveis</Text>
            <TextInput
                style={styles.input}
                value={route.params.date.join(", ")}
                editable={false} selectTextOnFocus={false}
            />
        </View>
    )
}