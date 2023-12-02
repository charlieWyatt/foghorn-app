import { StyleSheet } from 'react-native';

const NavigationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    paddingTop: 15,
    backgroundColor: '#1DA1F2',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  tabBar: {
    backgroundColor: '#1DA1F2',
    borderTopColor: '#fff',
  },
  tabBarIcon: {
    width: 26,
    height: 26,
  },
});

export default NavigationStyles;