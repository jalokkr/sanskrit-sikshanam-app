import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context/AuthContext";
// import { CourseProvider } from "./src/context/CourseContext";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="#F1BD56" barStyle="light-content" />
      <AuthProvider>
        {/* <CourseProvider> */}
        <AppNavigator />
        {/* </CourseProvider> */}
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
