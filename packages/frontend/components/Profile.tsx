import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileProps {
  username: string;
  bio: string;
  tweetsCount: number;
  followingCount: number;
  followersCount: number;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, tweetsCount, followingCount, followersCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.stats}>
        <Text>Tweets: {tweetsCount}</Text>
        <Text>Following: {followingCount}</Text>
        <Text>Followers: {followersCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Profile;