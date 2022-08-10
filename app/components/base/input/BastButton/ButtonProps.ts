import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export type ButtonProps = {
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  children?: string | ReactNode;
  style?: ViewStyle | Object;
  outlined?: boolean;
  flex?: boolean;
  delete?: boolean;
  Icon?: IconType;
  small?: boolean;
};

export type IconType = {
  family: any;
  name: string;
};
