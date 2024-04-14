import React from "react";
// import {View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicial from "./componentes/TelaInicial";
import TelaCatalogo from "./componentes/TelaCatalogo";
import TelaContato from "./componentes/TelaContato";

import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';


const Abas = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Abas.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5e2129',
                },

                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold'
                }, 

                tabBarStyle: {
                    backgroundColor: '#fff'
                },

                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },

                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#ab887c',
                tabBarActiveBackgroundColor: '#5e2129'
            }}>
                <Abas.Screen
                name='Início'
                component={ TelaInicial }
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={20} color={ color } />
                    )
                }}
                />

                <Abas.Screen
                name="Catalogo"
                component={ TelaCatalogo }
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="wine-bottle" size={20} color={ color } />
                    )
                }}/>

                <Abas.Screen
                name="Contato"
                component={ TelaContato }
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="contacts" size={20} color={ color } />
                    )
                }}/>
            </Abas.Navigator>
        </NavigationContainer>
    )
}