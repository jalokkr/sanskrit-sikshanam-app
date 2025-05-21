import React from "react";
import { WebView } from "react-native-webview";

const PaymentWebViewScreen = ({ route, navigation }) => {
  const { paymentUrl } = route.params;

  const handleNavigation = (navState) => {
    if (navState.url.includes("payment-success")) {
      navigation.goBack(); // Close WebView
      // You can also trigger a course access update here
    } else if (navState.url.includes("payment-failed")) {
      navigation.goBack(); // Optionally show an error
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
