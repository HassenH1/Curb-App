import {LOGINROUTES} from '../../../../enums/enums';
import type {StackNavigationProp} from '@react-navigation/stack';

export type LoginStackParamList = {
  [key: string]: React.FC | undefined;
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  LOGINROUTES.LOGINFORGOTPASSWORD
>;
