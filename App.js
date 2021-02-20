import React, { useEffect, useState } from "react";
import AppSafeAreaView from './app/components/AppSafeArea';
import { ImageInputList } from './app/components/ImageInput';

export default function App() {

  const [uris, setUris] = useState([]);
  const handleAdd = uri => {
    setUris([...uris, uri])
  }
  const handleRemove = uri => {
    setUris(uris.filter(imageUri => imageUri !== uri))
  }
  return (
    <AppSafeAreaView>
      <ImageInputList
        imageUris={uris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </AppSafeAreaView>
  );

}


