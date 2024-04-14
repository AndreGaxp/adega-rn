import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import estilos from "./estilos";

export default function TelaContato() {
  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.containerScroll}>
        <Text  style={estilos.titulo}>Entre em contato conosco para comprar nossos produtos</Text>

        <View style={estilos.card}>
          <Entypo name="phone" size={50} color="#5e2129" />
          <Text style={estilos.cardTitulo}>Telefone:</Text>
          <Text style={estilos.cardDescricao}>+55 21 000000000</Text>
        </View>

        <View style={estilos.card}>
          <Entypo name="location-pin" size={50} color="black" />
          <Text style={estilos.cardTitulo}>Endereço:</Text>
          <Text style={estilos.cardDescricao}>Rua 14 - Quadra 56 - Lote 26</Text>
        </View>

        <View style={estilos.card}>
          <Entypo name="instagram" size={50} color="black" />
          <Text style={estilos.cardTitulo}>Instagram:</Text>
          <Text style={estilos.cardDescricao}>@adegapreferida</Text>
        </View>

        <View style={estilos.card}>
          <Entypo name="mail" size={50} color="black" />
          <Text style={estilos.cardTitulo}>Email:</Text>
          <Text style={estilos.cardDescricao}>adegapreferida@gmail.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}
