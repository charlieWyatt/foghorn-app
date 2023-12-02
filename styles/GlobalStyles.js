import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#1DA1F2',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
    },
});

export default GlobalStyles;