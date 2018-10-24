import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileOverview = props => (
    <View style={styles.profileContainer}>
        <Image 
        source={{uri: props.user.photo }}
        style={styles.profileImage}/>
        <Text style={styles.profileName}> { props.user.name } </Text>
        <Text style={styles.profileEmail}> { props.user.email } </Text>
    </View>
);

const styles = StyleSheet.create({
    profileContainer: {
      backgroundColor: '#4a148c',
      alignItems: 'center'
    },
    profileTitle: {
      color: '#fff',
      fontSize: 30
    },
    profileName: {
      color: '#fff',
      fontSize: 24,
      marginTop: 10,
    },
    profileImage: {
      width: 140,
      height: 140,
      resizeMode: 'cover',
      borderRadius: 70,
      marginTop: 10
    },
    profileEmail: {
      color: '#fff',
      marginBottom: 10
    },
});
  
export default ProfileOverview;