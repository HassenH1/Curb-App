import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseForm from '../../base/form/BaseForm/BaseForm';
import * as Yup from 'yup';
import {IFormValues} from '../../base/form/BaseForm/FormProps';
import {FormikHelpers} from 'formik';
import Space from '../../base/input/BaseSpace/BaseSpace';
import BaseTextInput from '../../base/form/BaseTextInput/BaseTextInput';
import Button from '../../base/input/BastButton/BaseButton';
import {FormikProps} from 'formik';
import BasePage from '../../base/partials/BasePage';
import BaseKeyboardAvoidingView from '../../base/partials/BaseKeyboardAvoidingView';
import BaseDismissKeyboard from '../../base/partials/BaseDismissKeyboard';
import {GUTTER} from '../../../config/app.sizes';
import BaseTextButton from '../../base/input/BaseTextButton/BaseTextButton';
import {NavigationProp} from '@react-navigation/native';
import {AUTHROUTES} from '../../../enums/enums';

interface Props {
  navigation: NavigationProp<any, any>;
}

const LoginDefault = (props: Props) => {
  const {navigation} = props;
  //TODO
  const submitHandler = (
    values: IFormValues,
    {setSubmitting}: FormikHelpers<IFormValues>,
  ) => {
    console.log(values, '<====values?');
  };

  const navigateToForgotPassword = () =>
    navigation.navigate(AUTHROUTES.LOGINFORGOTPASSWORD);

  const navigateToRegistrationPage = () =>
    navigation.navigate(AUTHROUTES.REGISTER);

  return (
    <BasePage>
      <BaseKeyboardAvoidingView>
        <BaseDismissKeyboard>
          <BaseForm
            initialValues={{username: '', password: ''}}
            validationSchema={SignInSchema}
            submitHandler={submitHandler}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }: FormikProps<IFormValues>) => (
              <View style={styles.container}>
                <Space lg />
                <BaseTextInput
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  name="username"
                  touched={touched.username}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  label="Email or Username"
                  error={errors.username}
                  required
                />
                <Space lg />
                <BaseTextInput
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  name="password"
                  touched={touched.password}
                  error={errors.password}
                  label="Password"
                  required
                  password
                />
                <Space lg />
                <Button onPress={handleSubmit} disabled={!isValid}>
                  SIGN IN
                </Button>
                <Space lg />
                <BaseTextButton onPress={navigateToForgotPassword} centered>
                  Forgot Password
                </BaseTextButton>
                <Space lg />
                <Button onPress={navigateToRegistrationPage} outlined>
                  CREATE AN ACCOUNT
                </Button>
              </View>
            )}
          </BaseForm>
        </BaseDismissKeyboard>
      </BaseKeyboardAvoidingView>
    </BasePage>
  );
};

export default LoginDefault;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: GUTTER.MEDIUM,
    marginHorizontal: GUTTER.MEDIUM,
  },
});

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Required'),
});
