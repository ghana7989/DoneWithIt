import React from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from './app/components/AppButton';
import { AppText } from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { Card } from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppSafeAreaView from './app/components/AppSafeArea';
import { Icon } from './app/components/Icon';

export default function App() {
  console.log("App executed");

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <Card title="Red Leather Jacket" subTitle="$50" image="" />
    // <ListingDetailsScreen />
    <AppSafeAreaView>
      <Icon name="email" iconColor="white" size={50} backgroundColor="red" />
    </AppSafeAreaView>
  );

}

const styles = StyleSheet.create({

});
