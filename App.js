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

export default function App() {
  console.log("App executed");

  return (
    // <WelcomeScreen />
    <ViewImageScreen />
    // <Card title="Red Leather Jacket" subTitle="$50" image="" />
    // <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({

});
