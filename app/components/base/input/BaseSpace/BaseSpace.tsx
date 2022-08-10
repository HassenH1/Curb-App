import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GUTTER} from '../../../../config/app.sizes';
import {cx} from '../../../../utils/styles.utils';
import {SpaceProps} from './SpaceProps';

/**
 * @component
 * Renders a space with standard sizes
 * @param   {SpaceProps}  props
 * @returns JSX.Element
 */
const Space = (props: SpaceProps) => {
  const {xxs, xs, sm = true, md, lg, xl, xxl, double, max, flex} = props;
  const classes = cx([
    [styles.sm, sm],
    [styles.xxs, xxs],
    [styles.xs, xs],
    [styles.md, md],
    [styles.lg, lg],
    [styles.xl, xl],
    [styles.xxl, xxl],
    [styles.double, double],
    [styles.max, max],
    [styles.flex, flex],
  ]);
  return <View style={classes} />;
};

export default Space;

const styles = StyleSheet.create({
  flex: {flex: 1},
  xxs: {width: GUTTER.XX_SMALL, height: GUTTER.XX_SMALL},
  xs: {width: GUTTER.X_SMALL, height: GUTTER.X_SMALL},
  sm: {width: GUTTER.SMALL, height: GUTTER.SMALL},
  md: {width: GUTTER.MEDIUM, height: GUTTER.MEDIUM},
  lg: {width: GUTTER.LARGE, height: GUTTER.LARGE},
  xl: {width: GUTTER.X_LARGE, height: GUTTER.X_LARGE},
  xxl: {width: GUTTER.XX_LARGE, height: GUTTER.XX_LARGE},
  double: {width: GUTTER.DOUBLE, height: GUTTER.DOUBLE},
  max: {width: GUTTER.MAX, height: GUTTER.MAX},
});
