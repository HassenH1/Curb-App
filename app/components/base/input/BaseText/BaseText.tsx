import React, {useMemo} from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
// import {FONTS} from '../../../../config/app.fonts';
import {FONT_SIZE} from '../../../../config/app.sizes';
import {cx} from '../../../../utils/styles.utils';
import {TextProps} from './TextProps';

/**
 * @component
 * Renders text on screen with standard style
 * @param   {TextProps}    props
 */
const Text = (props: TextProps) => {
  const {children, regular = true, bold, placeholder, whiteText, info} = props;
  const {xxxs, xxs, xs, small, medium = true, large, xl, xxl, huge} = props;
  const {centered, right, left, uppercase, lowercase, capitalize, underline} =
    props;
  const {red} = props;
  const {style, flex} = props;
  const {allowFontScaling = true, adjustsFontSizeToFit} = props;

  const textStyle = useMemo(
    () =>
      cx([
        styles.base,
        [styles.placeholder, placeholder],
        [styles.whiteText, whiteText],
        [styles.info, info],
        // [styles.regular, regular],
        // [styles.bold, bold],

        [styles.medium, medium],
        [styles.xxxs, xxxs],
        [styles.xxs, xxs],
        [styles.xs, xs],
        [styles.small, small],
        [styles.large, large],
        [styles.xl, xl],
        [styles.xxl, xxl],
        [styles.huge, huge],

        [styles.red, red],

        [styles.underline, underline],
        [styles.centered, centered],
        [styles.right, right],
        [styles.left, left],
        [styles.uppercase, uppercase],
        [styles.uppercase, lowercase],
        [styles.capitalize, capitalize],
        [styles.flex, flex],
        style,
      ]),
    [
      // bold,
      capitalize,
      centered,
      flex,
      huge,
      large,
      lowercase,
      medium,
      // regular,
      right,
      small,
      style,
      underline,
      uppercase,
      xl,
      xs,
      xxl,
      xxs,
      xxxs,
      placeholder,
      whiteText,
      red,
    ],
  );

  return (
    <NativeText
      style={textStyle}
      allowFontScaling={allowFontScaling || undefined}
      adjustsFontSizeToFit={adjustsFontSizeToFit || false}>
      {children}
    </NativeText>
  );
};
export default Text;

const styles = StyleSheet.create({
  base: {color: 'black'},
  placeholder: {color: 'grey'},
  whiteText: {color: 'white'},
  info: {color: 'blue'},
  // regular: {fontFamily: FONTS.DEFAULT_FONT.REGULAR},
  // bold: {fontFamily: FONTS.DEFAULT_FONT.BOLD},
  xxxs: {fontSize: FONT_SIZE.XXX_SMALL},
  xxs: {fontSize: FONT_SIZE.XX_SMALL},
  xs: {fontSize: FONT_SIZE.X_SMALL},
  small: {fontSize: FONT_SIZE.SMALL},
  medium: {fontSize: FONT_SIZE.BASE},
  large: {fontSize: FONT_SIZE.LARGE},
  xl: {fontSize: FONT_SIZE.X_LARGE},
  xxl: {fontSize: FONT_SIZE.XX_LARGE},
  huge: {fontSize: FONT_SIZE.HUGE},

  capitalize: {textTransform: 'capitalize'},
  uppercase: {textTransform: 'uppercase'},
  lowercase: {textTransform: 'lowercase'},
  underline: {textDecorationLine: 'underline'},
  centered: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},

  red: {color: 'red'},

  flex: {flex: 1},
});
