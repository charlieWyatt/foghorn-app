import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UserProfile from '../components/UserProfile';
import { fetchUserDetails } from '../api/UserAPI';
import { ProfileScreenStyles as styles } from '../styles/ProfileScreenStyles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    const user = await fetchUserDetails();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <UserProfile user={user} />
      </View>
    );
  }
}

export default ProfileScreen;