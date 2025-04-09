import {View, Text, Dimensions, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');
const Bottomsheet = () => {
  const context = useSharedValue({y: 0});
  const translateY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      console.log(event.translationY);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -height - 10);
      translateY.value = Math.min(translateY.value, -height / 3);
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      opacity: translateY.value < -300 ? 1 : translateY.value > 10 ? 0.7 : 0.5,
    };
  });
  useEffect(() => {
    translateY.value = withTiming(-height / 3);
  }, []);
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            height: height,
            marginTop: 20,

            width: '100%',

            position: 'absolute',
            top: height,
          },
          rBottomSheetStyle,
        ]}>
        <ScrollView
          style={{
            backgroundColor: 'rgba(255,255,255,1)',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
          onScroll={e => {
            console.log(e.nativeEvent.contentOffset.y);
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                width: 40,
                borderRadius: 10,
                height: 4,
                backgroundColor: '#000',
                alignSelf: 'center',
                marginTop: 20,
              }}></View>
          </View>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
};

export default Bottomsheet;
