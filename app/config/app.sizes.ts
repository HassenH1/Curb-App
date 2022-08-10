import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

/**
 * Scales a size accordingly to the device screen pixel/ratio and dimensions.
 * @param   {number}  value - value to scale
 */
const scale = (value: number) => {
  const factor = width > 600 ? 0.2 : 0.4;
  return moderateScale(value, factor);
};

/**
 * @typedef GUTTER
 * Standard space units to use on margins, paddings and any other space.
 */
export const GUTTER = {
  XXX_SMALL: scale(2),
  XX_SMALL: scale(4),
  X_SMALL: scale(8),
  SMALL: scale(16),
  MEDIUM: scale(20),
  LARGE: scale(24),
  X_LARGE: scale(32),
  DOUBLE: scale(48),
  XX_LARGE: scale(64),
  MAX: scale(96),
};

/**
 * @typedef FONT_SIZE
 * Standard font sizes for the application.
 */
export const FONT_SIZE = {
  XXX_SMALL: scale(9),
  XX_SMALL: scale(10),
  X_SMALL: scale(12),
  SMALL: scale(14),
  BASE: scale(16),
  LARGE: scale(18),
  X_LARGE: scale(22),
  XX_LARGE: scale(28),
  HUGE: scale(36),
};

/**
 * @typedef BORDER_RADIUS
 * Standard border radius sizes for the application.
 */
export const BORDER_RADIUS = {
  NONE: 0,
  XXX_SMALL: scale(3),
  XX_SMALL: scale(5),
  X_SMALL: scale(8),
  SMALL: scale(16),
  MEDIUM: scale(24),
  LARGE: scale(32),
};

/**
 * @typedef BORDER_WIDTH
 * Standard border widths sizes for the application.
 */
export const BORDER_WIDTH = {
  NONE: 0,
  SMALL: scale(1),
  MEDIUM: scale(2),
  LARGE: scale(3),
  X_LARGE: scale(5),
  XX_LARGE: scale(8),
};

/**
 * @typedef ICON_SIZE
 * Standard icon sizes for the application.
 */
export const ICON_SIZE = {
  SMALL: scale(14),
  BASE: scale(18),
  MEDIUM: scale(24),
  LARGE: scale(32),
  X_LARGE: scale(40),
  XX_LARGE: scale(48),
  XXX_LARGE: scale(56),
  HUGE: scale(64),
  ENORMOUS: scale(110),
};

/**
 * @typedef BUTTON_SIZE
 * Standard button sizes for the application.
 */
export const BUTTON_SIZE = {
  XS: scale(28),
  SMALL: scale(36),
  MEDIUM: scale(48),
  LARGE: scale(54),
};

/**
 * @enum INDICATOR_SIZES
 * Standard activity indicator sizes for the application.
 */
export enum INDICATOR_SIZES {
  SMALL = 'small',
  LARGE = 'large',
}
