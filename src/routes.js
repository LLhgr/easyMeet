// LIBS AND UTILS
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

//PAGES
import Meeting from "./pages/Meeting";
import Details from "./pages/Details";
import NewMeeting from "./pages/NewMeeting";

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="Reuniões">
            <Stack.Screen
                name="Reuniões"
                component={Meeting}
                options={{
                    headerShown: false,
                    headerTintColor: "#B7FF60",
                    headerStyle: {
                        backgroundColor: '#090909',
                    },

                }}
            />
            <Stack.Screen
                name="Nova reunião"
                component={NewMeeting}
                options={{
                    headerShown: true,
                    headerTintColor: "#B7FF60",
                    headerStyle: {
                        backgroundColor: '#090909',
                    },

                }}
            />
            <Stack.Screen
                name="Detalhes"
                component={Details}
                options={{
                    headerShown: true,
                    headerTintColor: "#B7FF60",
                    headerStyle: {
                        backgroundColor: '#090909',
                    },

                }}
            />
        </Stack.Navigator>
    );
}