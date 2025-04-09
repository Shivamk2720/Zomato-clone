import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';



const RestaurantCard = ({ name, location, cuisine, rating, price, imageUrl }) => {
    const navigation = useNavigation();
    return (
        <View> 
            <View style={styles.card}>
                <Image source={require('../../src/images/chawla.png')} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>Chawla's Tandoori Junction</Text>
                    <Text style={styles.location}>Indirapuram</Text>
                    <Text style={styles.cuisine}>Veg</Text>
                    <View style={styles.meta}>
                        <Text style={styles.rating}>4.2 ★</Text>
                        <Text style={styles.price}>₹1200 for two</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {  })}> 
                <View style={styles.card}>
                    <Image source={require('../../src/images/KARIM_LOGO_3.png')} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.name}>Karim's</Text>
                        <Text style={styles.location}>Gaur City 2</Text>
                        <Text style={styles.cuisine}>Non Veg</Text>
                        <View style={styles.meta}>
                            <Text style={styles.rating}>4.4 ★</Text>
                            <Text style={styles.price}>₹1500 for two</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        overflow: "hidden",
        marginVertical: 10,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    info: {
        padding: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: "#777",
    },
    cuisine: {
        fontSize: 14,
        color: "#777",
        marginBottom: 5,
    },
    meta: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    rating: {
        backgroundColor: "#4CAF50",
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 14,
    },
    price: {
        fontSize: 14,
        color: "#333",
    },
});

export default RestaurantCard;
