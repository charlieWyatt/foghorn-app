import React from 'react';
import { View, Text } from 'react-native';
import TweetList from '../components/TweetList';

const TweetScreen = () => {
  return (
    <View>
      <Text>Tweets</Text>
      <TweetList />
    </View>
  );
};

export default TweetScreen;