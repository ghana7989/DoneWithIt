import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("App executed");

  return (
    <React.Fragment>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
