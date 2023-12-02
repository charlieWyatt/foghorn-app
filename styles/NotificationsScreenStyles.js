import { StyleSheet } from 'react-native';

const NotificationsScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1DA1F2',
        padding: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    notificationText: {
        marginLeft: 10,
        flex: 1,
    },
    time: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
});

export default NotificationsScreenStyles;