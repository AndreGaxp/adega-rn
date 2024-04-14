import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#fff'
    },

    containerScroll: {
        padding: 20,    
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    card:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop: 20,
        padding: 20,
    }, 

    cardTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5e2129',
        marginTop: 10,
        marginBottom: 5,
    },

    cardDescricao: {
        fontSize: 16,
        color: '#5e2129',
        marginBottom: 10,
    }
})

export default estilos;