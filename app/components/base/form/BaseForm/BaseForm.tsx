import React from 'react';
import {Formik} from 'formik';
import {IBaseForm} from './FormProps';

/**
 *
 * @param param0
 * @returns
 */
const BaseForm = ({
  children,
  initialValues = {},
  validationSchema,
  enableReinitialize = true,
  submitHandler = () => {
    return;
  },
}: IBaseForm) => {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
      validationSchema={validationSchema}
      onSubmit={(values, setSubmitting) => {
        submitHandler(values, setSubmitting, initialValues);
      }}>
      {children}
    </Formik>
  );
};

export default BaseForm;
