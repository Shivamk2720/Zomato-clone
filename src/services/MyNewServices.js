import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import BackgroundService from 'react-native-background-actions';
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));
const veryIntensiveTask = async taskDataArguments => {
  // Example of an infinite loop task
  const {delay} = taskDataArguments;
  await new Promise(async resolve => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      console.log(i);
      /// you can call aapi here
      await BackgroundService.updateNotification({
        taskDesc: 'my counter is running ' + i,
      });
      await sleep(delay);
    }
  });
};
const options = {
  taskName: 'Example',
  taskTitle: 'Zomato clone is running',
  taskDesc: 'ExampleTask description',
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
const MyNewServices = () => {
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
      title: 'hello',
      text: 'Some text',
      icon: 'ic_icon',
      button: 'Some text',
    };
    try {
      await VIForegroundService.getInstance().startService(notificationConfig);
    } catch (e) {
      console.error(e);
    }
  };

  const stopForegroundService = async () => {
    await VIForegroundService.getInstance().stopService();
  };

  const startBackgroundService = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({
      taskDesc: 'my counter is running',
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
          stopForegroundService();
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

export default MyNewServices;
