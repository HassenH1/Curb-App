import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, GUTTER} from '../../../../config/app.sizes';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {COLORS} from '../../../../config/app.colors';

interface IBaseFAB {
  openUri?: string;
  closeUri?: string;
  navigation?: any;
}

const BaseFAB = (props: IBaseFAB) => {
  const nav = useNavigation();
  const {openUri, closeUri} = props;

  const isDrawerOpen = useDrawerStatus() === 'open';

  const onPress = () => nav.dispatch(DrawerActions.openDrawer());

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.touchableOpacityStyle}>
      <Image
        source={{
          uri: !isDrawerOpen
            ? openUri ||
              'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/29-512.png'
            : closeUri ||
              'https://www.shareicon.net/download/2015/08/23/89401_close.ico',
        }}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  );
};

export default BaseFAB;

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: BORDER_RADIUS.LARGE,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  touchableOpacityStyle: {
    position: 'absolute', //
    width: 45,
    height: 45,
    borderWidth: 0, //
    alignItems: 'center', //
    justifyContent: 'center', //
    left: GUTTER.MEDIUM,
    top: GUTTER.X_LARGE,
    borderRadius: 40, //
    zIndex: 1, //
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    // tintColor: COLORS.BLUE_2,
    tintColor: 'black',
  },
});
