// import {View, Text, TouchableOpacity} from 'react-native';
// import React, {useRef, useState} from 'react';
// import ViewShot from 'react-native-view-shot';
// import Share from 'react-native-share';
// const ScreenShot = () => {
//   const ref = useRef();
//   const [imageUri, setImageUri] = useState('');
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <ViewShot
//         options={{fileName: 'myscreenshot', format: 'jpg', quality: 0.9}}
//         ref={ref}
//         style={{
//           width: '80%',
//           height: '50%',
//         }}>
//         <View
//           style={{
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'green',
//           }}></View>
//       </ViewShot>
//       <TouchableOpacity
//         style={{borderWidth: 1, borderRadius: 10, padding: 10, marginTop: 50}}
//         onPress={() => {
//           ref.current.capture().then(uri => {
//             console.log('captured screen shot url ', uri);
//             setImageUri(uri);
//           });
//         }}>
//         <Text>Capture Screenshot</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{borderWidth: 1, borderRadius: 10, padding: 10, marginTop: 50}}
//         onPress={() => {
//           const options = {
//             url: imageUri,
//             message: 'hello please use my app for getting benefits',
//           };
//           Share.open(options);
//         }}>
//         <Text>Share Image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ScreenShot;


