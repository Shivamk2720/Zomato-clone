import React from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const restaurants = [
    {
        id: "1",
        name: "Spicy Delight",
        location: "Connaught Place, New Delhi",
        cuisine: "Indian, Mughlai",
        rating: 4.5,
        price: 800,
        imageUrl: "https://example.com/restaurant1.jpg",
        description: "A popular spot for authentic Mughlai cuisine.",
    },
    {
        id: "2",
        name: "Sushi Express",
        location: "Bandra, Mumbai",
        cuisine: "Japanese, Sushi",
        rating: 4.7,
        price: 1200,
        imageUrl: "https://example.com/restaurant2.jpg",
        description: "Fresh and delicious sushi served in a casual setting.",
    },
];

const RestaurantList = () => {
    const navigation = useNavigation();

    const handleNavigate = (restaurant) => {
        navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            imageUrl: restaurant.imageUrl,
            location: restaurant.location,
            cuisine: restaurant.cuisine,
            rating: restaurant.rating,
            price: restaurant.price,
            description: restaurant.description,
        });
    };

    return (
        <View>
            <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNavigate(item)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default RestaurantList;
