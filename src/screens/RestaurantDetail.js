import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
// Sample Data for Dishes and Reviews
const sampleDishes = [
  {
    id: '1',
    name: 'Paneer Tikka',
    price: '₹250',
    imageUrl:
      'https://derafarms.com/cdn/shop/files/deraproducts-2024-06-26T165127.117.png?v=1719400896',
  },
  {
    id: '2',
    name: 'Butter Chicken',
    price: '₹450',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/1200px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg',
  },
  {
    id: '3',
    name: 'Naan',
    price: '₹50',
    imageUrl:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan-500x500.jpg',
  },
];

const sampleReviews = [
  {id: '1', user: 'John', rating: 4.5, comment: 'Great food and ambiance!'},
  {
    id: '2',
    user: 'Alice',
    rating: 4.0,
    comment: 'Very tasty, but a bit pricey.',
  },
  {
    id: '3',
    user: 'Mike',
    rating: 5.0,
    comment: 'Amazing experience, highly recommend!',
  },
];

const sampleMenuImages = [
  {
    id: '1',
    imageUrl:
      'https://b.zmtcdn.com/data/menus/463/463/fe2723c21365602436a5b6428cb43039.jpg?output-format=webp',
  },
  {
    id: '2',
    imageUrl:
      'https://b.zmtcdn.com/data/menus/463/463/d978703019aaa6509c3b31cf05bfc4dc.jpg?output-format=webp',
  },
];

const sampleRestoImages = [
  {
    id: '1',
    imageUrl:
      'https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?ga=GA1.1.852761002.1741183314&semt=ais_hybrid&w=740',
  },
  {
    id: '2',
    imageUrl:
      'https://img.freepik.com/free-photo/restaurant-open-space-new-concept_140725-7438.jpg?ga=GA1.1.852761002.1741183314&semt=ais_hybrid&w=740',
  },
];

const imageUrl =
  'https://karimhotels.com/wp-content/uploads/2024/11/144ee5c0-1d98-4996-abe5-6954fd6f6f2c.png';

const RestaurantDetail = ({route}) => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [dishCount, setDishCount] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);

    // Update the count for the specific dish
    setDishCount(prevCount => {
      const newCount = {...prevCount};
      newCount[item.id] = (newCount[item.id] || 0) + 1;
      return newCount;
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../src/images/backicon.png')}
          style={styles.backimg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => alert('Cart Clicked')}>
        <Image
          source={require('../../src/images/carticon.png')}
          style={styles.cartIcon}
        />
        {cart.length > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>Karim's</Text>
        <Text style={styles.cuisine}>Mughlai</Text>
        <Text style={styles.location}>Gaur City 2</Text>
        <Text style={styles.price}>₹1200 for two</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>Rating: 4 ★</Text>
        </View>

        <Text style={styles.description}>
          Authentic Mughlai dishes with a royal touch. Great for family dinners!
        </Text>

        <Text style={styles.sectionTitle}>Restaurant Menu</Text>
        <FlatList
          data={sampleMenuImages}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSelectedImage(item.imageUrl)}>
              <Image source={{uri: item.imageUrl}} style={styles.menuImage} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Restaurant Pictures</Text>
        <FlatList
          data={sampleRestoImages}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSelectedImage(item.imageUrl)}>
              <Image source={{uri: item.imageUrl}} style={styles.menuImage} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Popular Dishes</Text>
        <FlatList
          data={sampleDishes}
          renderItem={({item}) => (
            <View style={styles.dishItem}>
              <Image source={{uri: item.imageUrl}} style={styles.dishImage} />
              <View style={styles.dishTextContainer}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>
                  {dishCount[item.id]
                    ? `Added ${dishCount[item.id]}x`
                    : 'Add to Cart'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionTitle}>Reviews</Text>
        <FlatList
          data={sampleReviews}
          renderItem={({item}) => (
            <View style={styles.reviewItem}>
              <Text style={styles.reviewUser}>{item.user}</Text>
              <Text style={styles.reviewRating}>Rating: {item.rating} ★</Text>
              <Text style={styles.reviewComment}>{item.comment}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
      {/* <Modal visible={!!selectedImage} transparent>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedImage(null)}>
                        <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: selectedImage }} style={styles.fullImage} />
                </View>
            </Modal> */}
      <Modal visible={!!selectedImage} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedImage(null)}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Image source={{uri: selectedImage}} style={styles.fullImage} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  cuisine: {
    fontSize: 18,
    color: '#FF5722',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  dishItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  dishImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  dishTextContainer: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  dishPrice: {
    fontSize: 16,
    color: '#FF5722',
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reviewItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FF5722',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reviewUser: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  reviewRating: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },
  reviewComment: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  orderButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 35, // Adjust as per your UI
    left: 5,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 8,
  },
  backimg: {
    width: 22,
    height: 22,
  },
  menuImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  fullImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cartButton: {position: 'absolute', top: 35, right: 20, zIndex: 10},
  cartIcon: {width: 30, height: 30},
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {color: 'white', fontSize: 12, fontWeight: 'bold'},
});

export default RestaurantDetail;
