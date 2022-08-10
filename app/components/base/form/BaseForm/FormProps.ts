export interface IBaseForm {
  children?: React.ReactNode;
  initialValues?: IFormValues;
  enableReinitialize?: boolean;
  validationSchema?: any;
  submitHandler?: (
    values: IFormValues,
    setSubmitting: any,
    initialValues?: IFormValues,
  ) => void;
}

export interface IFormValues {
  [key: string]: string | number | boolean | Array<any>;
}
