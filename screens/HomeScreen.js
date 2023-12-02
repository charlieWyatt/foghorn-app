import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchTweets } from '../api/TweetsAPI';
import Tweet from '../components/Tweet';
import HomeScreenStyles from '../styles/HomeScreenStyles';

const HomeScreen = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets().then(setTweets);
  }, []);

  const renderTweet = ({ item }) => <Tweet tweet={item} />;

  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Home</Text>
      <FlatList
        data={tweets}
        renderItem={renderTweet}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;