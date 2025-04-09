import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
import {THEME_COLOR} from '../strings';
import RestaurantCard from './RestaurantCard';
import { useNavigation } from "@react-navigation/native";
// import RestaurantDetail from '../screens/RestaurantDetail';

const Tab2 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView styl={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../../src/images/location.png')}
              style={styles.location}
            />
            <View>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={styles.locationBold}>Noida Uttar Pradesh</Text>
              </View>
              <Text style={styles.locationSmall}>Railway Colony</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('userProfile')}>
            <View style={styles.headerRight}>
              {/* <Image
                source={require('../../src/images/translating.png')}
                style={[styles.location, {tintColor: '#000', marginRight: 20}]}
              /> */}
              <Image
                source={require('../../src/images/profile-user.png')}
                style={[styles.location, {tintColor: '#000', marginRight: 20}]}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Image
            source={require('../../src/images/search.png')}
            style={styles.location}
          />
          <Text style={styles.serachText}>Search Items</Text>
          <Image
            source={require('../../src/images/mic.png')}
            style={styles.location}
          />
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              'Sort',
              'Fast Delivery',
              'Rating 4.0+',
              'Pure Veg',
              'Cuisines',
              'More',
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.filterItem}>
                  <View style={styles.filterItemView}>
                    {item == 'Sort' ? (
                      <Image
                        source={require('../../src/images/filter.png')}
                        style={[
                          styles.location,
                          {
                            tintColor: '#000',
                            width: 20,
                            height: 20,
                            marginRight: 5,
                          },
                        ]}
                      />
                    ) : null}
                    <Text>{item}</Text>
                    {item == 'More' || item == 'Sort' ? (
                      <Image
                        source={require('../../src/images/dropdown.png')}
                        style={[
                          styles.location,
                          {
                            tintColor: '#000',
                            width: 10,
                            height: 10,
                            marginLeft: 5,
                            marginRight: 10,
                          },
                        ]}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View> 
        {/* <View style={styles.upperView}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../src/images/offers.jpg')}
              style={styles.cardImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../src/images/healthy.jpg')}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.banner}>
          <Image
            source={require('../../src/images/banner.jpg')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>Top Brands For You</Text>
        <View style={{marginTop: 10, paddingLeft: 20}}>
          <FlatList
            data={[
              {
                image: require('../../src/images/burgerking.png'),
                title: 'Burger King',
              },
              {
                image: require('../../src/images/kfc.png'),
                title: ' ',
              },
              {
                image: require('../../src/images/subway.png'),
                title: 'Subway',
              },
              {
                image: require('../../src/images/dominos.png'),
                title: 'Dominos',
              },
            ]}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View style={styles.brandItem}>
                  <View style={styles.brandImageView}>
                    <Image source={item.image} style={styles.brandImage} />
                  </View>
                  <View style={styles.percentageView}>
                    <Text style={styles.percentageViewText}>40% off</Text>
                  </View>
                  <Text style={styles.brandTitle}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View> */}
        <Text style={styles.categoryTitle}> Top Restaurant's Near You</Text>
        <View style={{marginTop: 15}}>
          <FlatList
            data={[1, 1, 1, 1]}
            showsHorizontalScrollIndicator={true}
            vertical
            renderItem={({item, index}) => {
              return (
                 
                    
                   
                    <RestaurantCard/>
                
                // <TouchableOpacity style={styles.recommendedItem}>
                //   <Image
                //     source={require('../../src/images/pizza.jpeg')}
                //     style={styles.recommendedItemImage}
                //   />
                //   <View style={styles.recommendedItemPriceView}>
                //     <Text>Roms Pizza</Text>
                //     <View style={styles.recommendedItemName}>
                //       <Text style={{color: '#fff'}}>4.9</Text>
                //       <Image
                //         source={require('../../src/images/raring.png')}
                //         style={{
                //           width: 10,
                //           height: 10,
                //           tintColor: '#fff',
                //           marginLeft: 5,
                //         }}
                //       />
                //     </View>
                //   </View>
                //   <View
                //     style={{
                //       flexDirection: 'row',
                //       alignItems: 'center',
                //       paddingLeft: 10,
                //       marginTop: 5,
                //     }}>
                //     <Image
                //       source={require('../../src/images/stopwatch.png')}
                //       style={{width: 10, height: 10}}
                //     />
                //     <Text style={{marginLeft: 5, fontSize: 12}}>36 min .</Text>
                //     <Text style={{marginLeft: 5, fontSize: 12}}>5Km</Text>
                //   </View>
                //   <View
                //     style={{
                //       flexDirection: 'row',
                //       alignItems: 'center',
                //       paddingLeft: 10,
                //       marginTop: 5,
                //     }}>
                //     <Image
                //       source={require('../../src/images/rupee.png')}
                //       style={{width: 10, height: 10, tintColor: 'pink'}}
                //     />
                //     <Text style={{marginLeft: 5, fontSize: 12}}>
                //       150 for one
                //     </Text>
                //   </View>

                //     <View>
                        
                //     </View>

                // </TouchableOpacity>
              );
            }}
          />
        </View> 

        <View style={{marginTop: 15}}>
        <FlatList
            data={[1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.restroDisplay}>
                  
                  

                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

          

    </ScrollView>
  );
};

export default Tab2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 100,
  },
  header: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
  },
  location: {
    tintColor: THEME_COLOR,
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    marginLeft: 5,
  },
  locationBold: {
    fontWeight: '800',
  },
  locationSmall: {
    marginLeft: 10,
  },
  searchBar: {
    height: responsiveHeight(6),
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-evenly',
  },
  serachText: {width: '80%', marginLeft: 20},
  filterItem: {
    borderWidth: 0.2,
    borderRadius: 5,
    marginLeft: 15,
    height: 30,
  },
  filterItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  card: {
    width: responsiveWidth(38),
    height: responsiveHeight(14),
    borderRadius: 10,
  },
  banner: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    height: responsiveHeight(20),
  },
  cardImage: {width: '100%', height: '100%', borderRadius: 10},
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  categoryTitle: {
    fontWeight: '800',
    color: '#000',
    marginTop: 20,
    marginLeft: 22,
    fontSize: responsiveFontSize(2.2),
  },
  brandItem: {
    marginLeft: 10,
    marginBottom: 10,
  },
  brandImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  brandImageView: {
    backgroundColor: '#fff',
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(14) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageView: {
    width: '80%',
    height: 20,
    backgroundColor: '#497ceb',
    borderRadius: 4,
    position: 'absolute',
    top: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTitle: {marginTop: 10, color: '#000'},
  percentageViewText: {color: '#fff', fontSize: 10},
  recommendedItem: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 15,
  },
  recommendedItemImage: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  recommendedItemPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  recommendedItemName: {
    width: 40,
    flexDirection: 'row',
    height: 25,
    backgroundColor: 'green',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
