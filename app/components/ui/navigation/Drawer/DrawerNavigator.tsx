import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Dashboard from '../../../../views/dashboard/Dashboard';
import {AUTHROUTES, DRAWERROUTES} from '../../../../enums/enums';
import Login from '../../../../views/login/Login';
import IoniconsA from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../../config/app.colors';
import CustomDrawerNavigator from './CustomDrawerNavigator';
import Notifications from '../../../../views/notifications/Notifications';
import Settings from '../../../../views/settings/Settings';
import Payment from '../../../../views/payment/Payment';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerNavigator {...props} />
      )}
      initialRouteName={DRAWERROUTES.DASHBOARD}
      // screenOptions={{
      //   headerTransparent: true,
      //   headerTitle: '',
      //   swipeEnabled: false,
      //   headerTintColor: 'white',
      //   drawerStyle: {
      //     backgroundColor: COLORS.BACKGROUNDCOLOR,
      //   },
      //   drawerItemStyle: {
      //     marginVertical: 5,
      //   },
      //   drawerLabelStyle: {
      //     color: 'white',
      //   },
      //   drawerActiveTintColor: '#e91e63',
      // }}
      screenOptions={({route}) => {
        const focusedRoute = getFocusedRouteNameFromRoute(route);
        //TODO add more
        let headerShown;
        if (
          focusedRoute == AUTHROUTES.REGISTER ||
          focusedRoute === AUTHROUTES.LOGINFORGOTPASSWORD ||
          focusedRoute === AUTHROUTES.LOGINRESETPASSWORD
        ) {
          headerShown = false;
        }

        return {
          headerTransparent: true,
          headerTitle: '',
          swipeEnabled: false,
          headerTintColor: 'white',
          drawerStyle: {
            backgroundColor: COLORS.BACKGROUNDCOLOR,
          },
          drawerItemStyle: {
            marginVertical: 5,
          },
          drawerLabelStyle: {
            color: 'white',
          },
          drawerActiveTintColor: '#e91e63',
          headerShown,
        };
      }}>
      <Drawer.Screen
        name={DRAWERROUTES.DASHBOARD}
        component={Dashboard}
        options={{
          drawerIcon: ({focused, size}) => (
            <IoniconsA
              name="map-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={`${DRAWERROUTES.LOGIN}/${DRAWERROUTES.REGISTRATION}`}
        component={Login}
        options={{
          headerTintColor: 'black',
          drawerIcon: ({focused, size}) => (
            <IoniconsA
              name="md-person-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWERROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          headerTintColor: 'black',
          headerTitle: DRAWERROUTES.NOTIFICATIONS,
          headerTransparent: false,
          drawerIcon: ({focused, size}) => (
            <IoniconsA
              name="notifications-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWERROUTES.SETTINGS}
        component={Settings}
        options={{
          headerTitle: DRAWERROUTES.SETTINGS,
          headerTintColor: 'black',
          headerTransparent: false,
          drawerIcon: ({focused, size}) => (
            <IoniconsA
              name="settings-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DRAWERROUTES.PAYMENT}
        component={Payment}
        options={{
          headerTitle: DRAWERROUTES.PAYMENT,
          headerTintColor: 'black',
          headerTransparent: false,
          drawerIcon: ({focused, size}) => (
            <IoniconsA
              name="ios-cash-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
