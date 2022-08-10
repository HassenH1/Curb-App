import React from 'react';
import {StyleSheet} from 'react-native';
import {GUTTER} from '../../../../config/app.sizes';
import Text from '../../input/BaseText/BaseText';
import {LabelType} from './LabelProps';

const Label = ({required = false, children, ...props}: LabelType) => {
  return (
    <Text small style={styles.label} {...props}>
      {children}
      {required && (
        <Text small style={styles.required} {...props}>
          {' *'}
        </Text>
      )}
    </Text>
  );
};
export default Label;

const styles = StyleSheet.create({
  label: {
    color: 'gray',
    marginBottom: GUTTER.XX_SMALL,
  },
  required: {
    color: 'red',
  },
});
