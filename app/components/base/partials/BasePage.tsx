import {StyleSheet, View} from 'react-native';
import React from 'react';
import {GUTTER} from '../../../config/app.sizes';
import {cx} from '../../../utils/styles.utils';
import {COLORS} from '../../../config/app.colors';

const BasePage = (props: any) => {
  const {
    children,
    style,
    margin = false,
    backgroundColor = true,
    justifyContentCenter = true,
  } = props;
  const basePageStyle = cx([
    styles.base,
    [styles.backgroundColor, backgroundColor],
    [styles.justifyContentCenter, justifyContentCenter],
    style,
  ]);
  return (
    <View style={basePageStyle}>
      {margin ? (
        <View style={{marginHorizontal: GUTTER.MEDIUM}}>{children}</View>
      ) : (
        children
      )}
    </View>
  );
};

export default BasePage;

const styles = StyleSheet.create({
  base: {flex: 1},
  backgroundColor: {backgroundColor: COLORS.BACKGROUNDCOLOR},
  justifyContentCenter: {justifyContent: 'center'},
});
