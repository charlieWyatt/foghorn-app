import { StyleSheet } from 'react-native';

const MessagesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBox: {
    width: '90%',
    padding: 10,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  senderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  senderName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MessagesScreenStyles;