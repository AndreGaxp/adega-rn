import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import Capa from "../../assets/capa.png";

import estilos from "./estilos";

export default function TelaInicial() {
  return (
    <ImageBackground blurRadius={10} style={estilos.container} source={Capa}>
      <View style={estilos.fundo}>
        <Text style={estilos.titulo}>Adega Preferida</Text>
        <Text style={estilos.subtitulo}>
          Aqui você encontra os melhores vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}
