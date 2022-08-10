import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const isIOS = Platform.OS === 'ios';
const statusBarHeight = isIOS ? ifIphoneX(44, -130) : 0;
const navBarHeight = isIOS ? 44 : 56;
const headerHeight = statusBarHeight + navBarHeight;
// const {width} = Dimensions.get('window');

const BaseKeyboardAvoidingView: React.FC = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIOS ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default BaseKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {flex: 1},
});
