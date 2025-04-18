import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {THEME_COLOR} from '../strings';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Spash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={mystyles.container}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      <Image source={require('../images/sprint_deliver.png')} style={mystyles.logo} />
    </View>
  );
};

export default Spash;
const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(70),
    height: responsiveWidth(70),
  },
});
