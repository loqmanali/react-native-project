import { AppRegistry } from 'react-native';
import App from './app/index'; // Ensure the correct relative path
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root')
});
