import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Route from './src/route';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
