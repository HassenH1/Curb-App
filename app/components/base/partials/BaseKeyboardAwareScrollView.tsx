import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../../config/app.colors';
import {cx} from '../../../utils/styles.utils';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  centered?: boolean;
}

const BaseKeyboardAwareScrollView = (props: Props) => {
  const {children, style, centered} = props;
  const stylesView = cx([
    styles.container,
    [styles.justifyContentCenter, centered],
    style,
  ]);
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={10}
      extraHeight={10}
      keyboardOpeningTime={0}
      keyboardShouldPersistTaps={'handled'}
      style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};
export default BaseKeyboardAwareScrollView;

const styles = StyleSheet.create({
  container: {flexGrow: 1, backgroundColor: COLORS.BACKGROUNDCOLOR},
  justifyContentCenter: {justifyContent: 'center'},
  background: {backgroundColor: COLORS.BACKGROUNDCOLOR},
});
