import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTHROUTES} from '../../../../enums/enums';
import LoginDefault from '../../../modules/login/LoginDefault';
import LoginForgotPassword from '../../../modules/login/LoginForgotPassword';
import LoginResetPassword from '../../../modules/login/LoginResetPassword';
import {LoginStackParamList} from './LoginStackType';
import Register from '../../../modules/login/Register';
import {COLORS} from '../../../../config/app.colors';

const Stack = createStackNavigator<LoginStackParamList>();

const AuthNavigator = () => {
  const options = {
    headerTransparent: true,
    title: '',
  };
  return (
    <Stack.Navigator
      initialRouteName={AUTHROUTES.LOGINDEFAULT}
      screenOptions={{
        headerTransparent: true,
      }}>
      <Stack.Screen
        name={AUTHROUTES.LOGINDEFAULT}
        component={LoginDefault}
        options={options}
      />
      <Stack.Screen
        name={AUTHROUTES.LOGINFORGOTPASSWORD}
        component={LoginForgotPassword}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name={AUTHROUTES.LOGINRESETPASSWORD}
        component={LoginResetPassword}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name={AUTHROUTES.REGISTER}
        component={Register}
        options={{
          title: '',
          headerTransparent: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.BACKGROUNDCOLOR,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
