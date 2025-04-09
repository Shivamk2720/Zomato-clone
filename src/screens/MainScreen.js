import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useState} from 'react';
import {THEME_COLOR} from '../strings';
import Tab1 from '../tabs/Tab1';
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Tab1 /> : selectedTab == 1 ? <Tab2 /> : <Tab3 />}
      <View style={styles.bottomNavigationView}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 0 ? THEME_COLOR : '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '60%',
            }}>
            <Image
              source={require('../../src/images/delivery.png')}
              style={[
                styles.tabIcon,
                {tintColor: selectedTab == 0 ? THEME_COLOR : '#8e8e8e'},
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {color: selectedTab == 0 ? '#000' : '#8e8e8e'},
              ]}>
              Delivery
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 1 ? THEME_COLOR : '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '60%',
            }}>
            <Image
              source={require('../../src/images/dining.png')}
              style={[
                styles.tabIcon,
                {tintColor: selectedTab == 1 ? THEME_COLOR : '#8e8e8e'},
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {color: selectedTab == 1 ? '#000' : '#8e8e8e'},
              ]}>
              Dining
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 2 ? THEME_COLOR : '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '60%',
            }}>
            <Image
              source={require('../../src/images/zomaland.png')}
              style={[
                styles.tabIcon,
                {tintColor: selectedTab == 2 ? THEME_COLOR : '#8e8e8e'},
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {color: selectedTab == 2 ? '#000' : '#8e8e8e'},
              ]}>
              Zomaland
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigationView: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
  },
  tab: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
  tabTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
});
