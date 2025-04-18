import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const initialCart = route.params?.cart || [];

  const [cartItems, setCartItems] = useState([]);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is empty', 'Please add items before checking out.');
      return;
    }

    let message = 'Hi, I\'d like to place an order:\n\n';

    cartItems.forEach(item => {
      message += `• ${item.name} ×${item.quantity}\n`;
    });

    const totalAmount = calculateTotalRaw(); // raw number for price
    message += `\nTotal Amount: ₹${totalAmount.toFixed(2)}\nPlease confirm the order.`;

    const restaurantPhoneNumber = '9599668575'; // Replace with your actual number
    const url = `https://wa.me/${restaurantPhoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('WhatsApp not installed', 'Please install WhatsApp to place the order.')
    );
  };

  useEffect(() => {
    const updatedCart = initialCart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(updatedCart);
  }, [initialCart]);

  const increaseQuantity = index => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
  };

  const decreaseQuantity = index => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCartItems(newCart);
    } else {
      removeItem(index);
    }
  };

  const removeItem = index => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const calculateTotalRaw = () => {
    let total = 0;
    cartItems.forEach(item => {
      const price = parseFloat(item.price.replace('₹', '')) || 0;
      total += price * item.quantity;
    });
    return total;
  };

  const calculateTotal = () => `₹${calculateTotalRaw().toFixed(2)}`;

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(index)}>
          <Text style={styles.quantityButton}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(index)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => removeItem(index)}>
        <Text style={styles.removeText}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderItem}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: {calculateTotal()}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back to Restaurant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  emptyText: { fontSize: 16, color: '#888', textAlign: 'center' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 16, fontWeight: '600', color: '#333' },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantityButton: {
    fontSize: 22,
    paddingHorizontal: 10,
    color: '#FF5722',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
    width: 25,
    textAlign: 'center',
  },
  removeText: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 15,
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#FF5722',
  },
});

export default CartScreen;
