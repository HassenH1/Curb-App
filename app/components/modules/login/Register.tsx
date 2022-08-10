import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseForm from '../../base/form/BaseForm/BaseForm';
import {FormikHelpers, FormikProps} from 'formik';
import {IFormValues} from '../../base/form/BaseForm/FormProps';
import Space from '../../base/input/BaseSpace/BaseSpace';
import BaseTextInput from '../../base/form/BaseTextInput/BaseTextInput';
import Button from '../../base/input/BastButton/BaseButton';
import * as Yup from 'yup';
import {GUTTER} from '../../../config/app.sizes';
import BaseKeyboardAwareScrollView from '../../base/partials/BaseKeyboardAwareScrollView';

const Register = () => {
  //TODO
  const submitHandler = (
    values: IFormValues,
    {setSubmitting}: FormikHelpers<IFormValues>,
  ) => {
    console.log(values, '<====values?');
  };

  return (
    <BaseKeyboardAwareScrollView>
      <BaseForm
        initialValues={{
          username: '',
          email: '',
          password: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          phoneNum: '',
        }}
        validationSchema={SignUpSchema}
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
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              name="email"
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
              label="Email or email"
              error={errors.email}
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
            <Space xl />
            <BaseTextInput
              value={values.address}
              onChange={handleChange('address')}
              onBlur={handleBlur('address')}
              name="address"
              touched={touched.address}
              error={errors.address}
              label="Address"
              required
            />
            <Space xl />
            <BaseTextInput
              value={values.city}
              onChange={handleChange('city')}
              onBlur={handleBlur('city')}
              name="city"
              touched={touched.city}
              error={errors.city}
              label="City"
              required
            />
            <Space xl />
            <BaseTextInput
              value={values.state}
              onChange={handleChange('state')}
              onBlur={handleBlur('state')}
              name="state"
              touched={touched.state}
              error={errors.state}
              label="State"
              required
            />
            <Space xl />
            <BaseTextInput
              value={values.zip}
              onChange={handleChange('zip')}
              onBlur={handleBlur('zip')}
              name="zip"
              touched={touched.zip}
              error={errors.zip}
              label="Zip"
              required
            />
            <Space xl />
            <BaseTextInput
              value={values.phoneNum}
              onChange={handleChange('phoneNum')}
              onBlur={handleBlur('phoneNum')}
              name="phoneNum"
              touched={touched.phoneNum}
              error={errors.phoneNum}
              label="Phone Number"
              required
            />
            <Space xl />
            <Button onPress={handleSubmit} disabled={!isValid}>
              Register
            </Button>
            <Space xl />
          </View>
        )}
      </BaseForm>
    </BaseKeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: GUTTER.MEDIUM,
    marginHorizontal: GUTTER.MEDIUM,
  },
});

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Required'),
  phoneNum: Yup.string()
    .min(2, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
  zip: Yup.string()
    .min(2, 'Too Short!')
    .max(6, 'Too Long!')
    .required('Required'),
  state: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
});
