import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Avatar } from "react-native-paper";

const Achievements = () => {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.sectionTitle}>Your Achievements</Title>

      <View style={styles.achievementGrid}>
        {achievements.map((achievement, index) => (
          <Card key={index} style={styles.achievementCard}>
            <Card.Content>
              <Avatar.Icon size={50} icon={achievement.icon} />
              <Title style={styles.achievementTitle}>{achievement.title}</Title>
              <Paragraph>{achievement.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  achievementGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  achievementCard: {
    width: "48%",
    marginBottom: 16,
  },
  achievementTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
});

export default Achievements;
