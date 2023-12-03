import React from 'react';
import { FlatList } from 'react-native';
import Tweet from './Tweet';

interface TweetListProps {
  tweets: Array<{
    id: string;
    content: string;
    user: {
      id: string;
      username: string;
    };
  }>;
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TweetList;