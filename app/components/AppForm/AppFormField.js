import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import { AppTextInput } from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

function AppFormField({ name, ...otherProps }) {

  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />

    </Fragment>
  );
}


export default AppFormField;