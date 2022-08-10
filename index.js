/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/views/app/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
