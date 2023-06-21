import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button title="Go home!" onPress={() => navigation.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
