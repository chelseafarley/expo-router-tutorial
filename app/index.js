import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home sweet home!</Text>
      <Button
        title="Go to Settings!"
        onPress={() => navigation.push("/settings")}
      />
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
