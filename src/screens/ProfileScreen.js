import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, Paragraph, Button, Avatar } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://static.toiimg.com/photo/107853531.cms" }}
        />
        <Title style={styles.name}>Vidyarthi</Title>
        <Paragraph>vidyarthi@email.com</Paragraph>
      </View>

      <Card style={styles.statsCard}>
        <Card.Content>
          <Title>Learning Statistics</Title>
          <Paragraph>Courses Enrolled: 5</Paragraph>
          <Paragraph>Courses Completed: 3</Paragraph>
          <Paragraph>Total Learning Hours: 24h 30m</Paragraph>
        </Card.Content>
      </Card>

      {/* <Card style={styles.settingsCard}>
        <Card.Content>
          <Title>Settings</Title>
        </Card.Content>
        <Card.Actions>
          <Button>Edit Profile</Button>
          <Button>Change Password</Button>
        </Card.Actions>
      </Card> */}

      <Button
        mode="contained"
        style={styles.logoutButton}
        onPress={() => {
          /* Handle logout */
        }}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginVertical: 24,
  },
  name: {
    marginTop: 16,
  },
  statsCard: {
    marginBottom: 16,
  },
  settingsCard: {
    marginBottom: 16,
  },
  logoutButton: {
    marginVertical: 16,
  },
});

export default ProfileScreen;
