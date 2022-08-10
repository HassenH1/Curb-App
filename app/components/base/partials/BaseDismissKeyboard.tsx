import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {cx} from '../../../utils/styles.utils';

interface IProps {
  children?: React.ReactNode;
  border?: boolean;
}

const BaseDismissKeyboard = (props: IProps) => {
  const {children, border = false} = props;

  const style = cx([styles.container, [styles.border, border]]);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={style}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default BaseDismissKeyboard;

const styles = StyleSheet.create({
  container: {flex: 1},
  border: {borderWidth: 3, borderColor: 'red'},
});
