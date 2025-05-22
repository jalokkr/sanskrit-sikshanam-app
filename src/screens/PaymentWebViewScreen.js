import React from "react";
import { WebView } from "react-native-webview";
import { Alert } from "react-native";

const PaymentWebViewScreen = ({ route, navigation }) => {
  const { paymentUrl, courseId } = route.params;

  const handleNavigation = (navState) => {
    const { url } = navState;

    if (url.includes("payment-result")) {
      const status = new URL(url).searchParams.get("order_status");

      if (status === "PAID") {
        Alert.alert("Payment Successful", "Access granted.");
        navigation.goBack();
        // You can trigger backend course unlock here
      } else {
        Alert.alert("Payment Failed", "Please try again.");
        navigation.goBack();
      }
    }
  };

  return (
    <WebView
      source={{ uri: paymentUrl }}
      onNavigationStateChange={handleNavigation}
      startInLoadingState
    />
  );
};

export default PaymentWebViewScreen;
