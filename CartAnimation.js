// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import Animated, {
//   withSpring,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';
// const {height, width} = Dimensions.get('window');
// const CartAnimation = () => {
//   const offset = useSharedValue(0);
//   const [addedItems, setAddedItem] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const defaultSpringStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY: withSpring(offset.value),
//         },
//         {translateX: withSpring(offset.value / 2)},
//         {
//           scale: withTiming(
//             offset.value == -250 || offset.value == -1 ? 0 : 1,
//             {
//               duration: 800,
//             },
//           ),
//         },
//       ],
//     };
//   });

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <View style={{marginRight: 250, marginBottom: 170}}>
//         <Image
//           source={require('./src/images/cart.png')}
//           style={{width: 34, height: 30}}
//         />
//         <View
//           style={{
//             width: 20,
//             height: 20,
//             borderRadius: 10,
//             backgroundColor: 'red',
//             position: 'absolute',
//             top: -10,
//             right: -5,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text style={{color: '#fff'}}>{addedItems.length}</Text>
//         </View>
//       </View>
//       <Animated.Image
//         style={[{width: 100, height: 100}, defaultSpringStyles]}
//         source={require('./src/images/pizza.png')}></Animated.Image>
//       {visible ? (
//         <Image
//           style={{width: 100, height: 100}}
//           source={require('./src/images/pizza.png')}></Image>
//       ) : null}

//       <TouchableOpacity
//         style={{
//           backgroundColor: 'green',
//           padding: 10,
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderRadius: 10,
//           marginTop: 50,
//         }}
//         onPress={() => {
//           if (offset.value == -250) {
//             offset.value = 0;
//             setVisible(false);
//           } else {
//             offset.value = -250;
//             setVisible(true);
//             setTimeout(() => {
//               const temp = addedItems;
//               temp.push(1);
//               let tempItems = [];
//               temp.map(item => {
//                 tempItems.push(item);
//               });
//               setAddedItem(tempItems);
//             }, 700);
//           }
//         }}>
//         <Text style={{color: '#fff'}}>Add To Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CartAnimation;
