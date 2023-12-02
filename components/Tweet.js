import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/TweetStyles';

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.profile_image_url }} style={styles.profileImage} />
      <View style={styles.tweetContent}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.handle}>@{tweet.user.screen_name}</Text>
        <Text style={styles.tweetText}>{tweet.text}</Text>
      </View>
    </View>
  );
};

export default Tweet;