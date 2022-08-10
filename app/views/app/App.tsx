/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from '../../components/ui/navigation/Drawer/DrawerNavigator';
import {UserProvider} from '../../context/user/user-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaProvider>
        <UserProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </UserProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
