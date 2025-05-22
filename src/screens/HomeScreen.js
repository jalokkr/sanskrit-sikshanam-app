import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import EnrolledCourses from "../components/dashboard/EnrolledCourses";
import LearningStats from "../components/dashboard/LearningStats";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Welcome Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome back!</Title>
          <Paragraph>Continue your Sanskrit learning journey</Paragraph>
        </Card.Content>
      </Card>

      {/* Learning Statistics */}
      <LearningStats />

      {/* Current Course Progress */}
      <EnrolledCourses navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
});

export default HomeScreen;
