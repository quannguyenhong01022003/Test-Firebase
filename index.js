/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Register from './src/Screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/ultil/AppNavigation';

function AppMain() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => AppMain);
