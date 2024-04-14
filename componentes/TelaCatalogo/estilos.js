import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left'
  },

  containerScroll: {
    padding: 15,
  },

  cardVinho: {
    flexDirection: "row",
    backgroundColor: "#ab887c",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  cardImage: {
    width: 38,
    height: 150,
  },

  cardBoxDescricao: {
    flex: 1,
    marginLeft: 10,
  },

  cardTitulo:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 25,
  },

  cardDescricao:{
    color: '#fff',
    fontSize: 14,
    
  }
});

export default estilos;
