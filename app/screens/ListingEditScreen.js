import React, { Fragment, useState } from 'react';
import AppSafeAreaView from '../components/AppSafeArea';
import { Image, StyleSheet } from 'react-native';
import * as Yup from "yup";
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/AppForm';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
})
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
function ListingEditingScreen() {
  return (
    <AppSafeAreaView style={styles.container}>

      <AppForm
        initialValues={{ title: "", price: "", category: null, description: "" }}
        onSubmit={values => console.warn(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          placeholder="Description"
          name="description"
          maxLength={255}
          multiline
          numberOfLines={4}
          height={100}
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </AppSafeAreaView>
  );
}



const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  },
  container: {
    padding: 10
  }
})
export default ListingEditingScreen;