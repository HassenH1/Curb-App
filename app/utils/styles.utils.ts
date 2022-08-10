import {ViewStyle} from 'react-native';

/**
 * @type {Array<[React.CSSProperties,Boolean]>}  array with two items, first one is the style to apply, and the second one a boolean condition
 */
type ConditionalStyle = Array<[React.CSSProperties, Boolean]>;

/**
 * @param args {Array<React.CSSProperties | ConditionalStyle>} Array of styles to merge
 * @return {Array<React.CSSProperties>} an array of merged styles
 */
export const cx = (
  ...args: Array<React.CSSProperties | ConditionalStyle | Object>
): Array<ViewStyle> => {
  const mergedStyles = args.reduce(
    (result: Array<React.CSSProperties> = [], styles) => {
      if (!styles) {
        return result;
      }

      if (Array.isArray(styles)) {
        styles.map(item => {
          if (Array.isArray(item)) {
            const [style, condition] = item;
            if (condition) {
              result.push(style);
            }
          } else {
            if (item != null) {
              result.push(item);
            }
          }
        });
      } else {
        result.push(styles);
      }
      return result;
    },
    [],
  );

  return Object.assign({}, ...mergedStyles);
};
