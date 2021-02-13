import React from 'react';
import { SafeAreaView } from 'react-native';
import AppSafeAreaStyles from './AppSafeAreaStyles';

function AppSafeAreaView({ children }) {
  return (
    <SafeAreaView style={AppSafeAreaStyles.safeAreaContainer}>
      {children}
    </SafeAreaView>
  );
}

export default AppSafeAreaView;