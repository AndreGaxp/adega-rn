import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },

  fundo: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 330,
    height: 115,
    justifyContent: "center",
    borderRadius: 10
  },
});

export default estilos;
