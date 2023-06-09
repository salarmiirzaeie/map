import React from 'react';
import {Button, useTheme, View, Text} from 'native-base';
import MapView, {PROVIDER_GOOGLE, UrlTile} from 'react-native-maps';

const Home = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1}}>
      <MapView
        showsTraffic
        maxZoomLevel={20}
        style={{flex: 1}}
        initialRegion={{
          latitude: 54.97328,
          longitude: -1.61396,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <UrlTile urlTemplate="http://149.102.145.71/hot/{z}/{x}/{y}.png" />
      </MapView>
    </View>
  );
};

export default Home;
