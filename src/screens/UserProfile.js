import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../src/images/backicon.png')}
          style={styles.backimg}
        />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        {/* User Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.userName}>Aryan</Text>
            <Text style={styles.userEmail}>arianzesan@gmail.com</Text>
            <TouchableOpacity>
              <Text style={styles.viewActivity}>View activity</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../src/images/profile-user.png')} // Replace with actual profile pic
            //   source={{ uri: 'https://images.pexels.com/photos/16938169/pexels-photo-16938169/free-photo-of-blonde-woman-with-tablet.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
            style={styles.profileImage}
          />
        </View>

        {/* Nutrition Orders */}
        <Text style={styles.sectionLabel}>NUTRITION ORDERS</Text>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="receipt-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Your Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="help-circle-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Nutrition Help</Text>
        </TouchableOpacity>

        {/* Table Bookings */}
        <Text style={styles.sectionLabel}>TABLE BOOKINGS</Text>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="calendar-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Your Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="information-circle-outline" size={20} color="#555" />
          <Text style={styles.rowText}>Table Reservation Help</Text>
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity style={styles.row}>
          <Ionicons name="information-outline" size={20} color="#555" />
          <Text style={styles.rowText}>About</Text>
        </TouchableOpacity>

        {/* Footer Options */}
        <TouchableOpacity>
          <Text style={styles.footerOption}>Send Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.footerOption}>Report a Safety Emergency</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.footerOption}>Rate us on the App Store</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.versionText}>zomato V1.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 35,
    left: -10,
    zIndex: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 8,
  },
  backimg: {
    width: 22,
    height: 22,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  innerContainer: {
    marginTop: '25%',
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileTextContainer: {
    marginLeft: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  viewActivity: {
    fontSize: 14,
    color: '#e23744',
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 10,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
  },
  rowText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  footerOption: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#e23744',
    marginTop: 20,
  },
  versionText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default UserProfile;
