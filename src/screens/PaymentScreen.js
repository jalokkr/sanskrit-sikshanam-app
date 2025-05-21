import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import PaymentService from "../services/PaymentService";

const PaymentScreen = ({ route, navigation }) => {
  const { courseId, courseName, amount } = route.params;
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const result = await PaymentService.initiatePayment(courseId, amount);

      if (result.success) {
        navigation.navigate("PaymentWebView", {
          paymentUrl: result.paymentUrl,
          courseId,
        });
      }
    } catch (error) {
      Alert.alert("Payment Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.paymentCard}>
        <Card.Content>
          <Title>Buy Course</Title>
          <Paragraph>{courseName}</Paragraph>
          <Paragraph>Price: ₹{amount}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handlePayment}
            loading={loading}
            disabled={loading}
          >
            Pay Now
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  paymentCard: {
    marginVertical: 16,
  },
});

export default PaymentScreen;
