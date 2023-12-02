import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Tweet from './Tweet';
import TweetsAPI from '../api/TweetsAPI';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const data = await TweetsAPI.getTweets();
    setTweets(data);
  };

  const renderTweet = ({ item }) => <Tweet tweet={item} />;

  return (
    <FlatList
      data={tweets}
      renderItem={renderTweet}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Feed;