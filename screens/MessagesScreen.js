import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { MessagesScreenStyles as styles } from '../styles/MessagesScreenStyles';
import { fetchMessages } from '../api/UserAPI';

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then(setMessages);
  }, []);

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MessagesScreen;