import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/theme/theme';
import {Provider} from 'react-redux';
import store from './src/state-managements/store';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
