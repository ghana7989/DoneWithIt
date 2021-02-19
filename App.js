import React, { useState } from "react";
import { AppForm, AppFormField, AppFormPicker } from './app/components/AppForm';
import AppSafeAreaView from './app/components/AppSafeArea';
import ListingEditingScreen from './app/screens/ListingEditScreen';


export default function App() {

  return (
    <AppSafeAreaView>
      <ListingEditingScreen />
    </AppSafeAreaView>
  );

}


