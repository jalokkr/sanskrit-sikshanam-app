import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import { LineChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const LearningAnalytics = () => {
  // Weekly learning data remains the same
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [2.5, 1.8, 3.0, 2.2, 1.5, 4.0, 2.8],
        color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Hours"],
  };

  // Quiz performance data
  const quizData = [
    {
      name: "Correct",
      population: 75,
      color: "#4CAF50",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Incorrect",
      population: 15,
      color: "#F44336",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Skipped",
      population: 10,
      color: "#FFC107",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#6200ee",
    },
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Weekly Learning Hours</Title>
          <LineChart
            data={weeklyData}
            width={screenWidth - 64}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            fromZero
            withInnerLines={false}
            withOuterLines={true}
            withVerticalLines={false}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Quiz Performance Overview</Title>
          <PieChart
            data={quizData}
            width={screenWidth - 64}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={styles.chart}
          />
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default LearningAnalytics;
