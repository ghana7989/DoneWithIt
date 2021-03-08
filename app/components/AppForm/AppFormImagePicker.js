import React from 'react';
import { useFormikContext } from 'formik';
import { ImageInputList } from '../ImageInput';
import AppErrorMessage from './AppErrorMessage';

function AppFormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  // Functions 
  const handleAdd = uri => {
    setFieldValue(name, [...values[name], uri])
  }
  const handleRemove = uri => {
    setFieldValue(name, values[name].filter(imageUri => imageUri !== uri))
  }

  return (
    <React.Fragment>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}




export default AppFormImagePicker;