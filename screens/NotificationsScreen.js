import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NotificationsScreenStyles as styles } from '../styles/NotificationsScreenStyles';
import { fetchNotifications } from '../api/UserAPI';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NotificationsScreen;