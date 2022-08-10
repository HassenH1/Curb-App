import {TextProps as NativeTextProps} from 'react-native';
import {ReactNode} from 'react';

/**
 * @typedef       {Object}                TextProps
 * @extends       NativeTextProps
 * @property      {string | ReactNode}    children    -   Text or nodes to render
 * @property      {boolean}               regular     -   Use Lato-Regular font ( default )
 * @property      {boolean}               bold        -   Use Lato-Bold font
 *
 * @property      {boolean}               xxxs        -   Set xxxs font size                @see {@link FONT_SIZE.XXX_SMALL}
 * @property      {boolean}               xxs         -   Set xxs font size                 @see {@link FONT_SIZE.XX_SMALL}
 * @property      {boolean}               xs          -   Set xs font size                  @see {@link FONT_SIZE.X_SMALL}
 * @property      {boolean}               small       -   Set small font size               @see {@link FONT_SIZE.SMALL}
 * @property      {boolean}               medium      -   Set medium font size (default)    @see {@link FONT_SIZE.BASE}
 * @property      {boolean}               large       -   Set large font size               @see {@link FONT_SIZE.LARGE}
 * @property      {boolean}               xl          -   Set xl font size                  @see {@link FONT_SIZE.X_LARGE}
 * @property      {boolean}               xxl         -   Set xxl font size                 @see {@link FONT_SIZE.XX_LARGE}
 * @property      {boolean}               huge        -   Set huge font size                @see {@link FONT_SIZE.HUGE}
 *
 * @property      {boolean}               centered    -   Align text to center
 * @property      {boolean}               right       -   Align text to right
 *
 * @property      {boolean}               uppercase   -   Set all text to uppercase
 * @property      {boolean}               lowercase   -   Set all text to lowercase
 * @property      {boolean}               capitalize  -   Capitalize first letter of each word
 * @property      {boolean}               underline   -   Adds an underline to text
 * @property      {boolean}               flex        -   Adds a flex:1 style to text
 *
 * @property      {string}               red        -   Add color to text
 */

/**
 * @type {TextProps}
 */
export type TextProps = NativeTextProps & {
  children?: string | ReactNode;

  //Font Color
  placeholder?: boolean;
  whiteText?: boolean;
  red?: boolean;
  info?: boolean;

  // Font Family
  regular?: boolean;
  bold?: boolean;

  // Size
  xxxs?: boolean;
  xxs?: boolean;
  xs?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xl?: boolean;
  xxl?: boolean;
  huge?: boolean;

  // Align
  centered?: boolean;
  right?: boolean;
  left?: boolean;

  // Text transform
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  underline?: boolean;

  // Flex
  flex?: boolean;
};
