import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TweetInput = ({ onTweetSubmit }) => {
  const [tweet, setTweet] = useState('');

  const handleTweetSubmit = () => {
    if (tweet) {
      onTweetSubmit(tweet);
      setTweet('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What's happening?"
        value={tweet}
        onChangeText={setTweet}
        multiline
      />
      <Button title="Tweet" onPress={handleTweetSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
});

export default TweetInput;