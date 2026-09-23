import { StyleSheet, Text, View } from "react-native";

export default function BlankTextPage() {
  return (
    <View style={styles.container}>
      <Text>Testing the page for blank text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
