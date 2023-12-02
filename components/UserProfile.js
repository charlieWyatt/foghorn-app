import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/UserProfileStyles';

const UserProfile = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userHandle}>@{user.handle}</Text>
                <Text style={styles.userBio}>{user.bio}</Text>
            </View>
        </View>
    );
};

export default UserProfile;