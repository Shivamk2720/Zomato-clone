import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import BackgroundService from 'react-native-background-actions';

const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));
BackgroundService.on('expiration', () => {
  console.log('i am closed');
});
const MyServices = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = async () => {
    const channelConfig = {
      id: 'channelId',
      name: 'Channel name',
      description: 'Channel description',
      enableVibration: false,
    };
    await VIForegroundService.getInstance().createNotificationChannel(
      channelConfig,
    );
  };
  const startForegroundService = async () => {
    const notificationConfig = {
      channelId: 'channelId',
      id: 3456,
      title: 'Zomatoclone Foreground Service Running',
      text: 'service is on ',
      icon: require('../../src/images/appstore.png'),
      button: 'Stop Service',
    };
    try {
      await VIForegroundService.getInstance().startService(notificationConfig);
    } catch (e) {
      console.error(e);
    }
  };
  const stopforefroundService = async () => {
    await VIForegroundService.getInstance().stopService();
  };
  // background service

  const veryIntensiveTask = async taskDataArguments => {
    // Example of an infinite loop task
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        setCounter(i);
        await BackgroundService.updateNotification({
          taskDesc: 'This is counter ' + i,
        });
        await sleep(delay);
      }
    });
  };

  const options = {
    taskName: 'Example',
    taskTitle: 'Zomato Clone is running in background',
    taskDesc: 'this is counter',
    taskIcon: {
      name: 'appstore',
      type: 'drawable',
      package: 'com.zomatoclone',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
      delay: 5000,
    },
  };

  const startBackgroundService = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({
      taskDesc: 'This is counter',
    });
  };

  const stopBackgroundService = async () => {
    await BackgroundService.stop();
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 100,
          borderRadius: 20,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          startForegroundService();
        }}>
        <Text style={{color: '#fff'}}>Start Foreground Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          stopforefroundService();
        }}>
        <Text style={{color: '#fff'}}>Stop Foreground Service</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 100,
          borderRadius: 20,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          startBackgroundService();
        }}>
        <Text style={{color: '#fff'}}>Start Background Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          stopBackgroundService();
        }}>
        <Text style={{color: '#fff'}}>Stop Background Service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyServices;
