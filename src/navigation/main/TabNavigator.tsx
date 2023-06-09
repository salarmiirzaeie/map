import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'native-base';
import React from 'react';
import Home from '../../screens/main/Home';
import {Path, Svg, Circle} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
const Tab = createBottomTabNavigator();
const tabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

export default tabNavigator;
