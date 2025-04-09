import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
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
const {height, width} = Dimensions.get('window');

const Adidas = () => {
  const [data, setData] = useState([
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ]);
  const [length, setLength] = useState(data.length);
  const [end, setEnd] = useState(true);
  const [loading, setLoading] = useState(false);
  const checkScroll = ({layoutMeasurement, contentOffset, contentSize}) => {
    if (data.length >= length * 3) setData(data.slice(length * 2));

    if (contentOffset.y <= this.props.offset) {
      this.setState(
        prevState => ({
          data: [...prevState.data, ...data],
        }),
        () => this.infListRef.scrollToIndex({index: length, animated: false}),
      );
    }
    if (
      layoutMeasurement.height + contentOffset.y >=
        contentSize.height - this.props.offset &&
      end
    ) {
      setData(prevState => [...prevState.data, ...data]);
      setEnd(false);
    } else {
      setEnd(true);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{height: height / 2}}>
          <FlatList
            data={data}
            onScroll={e => {}}
            pagingEnabled
            refreshing={loading}
            onRefresh={() => {
              setLoading(true);
            }}
            showsVerticalScrollIndicator={false}
            refreshControl={() => {
              return (
                <View
                  style={{
                    backgroundColor: 'green',
                    height: 60,
                    width: '100%',
                  }}></View>
              );
            }}
            renderItem={({item, index}) => {
              return (
                <Image
                  source={item}
                  style={{width: width, height: height / 2}}
                />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Adidas;
