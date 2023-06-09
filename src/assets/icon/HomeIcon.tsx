import React from 'react';
import {Path, Svg} from 'react-native-svg';

const HomeIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" width={30} height={30} fill={'skyblue'}>
      <Path d="M20 12v9h-4v-6h-4v6h-4v-9l-4 4v-15h12l-4 4z" />
    </Svg>
  );
};

export default HomeIcon;
