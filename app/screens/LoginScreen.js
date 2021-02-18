import React, { Fragment, useState } from 'react';
import AppSafeAreaView from '../components/AppSafeArea';
import { Image, StyleSheet } from 'react-native';
import * as yup from "yup";
import { AppForm, AppFormField, AppSubmitButton } from '../components/AppForm';


const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password")
})

function LoginScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.warn(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="Login" />
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
export default LoginScreen;