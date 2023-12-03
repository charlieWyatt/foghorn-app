import React from 'react';
import { View, Text } from 'react-native';
import TweetList from '../components/TweetList';

const HomeScreen = () => {
  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <TweetList />
    </View>
  );
};

export default HomeScreen;