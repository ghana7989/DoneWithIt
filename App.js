import React from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from './app/components/AppButton';
import { AppText } from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("App executed");

  return (
    // {/* <WelcomeScreen /> */}
    // {/* <ViewImageScreen /> */}
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

    }}>

      <AppText>
        I Love React Native
      </AppText>
      <AppButton key={uuid()} title="Get The Fuck OFF" onPress={() => console.warn("Tapped")} />
    </View>
  );
}

const styles = StyleSheet.create({

});
