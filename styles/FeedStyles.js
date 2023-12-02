import { StyleSheet } from 'react-native';

const FeedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweetContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
  },
  tweetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetBody: {
    marginTop: 10,
    fontSize: 14,
  },
  tweetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  tweetImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tweetUsername: {
    fontWeight: 'bold',
  },
  tweetTimestamp: {
    color: '#657786',
  },
});

export default FeedStyles;