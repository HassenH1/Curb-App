import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GUTTER} from '../../../../config/app.sizes';
import {TextProps} from '../BaseText/TextProps';
import {ButtonProps} from '../BastButton/ButtonProps';
import {cx} from '../../../../utils/styles.utils';

const BaseTextButton = (props: TextProps & ButtonProps) => {
  const {onPress, children, loading, disabled, centered, ...textProps} = props;

  const doPress = () => {
    if (loading || disabled) {
      return;
    }
    onPress && onPress();
  };

  const textButtonStyle = cx([styles.container, [styles.centered, centered]]);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={doPress}
      style={textButtonStyle}>
      {/* style={styles.container}> */}
      {loading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text style={styles.text} {...textProps}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BaseTextButton;

const styles = StyleSheet.create({
  container: {
    padding: GUTTER.X_SMALL,
  },
  text: {
    color: 'blue',
  },
  centered: {alignItems: 'center'},
});
