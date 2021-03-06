import React from 'react';
import AppSafeAreaView from '../components/AppSafeArea';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/AppForm';
import { AppCategoryPicker } from '../components/AppPicker';
import AppFormImagePicker from '../components/AppForm/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
})
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];
function ListingEditingScreen() {
  const location = useLocation()
  return (
    <AppSafeAreaView style={styles.container}>

      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={values => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
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
          width={130}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={AppCategoryPicker}
          numberOfColumns={3}
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