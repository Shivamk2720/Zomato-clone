import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
const NoInternet = () => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
    });

    // Unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isConnected ? 'green' : 'black',
        }}>
        <Text style={{color: '#fff'}}>
          {isConnected ? 'Back Online' : 'no Internet Connection'}
        </Text>
      </View>
    </View>
  );
};

export default NoInternet;
