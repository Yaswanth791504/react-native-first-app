import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    number >= 0 && setNumber((number) => number + 1);
  };

  const handleDecrese = () => {
    number > 0 && setNumber((number) => number - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <Button style={styles.button} title="Increase" onPress={handleIncrease} />
      <Button style={styles.button} title="Decrease" onPress={handleDecrese} />
      <Button
        style={styles.button}
        title="Profile"
        onPress={() => navigation.navigate("Profile Screen")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  text: {
    fontSize: 50,
  },

  button: {
    margin: 10,
    borderRadius: "50%",
  },
});

export default HomeScreen;
