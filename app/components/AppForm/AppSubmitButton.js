import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AppButton } from '../AppButton';

function AppSubmitButton({title}) {

  const { handleSubmit } = useFormikContext()

  return (
    <AppButton title="Login" onPress={handleSubmit} />
  );
}


const styles = StyleSheet.create({

})
export default AppSubmitButton;