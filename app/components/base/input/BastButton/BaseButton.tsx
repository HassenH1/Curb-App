import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ButtonProps} from './ButtonProps';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_SIZE,
  GUTTER,
  ICON_SIZE,
} from '../../../../config/app.sizes';
import {cx} from '../../../../utils/styles.utils';
import Space from '../BaseSpace/BaseSpace';
import Text from '../BaseText/BaseText';
import {COLORS} from '../../../../config/app.colors';

const Button = (props: ButtonProps) => {
  const {
    small,
    loading,
    outlined,
    disabled,
    children,
    flex = false,
    style,
    onPress,
    delete: remove,
    Icon,
  } = props;

  const doPress = () => {
    if (loading || disabled) {
      return;
    }
    onPress && onPress();
  };

  const buttonStyle = useMemo(
    () =>
      cx([
        styles.container,
        [styles.normal, !small],
        [styles.small, small],
        [styles.disabled, disabled],
        [styles.outlined, outlined],
        [styles.flex, flex],
        [styles.delete, remove],
        style,
      ]),
    [small, flex, outlined, disabled, style, remove],
  );

  const IconType = Icon ? Icon.family : null;
  const iconColor = outlined ? 'blue' : 'white';

  const textStyle = useMemo(
    () => cx([styles.text, [styles.outlinedText, outlined], style]),
    [outlined, style],
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.85}
      style={buttonStyle}
      onPress={doPress}>
      {loading ? (
        <ActivityIndicator size={FONT_SIZE.LARGE} color="white" />
      ) : (
        <View style={styles.row}>
          {Icon && (
            <>
              <IconType
                name={Icon.name}
                size={ICON_SIZE.MEDIUM}
                color={iconColor}
              />
              {children && <Space xs />}
            </>
          )}
          {children && (
            <Text
              large={!small}
              medium={small}
              style={textStyle}
              allowFontScaling={false}
              adjustsFontSizeToFit>
              {children}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.XX_SMALL,
    backgroundColor: COLORS.SECONDARY,
    // backgroundColor: 'white',
    alignItems: 'center',
  },
  normal: {
    padding: GUTTER.X_SMALL,
    minHeight: GUTTER.X_SMALL * 3 + FONT_SIZE.LARGE,
    maxHeight: GUTTER.X_SMALL * 3 + FONT_SIZE.LARGE,
  },
  small: {
    padding: GUTTER.XX_SMALL,
    minHeight: GUTTER.X_SMALL * 2 + FONT_SIZE.BASE,
    maxHeight: GUTTER.X_SMALL * 2 + FONT_SIZE.BASE,
  },
  flex: {
    flex: 1,
  },
  disabled: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    padding: 0,
    margin: 0,
  },
  outlined: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: BORDER_WIDTH.SMALL,
    textAlign: 'center',
  },
  outlinedText: {
    color: 'black',
  },
  delete: {
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: BORDER_WIDTH.SMALL,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
