import React, { useState } from "react";
import { AppPicker } from './app/components/AppPicker';
import AppSafeAreaView from './app/components/AppSafeArea';
import { AppTextInput } from './app/components/AppTextInput';

const categories = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "clothing",
    value: 5
  },
  {
    label: "Phones",
    value: 145
  },
  {
    label: "Cameras",
    value: 5011
  },
  {
    label: "Dogs",
    value: 78
  },
]
export default function App() {
  console.log("App executed");
  const [category, setCategory] = useState(undefined);
  return (

    <AppSafeAreaView>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories} />
      <AppTextInput icon="email" placeholder="Email" />
    </AppSafeAreaView>

  );

}


