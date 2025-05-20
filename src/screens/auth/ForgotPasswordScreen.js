import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Title, Text } from "react-native-paper";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement password reset logic here
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Reset Password</Title>

      <Text style={styles.description}>
        Enter your email address and we'll send you instructions to reset your
        password.
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button
        mode="contained"
        onPress={handleResetPassword}
        style={styles.button}
      >
        Send Reset Link
      </Button>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.linkButton}
      >
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  linkButton: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default ForgotPasswordScreen;
