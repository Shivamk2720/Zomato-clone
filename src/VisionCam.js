// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const VisionCam = () => {
//   useEffect(() => {
//     getPermission();
//   }, []);
//   const getPermission = async () => {
//     const newCameraPermission = await Camera.requestCameraPermission();
//     const newMicrophonePermission = await Camera.requestMicrophonePermission();
//     console.log(newCameraPermission + '  ' + newMicrophonePermission);
//   };
//   const devices = useCameraDevices();
//   const device = devices.back;
//   if (device == null) {
//     console.log('dsdsd');
//   }
//   return (
//     <View>
//       <Camera
//         style={{flex: 1}}
//         device={device}
//         isActive={true}
//         frameProcessorFps={'auto'}
//         frameProcessor={true}
//       />
//     </View>
//   );
// };

// export default VisionCam;
