import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

const EventDetailScreen = ({route, navigation}) => {
  const {event} = route.params;

  const generatePDF = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to save the ticket.',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission denied',
          'Cannot save PDF without storage permission.',
        );
        return;
      }
    }

    const htmlContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 0;
          margin: 0;
        }
        .ticket {
          width: 100%;
          padding: 0;
          margin: 0;
        }
        .header {
          background-color: #000;
          padding: 10px 0;
          text-align: center;
        }
        .logo {
          width: 120px;
          height: auto;
        }
        .content {
          padding: 20px;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          color: #444;
          margin: 8px 0;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          color: #2e7d32;
        }
      </style>
    </head>
    <body>
      <div class="ticket">
        <div class="header">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..." class="logo" />
        </div>
        <div class="content">
          <h1>${event.title}</h1>
          <p><strong>Location:</strong> ${event.location}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Price:</strong> ₹${event.price}</p>
          <div class="footer">🎟 Thank you for booking with us!</div>
        </div>
      </div>
    </body>
  </html>
`;


    const options = {
      html: htmlContent,
      fileName: `Ticket_${event.title.replace(/\s+/g, '_')}`,
      directory: 'Download',
    };

    try {
      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('Ticket Generated', `Saved to: ${file.filePath}`, [
        {
          text: 'View Ticket',
          onPress: () => {
            FileViewer.open(file.filePath)
              .then(() => {
                console.log('Success');
              })
              .catch(error => {
                Alert.alert('Error', 'Could not open PDF file.');
                console.log(error);
              });
          },
        },
        {text: 'OK'},
      ]);
    } catch (err) {
      Alert.alert('Error', 'Failed to generate ticket.');
      console.log(err);
    }
  };

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
      <Image source={{uri: event.image}} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📍 Location:</Text>
          <Text style={styles.value}>
            {event.location || 'To be announced'}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>🕒 Date & Time:</Text>
          <Text style={styles.value}>{event.date || 'TBD'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>💸 Price:</Text>
          <Text style={styles.value}>₹{event.price || 'Free'}</Text>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About the Event</Text>
        <Text style={styles.description}>{event.description}</Text>

        {/* Book Now */}
        <TouchableOpacity style={styles.bookButton} onPress={generatePDF}>
          <Text style={styles.bookText}>🎟 Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    color: '#555',
    width: 110,
  },
  value: {
    flex: 1,
    color: '#444',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginTop: 8,
    color: '#666',
    lineHeight: 20,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 12,
  },
  bookButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  bookText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 8,
  },
  backimg: {
    width: 15,
    height: 15,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EventDetailScreen;
