import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const username = route.params?.username || "User";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.welcome}>Welcome, {username}!</Text>
        <Button
          title="Back to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});

export default HomeScreen;
