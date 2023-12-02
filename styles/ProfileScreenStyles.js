import { StyleSheet } from 'react-native';

const ProfileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileDetails: {
        flex: 1,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileHandle: {
        color: 'gray',
    },
    profileBio: {
        marginTop: 10,
    },
    tweetList: {
        flex: 1,
        width: '100%',
    },
});

export default ProfileScreenStyles;