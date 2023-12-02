import { StyleSheet } from 'react-native';

const UserProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 16,
        color: '#777',
    },
    bio: {
        fontSize: 16,
        lineHeight: 20,
        color: '#333',
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 16,
        color: '#777',
    },
});

export default UserProfileStyles;