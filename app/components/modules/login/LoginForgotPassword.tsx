import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BasePage from '../../base/partials/BasePage';
import BaseKeyboardAvoidingView from '../../base/partials/BaseKeyboardAvoidingView';
import BaseDismissKeyboard from '../../base/partials/BaseDismissKeyboard';
import {GUTTER} from '../../../config/app.sizes';

const LoginForgotPassword = () => {
  return (
    <BasePage>
      <BaseKeyboardAvoidingView>
        <BaseDismissKeyboard>
          <View style={styles.inner}>
            <Text>LoginForgotPassword</Text>
          </View>
        </BaseDismissKeyboard>
      </BaseKeyboardAvoidingView>
    </BasePage>
  );
};

export default LoginForgotPassword;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: GUTTER.MEDIUM,
    marginHorizontal: GUTTER.MEDIUM,
  },
});
