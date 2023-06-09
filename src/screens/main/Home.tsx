import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}></View>
      <LinearGradient colors={['#ffffff', 'purple']} style={{flex: 0.5}} />
    </View>
  );
};

export default Home;
