import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const theme = useTheme();

  const handleRegister = () => {
    // Register logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        left={<TextInput.Icon icon="email" />}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry={!showPassword}
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry={!showConfirmPassword}
        left={<TextInput.Icon icon="lock-check" />}
        right={
          <TextInput.Icon
            icon={showConfirmPassword ? "eye-off" : "eye"}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        }
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleRegister}
        style={[styles.button, { backgroundColor: "#F1BD56" }]}
        icon="account-plus"
      >
        Register
      </Button>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 40,
    borderRadius: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  linkButton: {
    marginTop: 12,
    alignItems: "center",
  },
  linkText: {
    color: "#777",
  },
});

export default RegisterScreen;
