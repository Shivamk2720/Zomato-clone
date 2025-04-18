import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const categories = [
  {
    id: 1,
    name: 'Noodles',
    image: 'https://cdn-icons-png.flaticon.com/512/2718/2718224.png',
  },
  {
    id: 2,
    name: 'Pizza',
    image: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
  },
  {
    id: 3,
    name: 'Momos',
    image: 'https://cdn-icons-png.flaticon.com/512/5787/5787086.png',
  },
  {
    id: 4,
    name: 'Burgers',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
  },
];

const events = [
  {
    id: 1,
    title: 'Sprint Land Festival',
    subTitle:'Sprint Land Festival a taste of Indias best!',
    description:
      "A taste of India's best Restraunts ",
    description: 'Food, fun, and more! With music and live band and DJ Night come and join us in this joyfull event',
    price: '400',
    location: 'Delhi',
    date: '1st to 3rd August',
    image:
      'https://media.istockphoto.com/id/697138410/photo/olivos-argentina-people-at-a-street-food-market-festival-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=aIXPxJ6TprGJqTlwWVvAL7vdfyxgR1HYIVSTYTupR_g=',
  },
  {
    id: 2,
    title: 'Street Food Fiesta',
    subTitle:'A taste of Indias best!',
    description:
      "A taste of India's best! food festival come with your freinds and family to enjoy the best food across from india ",
    price: '200',
    location: 'Delhi',
    date: '1st to 3rd May',
    image:
      'https://www.shutterstock.com/shutterstock/photos/2260606417/display_1500/stock-vector-editable-text-effect-food-festival-d-traditional-cartoon-template-style-premium-vector-2260606417.jpg',
  },
];

const ZomalandScreen = () => {
  const navigation = useNavigation();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Animation lasts for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Popper GIF Overlay */}
      {/* {showAnimation && (
        <View style={styles.animationOverlay}>
          <Image
            source={{ uri: 'https://img1.picmix.com/output/stamp/normal/0/8/2/8/1458280_b58bc.gif' }}
            style={styles.animationImage}
            resizeMode="cover"
          />
        </View>
      )} */}

      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 40, flexGrow: 1}}>
        {/* Header Banner */}
        <Image
          source={require('../../src/images/sprint_land.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}>
          {categories.map(cat => (
            <TouchableOpacity key={cat.id} style={styles.categoryItem}>
              <Image source={{uri: cat.image}} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Events */}
        <Text style={styles.sectionTitle}>Events & Offers</Text>
        {events.map(event => (
          <TouchableOpacity
            key={event.id}
            onPress={() => navigation.navigate('EventDetail', {event})}>
            <View key={event.id} style={styles.eventCard}>
              <Image source={{uri: event.image}} style={styles.eventImage} />
              <View style={styles.eventInfo}>
                <View style={styles.tagWithPrice}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDesc}>
                    Starts from ₹{event.price}
                  </Text>
                </View>
                <Text style={styles.eventDesc}>{event.subTitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{height: 30}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
    color: '#222',
  },
  categoryScroll: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  categoryItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  categoryText: {
    marginTop: 6,
    fontSize: 12,
    color: '#444',
  },
  eventCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
    elevation: 2,
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventInfo: {
    padding: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  animationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: 999, // on top of everything
    // backgroundColor: 'rgba(255,255,255,0.5)', // optional fade background
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationImage: {
    width: '100%',
    height: '100%',
  },
  tagWithPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:5
  },
});

export default ZomalandScreen;
