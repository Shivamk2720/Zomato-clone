import React, {useState, useCallback} from 'react';
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
import {useNavigation, useFocusEffect} from '@react-navigation/native';

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

const sampleMenuImages = [
  {
    id: '1',
    imageUrl:
      'https://b.zmtcdn.com/data/menus/463/463/fe2723c21365602436a5b6428cb43039.jpg?output-format=webp',
  },
];

const imageUrl =
  'https://karimhotels.com/wp-content/uploads/2024/11/144ee5c0-1d98-4996-abe5-6954fd6f6f2c.png';

const RestaurantDetail = ({route}) => {
  const navigation = useNavigation();
  const [cart, setCart] = useState(route.params?.cart || []);
  const [dishCount, setDishCount] = useState({});

  // When coming back from CartScreen, update the cart (if changed)
  useFocusEffect(
    useCallback(() => {
      setCart(route.params?.cart || []);
    }, [route.params?.cart])
  );

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);

    // Update the count for the specific dish
    setDishCount(prevCount => {
      const newCount = {...prevCount};
      newCount[item.id] = (newCount[item.id] || 0) + 1;
      return newCount;
    });
  };

  const removeFromCart = item => {
    const newCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(newCart);
    setDishCount(prevCount => {
      const newCount = {...prevCount};
      delete newCount[item.id];
      return newCount;
    });
  };

  const increaseQuantity = item => {
    setCart(prevCart => [...prevCart, item]);
    setDishCount(prevCount => {
      const newCount = {...prevCount};
      newCount[item.id] = (newCount[item.id] || 0) + 1;
      return newCount;
    });
  };

  const decreaseQuantity = item => {
    const newCart = cart.filter(cartItem => cartItem.id !== item.id || dishCount[item.id] > 1);
    setCart(newCart);
    setDishCount(prevCount => {
      const newCount = {...prevCount};
      if (newCount[item.id] > 1) {
        newCount[item.id] -= 1;
      } else {
        delete newCount[item.id];
      }
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

      {/* Cart Button */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('CartScreen', {cart, setCart})}>
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
        <Text style={styles.description}>
          Authentic Mughlai dishes with a royal touch. Great for family dinners!
        </Text>

        {/* Menu Dishes */}
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
              <View style={styles.addButtonContainer}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>
                    {dishCount[item.id]
                      ? `Added ${dishCount[item.id]}x`
                      : 'Add to Cart'}
                  </Text>
                </TouchableOpacity>
                {dishCount[item.id] > 0 && (
                  <View style={styles.quantityControl}>
                    <TouchableOpacity
                      onPress={() => decreaseQuantity(item)}
                      style={styles.controlButton}>
                      <Text style={styles.controlButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>
                      {dishCount[item.id]}
                    </Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item)}
                      style={styles.controlButton}>
                      <Text style={styles.controlButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate('CartScreen', {cart, setCart})}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
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
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  controlButton: {
    backgroundColor: '#FF5722',
    padding: 5,
    borderRadius: 5,
  },
  controlButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  cartButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    zIndex: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
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
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 35, 
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
});

export default RestaurantDetail;
