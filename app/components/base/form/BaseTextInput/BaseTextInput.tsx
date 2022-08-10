import React, {forwardRef, useMemo, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  TextInput,
  View,
} from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
import {TextInputProps} from './TextInputProps';
import Text from '../../input/BaseText/BaseText';
import {cx} from '../../../../utils/styles.utils';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_SIZE,
  GUTTER,
  ICON_SIZE,
} from '../../../../config/app.sizes';
import Label from '../BaseLabel/BaseLabel';
import {COLORS} from '../../../../config/app.colors';

/**
 * @component
 * Renders a text input with standard styles.
 * @param   {TextInputProps} props
 * @returns JSX.Element
 */
const BaseTextInput = forwardRef<any, TextInputProps>((props, ref) => {
  const {value = '', leftIcon, rightIcon} = props;
  const {
    name,
    error,
    touched,
    success,
    info,
    next,
    mask,
    password = false,
    label,
    required = false,
    onChange,
    onBlur,
    style,
    ...moreProps
  } = props;
  const {multiline, numberOfLines = 1, maxLength, ...other} = moreProps;
  const innerRef = React.useRef();
  const combinedRef = ref || innerRef;
  const [localError, setLocalError] = useState('');
  const LeftIconType = leftIcon ? leftIcon.family : null;
  const RightIconType = rightIcon ? rightIcon.family : null;

  const inputStyles = useMemo(
    () =>
      cx([
        styles.input,
        [styles.inputWithLeftIcon, LeftIconType != null],
        [styles.inputWithRightIcon, RightIconType != null],
        [styles.inputMultiline, multiline],
        [{height: FONT_SIZE.SMALL * numberOfLines}, numberOfLines > 1],
        style,
      ]),
    [style, LeftIconType, RightIconType, multiline, numberOfLines],
  );

  const doNext = () => {
    if (!multiline) {
      next && next();
    }
  };

  const theError = error || localError;
  const counter =
    maxLength && multiline ? `${value.length || 0}/${maxLength}` : '';

  return (
    <View style={styles.container}>
      {label && <Label required={required}>{label}</Label>}
      <View>
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          ref={combinedRef}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          multiline={multiline}
          secureTextEntry={password}
          style={inputStyles}
          onSubmitEditing={doNext}
          returnKeyType={multiline ? undefined : next == null ? 'done' : 'next'}
          blurOnSubmit={next == null && !multiline}
          {...other}
        />
        {/* <TextInputMask
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          multiline={multiline}
          mask={mask}
          ref={combinedRef}
          value={value}
          onChangeText={onChange}
          secureTextEntry={password}
          style={inputStyles}
          blurOnSubmit={next == null && !multiline}
          onSubmitEditing={doNext}
          onBlur={doBlur}
          returnKeyType={multiline ? undefined : next == null ? 'done' : 'next'}
          {...other}
        /> */}
        {leftIcon != null && (
          <LeftIconType
            name={leftIcon.name}
            style={styles.leftIcon}
            size={ICON_SIZE.BASE}
          />
        )}
        {rightIcon != null && (
          <RightIconType
            name={rightIcon.name}
            style={styles.rightIcon}
            size={ICON_SIZE.BASE}
          />
        )}
      </View>

      {theError != null && theError.length > 0 && touched && !success && (
        <Text style={styles.errorText} xs>
          {theError}
        </Text>
      )}
      {success != null && success.length > 0 && !theError && value.length > 0 && (
        <Text style={styles.successText} xs>
          {success}
        </Text>
      )}
      {info != null && info.length > 0 && !theError && !success && (
        <Text style={styles.infoText} xs>
          {info}
        </Text>
      )}
      {counter != null && counter.length > 0 && !theError && !success && (
        <Text style={styles.infoText} xs right>
          {counter}
        </Text>
      )}
    </View>
  );
});
export default BaseTextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: GUTTER.XX_SMALL,
    paddingVertical: GUTTER.XXX_SMALL,

    // borderRadius: BORDER_RADIUS.X_SMALL,
    // borderWidth: BORDER_WIDTH.SMALL,
    borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    // borderColor: getColor('gray-600'),

    backgroundColor: '#F2F2F2',
    // backgroundColor: 'white',
    color: '#424242',

    fontSize: FONT_SIZE.SMALL,
    // fontFamily: 'Lato-Regular',

    height: FONT_SIZE.SMALL * 1.35 + GUTTER.X_SMALL * 2,
  },
  inputMultiline: {
    textAlignVertical: 'top',
  },
  inputWithLeftIcon: {
    paddingLeft: GUTTER.X_LARGE,
  },
  inputWithRightIcon: {
    paddingRight: GUTTER.SMALL,
  },
  label: {
    color: 'gray',
    // color: getColor('gray-700'),
    marginBottom: GUTTER.XX_SMALL,
  },
  required: {
    color: COLORS.DANGER,
    // color: getColor('red-600'),
  },
  errorText: {
    color: COLORS.DANGER,
    // color: getColor('red-600'),
    marginTop: GUTTER.XX_SMALL,
    marginLeft: GUTTER.XX_SMALL,
  },
  successText: {
    color: 'green',
    // color: getColor('green-600'),
    marginTop: GUTTER.XX_SMALL,
    marginLeft: GUTTER.XX_SMALL,
  },
  infoText: {
    marginTop: GUTTER.XX_SMALL,
    marginLeft: GUTTER.XX_SMALL,
  },
  leftIcon: {
    position: 'absolute',
    left: GUTTER.X_SMALL,
    top: GUTTER.X_SMALL,
  },
  rightIcon: {
    position: 'absolute',
    right: GUTTER.X_SMALL,
    top: GUTTER.X_SMALL,
  },
});
