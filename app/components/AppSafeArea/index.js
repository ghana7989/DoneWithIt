import React from 'react';
import { SafeAreaView } from 'react-native';
import AppSafeAreaStyles from './AppSafeAreaStyles';

function AppSafeAreaView({ children, style }) {
  return (
    <SafeAreaView style={[AppSafeAreaStyles.safeAreaContainer, style]}>
      { children}
    </SafeAreaView >
  );
}

export default AppSafeAreaView;