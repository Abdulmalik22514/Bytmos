import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNav';
import SplashScreen from 'react-native-splash-screen';
import {FlusAppServiceProvider} from 'react-flus';
import {FlusStores} from './src/flus/stores/flus.stores';
import {FlusActions} from './src/flus/actions/flus.actions';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FlusAppServiceProvider stores={FlusStores} actions={FlusActions}>
        <RootNavigator />
      </FlusAppServiceProvider>
    </GestureHandlerRootView>
  );
};

export default App;
