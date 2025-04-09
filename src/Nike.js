import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
const image11 = require('../src/images/nike_shoes1_1.webp');
const image12 = require('../src/images/nike_shoes1_2.webp');
const image13 = require('../src/images/nike_shoes1_3.webp');
const image14 = require('../src/images/nike_shoes1_4.webp');
const image15 = require('../src/images/nike_shoes1_5.webp');
const image16 = require('../src/images/nike_shoes1_6.webp');
const image17 = require('../src/images/nike_shoes1_7.webp');
const image18 = require('../src/images/nike_shoes1_8.webp');
const image21 = require('../src/images/nike_shoes2_1.webp');
const image22 = require('../src/images/nike_shoes2_2.jpeg');
const image23 = require('../src/images/nike_shoes2_3.webp');
const image24 = require('../src/images/nike_shoes2_4.webp');
const image25 = require('../src/images/nike_shoes2_5.webp');
const image26 = require('../src/images/nike_shoes2_6.webp');
const image27 = require('../src/images/nike_shoes2_7.webp');
const image28 = require('../src/images/nike_shoes2_8.webp');
const image31 = require('../src/images/nike_shoes3_1.webp');
const image32 = require('../src/images/nike_shoes3_2.webp');
const image33 = require('../src/images/nike_shoes3_3.webp');
const image34 = require('../src/images/nike_shoes3_4.webp');
const image35 = require('../src/images/nike_shoes3_5.webp');
const image36 = require('../src/images/nike_shoes3_6.webp');
const image37 = require('../src/images/nike_shoes3_7.webp');
const image38 = require('../src/images/nike_shoes3_8.webp');
const {height, width} = Dimensions.get('window');
const Nike = () => {
  const [data, setData] = useState([
    {
      items: [
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
      ],
    },
    {
      items: [
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
      ],
    },
    {
      items: [
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37,
        image38,
      ],
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedShoes, setSelectedShoes] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 60,
              width: '100%',
              borderBottomWidth: 0.2,
              borderBottomColor: '#8e8e8e',
              justifyContent: 'center',
            }}>
            <Text style={{margin: 10, fontSize: 18}}>
              Nike Air Force 1 Shoes
            </Text>
          </View>
          <View style={{height: height / 2}}>
            <FlatList
              pagingEnabled
              horizontal
              onScroll={e => {
                setSelectedIndex(
                  (e.nativeEvent.contentOffset.x / width).toFixed(0),
                );
              }}
              data={data[selectedShoes].items}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <Image
                    source={item}
                    style={{width: width, height: height / 2}}
                  />
                );
              }}
            />
            <View
              style={{
                width: width,
                height: 40,
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {data[selectedShoes].items.map((item, index) => {
                return (
                  <View
                    style={{
                      backgroundColor:
                        selectedIndex == index ? '#8e8e8e' : '#f2f2f2',
                      height: 5,
                      width: 30,
                    }}></View>
                );
              })}
            </View>
          </View>
          <View>
            <FlatList
              data={data}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width / 3,
                      height: height / 5,
                      borderWidth: 2,
                      borderColor: '#fff',
                    }}
                    onPress={() => {
                      setSelectedShoes(index);
                      setSelectedIndex(0);
                    }}>
                    <Image
                      source={item.items[0]}
                      style={{width: '100%', height: '100%'}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={{marginLeft: 10, marginTop: 20, fontSize: 18}}>
            Men's Shoes
          </Text>
          <Text style={{margin: 10, fontSize: 25, fontWeight: '500'}}>
            Nike Air Force 1 07 LV8
          </Text>
          <Text style={{marginLeft: 10, marginTop: 20, fontSize: 18}}>
            MRP : ₹ 9,650.00
          </Text>
          <Text style={{margin:10,textAlign:'justify'}}>
            {
              "Celebrating 40 years of pushing sport and fashion boundaries, this commemorative AF-1 mixes elements from beloved launches to highlight the timeless design's place in sneaker history. Gold accents, a debossed *40* on the heel and an honorary tongue label are just a few of the embellishments inviting you to the party. Completing the look, crisp leather in bold colours delivers a grand finale. Happy anniversary!"
            }
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nike;
