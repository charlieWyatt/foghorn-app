import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginBottom: 10,
  },
  tweetInput: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  tweetButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  tweetButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  feed: {
    width: '100%',
  },
});

export default HomeScreenStyles;