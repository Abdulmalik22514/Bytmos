import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNav';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootNavigator />;
};

export default App;
