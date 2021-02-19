import { useFormikContext } from 'formik';
import React from 'react';
import { AppPicker } from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({ name, items, PickerItemComponent, placeholder, width, numberOfColumns }) {
  const { errors, touched, setFieldValue, values } = useFormikContext()
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item, true)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <AppErrorMessage error={errors.name} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;