// import {TextInputMaskProps} from 'react-native-text-input-mask';
import {ObjectSchema} from 'yup';

/**
 * @typedef         {Object}            TextInputProps
 * @augments        TextInputMaskProps
 * @property        {string}            error         - Error message to show below the input.
 * @property        {string}            touched       - shows if input was touched.
 * @property        {string}            name       - name of input.
 * @property        {string}            success       - success message to show below the input.
 * @property        {string}            info          - Info message to show bellow the input.
 * @property        {string}            mask          - Mask to apply to the input.
 * @property        {Function}          next          - Function used to focus the next input.
 * @property        {boolean}           password      - Overrides the secureTextEntry prop.
 * @property        {string}            label         - Label to show above the Input.
 * @property        {boolean}           required      - Mark this input as required.
 * @property        {JSX.Element}       leftIcon      - Icon to show on the left
 * @property        {JSX.Element}       rightIcon     - Icon to show on the right
 * @property        {ObjectSchema}      validation    - Validation to apply on input blur event
 * @property        {bool}              counter       - if true and multiline is enabled, shows a counter based on maxLengh prop
 */

/**
 * @type        {TextInputProps}
 */
export interface TextInputProps extends Omit<any, 'onChangeText'> {
  // extends Omit<TextInputMaskProps, 'onChangeText'> {
  error?: string;
  success?: string;
  info?: string;
  next?: () => void;
  mask?: string;
  password?: boolean;
  label?: string;
  required?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  validation?: ObjectSchema<any>;
  counter?: boolean;
  onChange?: (e: any) => void;
  name?: string;
  touched?: string;
}

/**
 * @typedef   {Object}        IconType
 * @property  {any}           family    - Any Icon family like Ionicos, SimpleLineIcons, etc
 * @property  {string}        name      - name of the icon to use
 */

export type IconType = {
  family: any;
  name: string;
};
